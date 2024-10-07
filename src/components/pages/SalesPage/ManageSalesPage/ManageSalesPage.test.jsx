import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

vi.mock('persistent/inventory', () => ({
  default: {
    getAllSales: () => [
      { id: '1345', categoryId: '123', productId: '1', productName: 'Smartphone', quantity: 5, sellingPrice: 880, date: new Date('2024-09-21T12:00:00.000Z'), total: 4400 },
      { id: '2345', categoryId: '123', productId: '2', productName: 'Laptop', quantity: 12, sellingPrice: 1320, date: new Date('2024-09-21T12:00:00.000Z'), total: 15840 }
    ],
    undoSale: vi.fn()
  }
}))

import ManageSalesPage from './ManageSalesPage'

import inventory from 'persistent/inventory'

let showNotification

beforeEach(() => {
  showNotification = vi.fn()
})

describe('ManageSalesPage', () => {
  test('should render ManageSalesPage component', () => {
    const view = render(
      <MemoryRouter>
        <ManageSalesPage showNotification={showNotification} />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should undo sale', async () => {
    render(
      <MemoryRouter>
        <ManageSalesPage showNotification={showNotification} />
      </MemoryRouter>
    )

    const undoButton = screen.getAllByTestId('undo-button').at(0)
    await userEvent.click(undoButton)

    expect(inventory.undoSale).toHaveBeenCalledTimes(1)
    expect(inventory.undoSale).toHaveBeenCalledWith(
      { id: '1345', categoryId: '123', productId: '1', productName: 'Smartphone', quantity: 5, sellingPrice: 880, date: new Date('2024-09-21T12:00:00.000Z'), total: 4400 }
    )

    expect(showNotification).toHaveBeenCalledTimes(1)
    expect(showNotification).toHaveBeenCalledWith('Successfully undo sale')
  })
})
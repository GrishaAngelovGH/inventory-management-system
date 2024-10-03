import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'
import { expect, vi } from 'vitest'

vi.mock('persistent/inventory', () => ({
  default: {
    getAllProducts: () => [
      { id: '1', name: 'Smartphone', quantity: 50, sellingPrice: 880 },
      { id: '2', name: 'Laptop', quantity: 30, sellingPrice: 1320 },
    ],
    createSale: vi.fn()
  }
}))

import inventory from 'persistent/inventory'

import AddSalePage from './AddSalePage'

let showNotification

beforeEach(() => {
  showNotification = vi.fn()

  vi.setSystemTime(new Date('2024-09-30T10:00:00Z'))
})

afterEach(() => {
  vi.useRealTimers()
})

describe('AddSalePage', () => {
  test('should render AddSalePage component', () => {
    const view = render(
      <MemoryRouter>
        <AddSalePage showNotification={showNotification} />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should render create a new sale', async () => {
    render(
      <MemoryRouter>
        <AddSalePage showNotification={showNotification} />
      </MemoryRouter>
    )

    const productSelect = screen.getByRole('combobox')
    await userEvent.selectOptions(productSelect, '1')

    const quantityInput = screen.getByTestId('quantity-input')
    quantityInput.value = '';
    await userEvent.type(quantityInput, '10')

    const confirmButton = screen.getByRole('button', { name: /Add Sale/i })
    await userEvent.click(confirmButton)

    expect(inventory.createSale).toHaveBeenCalledTimes(1)
    expect(inventory.createSale).toHaveBeenCalledWith(
      { id: '1', name: 'Smartphone', quantity: 50, sellingPrice: 880 },
      { date: '2024-09-30T10:00:00.000Z', quantity: 10, sellingPrice: 880, total: 8800 }
    )

    expect(showNotification).toHaveBeenCalledTimes(1)
    expect(showNotification).toHaveBeenCalledWith('The sale is successfully added')
  })
})
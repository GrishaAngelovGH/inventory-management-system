import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import LowStockPage from './LowStockPage'

vi.mock('persistent/inventory', () => ({
  default: {
    getItems: vi.fn()
  }
}))

import inventory from 'persistent/inventory'

describe('LowStockPage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should render LowStockPage component with optimal product quantity level', () => {
    inventory.getItems.mockImplementation(() => [
      {
        id: "123",
        name: "Electronics",
        products: [
          { id: "1", categoryId: "123", name: "Smartphone", creationDate: new Date().toISOString(), quantity: 50, buyingPrice: 600, sellingPrice: 880 },
          { id: "2", categoryId: "123", name: "Laptop", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 900, sellingPrice: 1320 },
        ],
      },
      {
        id: "234",
        name: "Sports Equipment",
        products: [
          { id: "9", categoryId: "234", name: "Football", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 50, buyingPrice: 22.5, sellingPrice: 33 },
        ]
      }
    ])

    const view = render(
      <MemoryRouter>
        <LowStockPage />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should render LowStockPage component with low product quantity level', () => {
    inventory.getItems.mockImplementation(() => [
      {
        id: "123",
        name: "Electronics",
        products: [
          { id: "1", categoryId: "123", name: "Smartphone", creationDate: new Date().toISOString(), quantity: 50, buyingPrice: 600, sellingPrice: 880 },
          { id: "2", categoryId: "123", name: "Laptop", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 30, buyingPrice: 900, sellingPrice: 1320 },
        ],
      },
      {
        id: "234",
        name: "Sports Equipment",
        products: [
          { id: "9", categoryId: "234", name: "Football", creationDate: new Date("2024-09-23T12:00:00.000Z"), quantity: 5, buyingPrice: 22.5, sellingPrice: 33 },
        ]
      }
    ])

    const view = render(
      <MemoryRouter>
        <LowStockPage />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })
})
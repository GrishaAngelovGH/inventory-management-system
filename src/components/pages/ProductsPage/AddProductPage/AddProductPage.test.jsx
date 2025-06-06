import { render, screen, waitFor, fireEvent } from '@testing-library/react'


import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

vi.mock('persistent/inventory', () => ({
  default: {
    getItems: () => [{ id: '123', name: 'Category123' }],
    getAllProducts: () => [],
    getProductsForCategory: () => [],
    getAllSales: () => [],
    createCategory: vi.fn(),
    updateCategoryName: vi.fn(),
    deleteCategory: vi.fn(),
    addProductToCategory: vi.fn(),
    updateProduct: vi.fn(),
    deleteProduct: vi.fn(),
    createSale: vi.fn(),
    undoSale: vi.fn()
  }
}))

import AddProductPage from './AddProductPage'

import inventory from 'persistent/inventory'

const showNotification = vi.fn()

describe('AddProductPage', () => {
  test('should render AddProductPage component', () => {
    const view = render(
      <MemoryRouter>
        <AddProductPage showNotification={showNotification} />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should add a new product to the inventory', async () => {
    render(
      <MemoryRouter>
        <AddProductPage showNotification={showNotification} />
      </MemoryRouter>
    )

    const productNameInput = screen.getByPlaceholderText('Enter product name')
    fireEvent.change(productNameInput, { target: { value: 'New Product' } })

    const productCategorySelect = screen.getByRole('combobox')
    fireEvent.change(productCategorySelect, { target: { value: '123' } })

    const productQuantityInput = screen.getByPlaceholderText('Enter product quantity')
    fireEvent.change(productQuantityInput, { target: { value: '5' } })

    const productBuyingPriceInput = screen.getByPlaceholderText('Enter buying price: 0.00')
    fireEvent.change(productBuyingPriceInput, { target: { value: '10' } })

    const productSellingPriceInput = screen.getByPlaceholderText('Enter selling price: 0.00')
    fireEvent.change(productSellingPriceInput, { target: { value: '15' } })

    const submitButton = screen.getByRole('button', { name: /Add Product/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(inventory.addProductToCategory).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(inventory.addProductToCategory).toHaveBeenCalledWith(
        '123', { name: 'New Product', quantity: 5, buyingPrice: 10, sellingPrice: 15 }
      )
    })

    await waitFor(() => {
      expect(showNotification).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(showNotification).toHaveBeenCalledWith('The product is successfully added to the category')
    })
  })
})
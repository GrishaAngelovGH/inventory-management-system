import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

vi.mock('persistent/inventory', () => ({
  default: {
    getItems: () => [{ id: '123', name: 'Category123' }],
    addProductToCategory: vi.fn()
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
    await userEvent.type(productNameInput, 'New Product')

    const productCategorySelect = screen.getByRole('combobox')
    await userEvent.selectOptions(productCategorySelect, '123')

    const productQuantityInput = screen.getByPlaceholderText('Enter product quantity')
    await userEvent.type(productQuantityInput, '5')

    const productBuyingPriceInput = screen.getByPlaceholderText('Enter buying price: 0.00')
    await userEvent.type(productBuyingPriceInput, '10')

    const productSellingPriceInput = screen.getByPlaceholderText('Enter selling price: 0.00')
    await userEvent.type(productSellingPriceInput, '15')

    const submitButton = screen.getByRole('button', { name: /Add Product/i })
    await userEvent.click(submitButton)

    expect(inventory.addProductToCategory).toHaveBeenCalledTimes(1)

    expect(inventory.addProductToCategory).toHaveBeenCalledWith(
      '123', { name: 'New Product', quantity: 5, buyingPrice: 10, sellingPrice: 15 }
    )

    expect(showNotification).toHaveBeenCalledTimes(1)

    expect(showNotification).toHaveBeenCalledWith('The product is successfully added to the category')
  })
})
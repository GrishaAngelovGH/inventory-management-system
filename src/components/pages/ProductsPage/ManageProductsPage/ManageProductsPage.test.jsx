import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

vi.mock('persistent/inventory')

import ManageProductsPage from './ManageProductsPage'

describe('ManageProductsPage', () => {
  test('should render ManageProductsPage component', () => {
    const view = render(
      <MemoryRouter>
        <ManageProductsPage />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should visualize all products for selected category', async () => {
    render(
      <MemoryRouter>
        <ManageProductsPage />
      </MemoryRouter>
    )

    const productCategorySelect = screen.getByRole('combobox')
    await userEvent.selectOptions(productCategorySelect, '123')

    const products = screen.getByTestId('products')

    expect(products.childElementCount).toBeGreaterThan(0)
  })
})
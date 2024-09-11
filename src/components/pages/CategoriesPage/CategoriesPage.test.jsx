import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import CategoriesPage from './CategoriesPage'

vi.mock('persistent/invnentory')

let showNotification

beforeEach(() => {
  showNotification = vi.fn()
})

describe('CategoriesPage', () => {
  test('should render CategoriesPage component', () => {
    const view = render(
      <MemoryRouter>
        <CategoriesPage showNotification={showNotification} />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should add a new category to the list', async () => {
    render(
      <MemoryRouter>
        <CategoriesPage showNotification={showNotification} />
      </MemoryRouter>
    )

    const addCategoryNameInput = screen.getByPlaceholderText('Enter category name')
    await userEvent.type(addCategoryNameInput, 'Consumer Electronics')

    const addCategoryButton = screen.getByTestId('add-category-button')
    await userEvent.click(addCategoryButton)

    expect(showNotification).toHaveBeenCalledTimes(1)
    expect(showNotification).toHaveBeenCalledWith('Successfully added category!')
  })

  test('should edit an existing category', async () => {
    render(
      <MemoryRouter>
        <CategoriesPage showNotification={showNotification} />
      </MemoryRouter>
    )

    const categoryItem = screen.getByTestId('category-item-1')

    const editButton = within(categoryItem).getAllByRole('button').at(0)
    await userEvent.click(editButton)

    const editCategoryNameInput = screen.getByPlaceholderText('Enter category name')
    await userEvent.type(editCategoryNameInput, 'Edited Category')

    const confirmButton = screen.getByRole('button', { name: /Confirm/i })
    await userEvent.click(confirmButton)

    expect(showNotification).toHaveBeenCalledTimes(1)
    expect(showNotification).toHaveBeenCalledWith('Successfully edited category!')
  })
})
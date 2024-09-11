import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CategoryList from './CategoryList'

describe('CategoryList', () => {
  test('should render CategoryList component', () => {
    const view = render(<CategoryList />)

    expect(view).toMatchSnapshot()
  })

  test('should render confirmation modal when deleting an item from the list', async () => {
    render(<CategoryList />)

    const firstItem = screen.getByTestId('category-item-1')
    const deleteButton = within(firstItem).getByTestId('delete-button')

    await userEvent.click(deleteButton)

    expect(screen.getByText('Are you sure you want to delete this category? All associated products will also be deleted.')).toBeInTheDocument()
  })
})
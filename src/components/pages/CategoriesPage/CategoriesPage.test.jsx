import { render } from '@testing-library/react'

import CategoriesPage from './CategoriesPage'

test('should render CategoriesPage component', () => {
  const view = render(<CategoriesPage />)

  expect(view).toMatchSnapshot()
})
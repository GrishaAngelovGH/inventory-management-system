import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import CategoriesPage from './CategoriesPage'

test('should render CategoriesPage component', () => {
  const view = render(
    <MemoryRouter>
      <CategoriesPage />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
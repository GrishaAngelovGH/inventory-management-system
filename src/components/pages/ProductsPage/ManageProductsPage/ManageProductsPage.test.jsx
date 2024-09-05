import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ManageProductsPage from './ManageProductsPage'

test('should render ManageProductsPage component', () => {
  const view = render(
    <MemoryRouter>
      <ManageProductsPage />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
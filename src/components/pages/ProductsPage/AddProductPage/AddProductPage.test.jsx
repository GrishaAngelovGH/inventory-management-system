import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AddProductPage from './AddProductPage'

test('should render AddProductPage component', () => {
  const view = render(
    <MemoryRouter>
      <AddProductPage />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
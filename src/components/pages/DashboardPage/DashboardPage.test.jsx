import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import DashboardPage from './DashboardPage'

test('should render DashboardPage component', () => {
  const view = render(
    <MemoryRouter>
      <DashboardPage />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
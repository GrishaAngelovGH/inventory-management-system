import { render } from '@testing-library/react'

import DashboardPage from './DashboardPage'

test('should render DashboardPage component', () => {
  const view = render(<DashboardPage />)

  expect(view).toMatchSnapshot()
})
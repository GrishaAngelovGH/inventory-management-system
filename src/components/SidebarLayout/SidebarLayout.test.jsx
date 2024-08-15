import { render } from '@testing-library/react'

import SidebarLayout from './SidebarLayout'

test('should render SidebarLayout component', () => {
  const view = render(<SidebarLayout />)

  expect(view).toMatchSnapshot()
})
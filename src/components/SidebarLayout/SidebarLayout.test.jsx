import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import SidebarLayout from './SidebarLayout'

test('should render SidebarLayout component', () => {
  const view = render(
    <MemoryRouter>
      <SidebarLayout />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
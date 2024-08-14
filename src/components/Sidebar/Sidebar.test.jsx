import { render } from '@testing-library/react'

import Sidebar from './Sidebar'

test('should render opened Sidebar component', () => {
  const view = render(<Sidebar open={true} />)

  expect(view).toMatchSnapshot()
})

test('should render closed Sidebar component', () => {
  const view = render(<Sidebar open={false} />)

  expect(view).toMatchSnapshot()
})
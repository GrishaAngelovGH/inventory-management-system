import { render } from '@testing-library/react'

import HomePage from "./HomePage"

test('should render HomePage component', () => {
  const view = render(<HomePage />)

  expect(view).toMatchSnapshot()
})
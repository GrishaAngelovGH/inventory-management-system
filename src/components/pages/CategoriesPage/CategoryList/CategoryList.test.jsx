import { render } from '@testing-library/react'

import CategoryList from './CategoryList'

test('should render CategoryList component', () => {
  const view = render(<CategoryList />)

  expect(view).toMatchSnapshot()
})
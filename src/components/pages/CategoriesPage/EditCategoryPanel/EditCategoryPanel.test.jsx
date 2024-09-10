import { render } from '@testing-library/react'

import EditCategoryPanel from './EditCategoryPanel'

test('should render EditCategoryPanel component', () => {
  const view = render(<EditCategoryPanel categoryName="Electronics" />)

  expect(view).toMatchSnapshot()
})
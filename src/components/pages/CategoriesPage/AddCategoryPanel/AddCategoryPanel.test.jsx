import { render } from '@testing-library/react'

import AddCategoryPanel from './AddCategoryPanel'

test('should render AddCategoryPanel component', () => {
  const view = render(<AddCategoryPanel />)

  expect(view).toMatchSnapshot()
})
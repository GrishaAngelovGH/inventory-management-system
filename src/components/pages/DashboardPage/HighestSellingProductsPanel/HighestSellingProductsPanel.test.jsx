import { render } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('persistent/inventory')

import HighestSellingProductsPanel from './HighestSellingProductsPanel'

test('should render HighestSellingProductsPanel component', () => {
  const view = render(<HighestSellingProductsPanel />)

  expect(view).toMatchSnapshot()
})
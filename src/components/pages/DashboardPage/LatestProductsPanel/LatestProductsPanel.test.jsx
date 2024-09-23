import { render } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('persistent/inventory')

import LatestProductsPanel from './LatestProductsPanel'

test('should render LatestProductsPanel component', () => {
  const view = render(<LatestProductsPanel />)

  expect(view).toMatchSnapshot()
})
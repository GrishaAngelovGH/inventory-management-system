import { render } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('persistent/inventory')

import LatestSalesPanel from './LatestSalesPanel'

test('should render LatestSalesPanel component', () => {
  const view = render(<LatestSalesPanel />)

  expect(view).toMatchSnapshot()
})
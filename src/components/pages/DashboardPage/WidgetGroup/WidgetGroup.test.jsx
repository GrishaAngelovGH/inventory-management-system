import { render } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('persistent/inventory')

import WidgetGroup from './WidgetGroup'

test('should render WidgetGroup component', () => {
  const view = render(<WidgetGroup />)

  expect(view).toMatchSnapshot()
})
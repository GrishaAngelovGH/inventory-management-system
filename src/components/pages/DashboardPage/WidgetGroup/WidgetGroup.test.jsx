import { render } from '@testing-library/react'
import { vi } from 'vitest'

import WidgetGroup from './WidgetGroup'

vi.mock('persistent/inventory')

test('should render WidgetGroup component', () => {
  const view = render(<WidgetGroup />)

  expect(view).toMatchSnapshot()
})
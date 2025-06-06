import { render } from '@testing-library/react'

import Datepicker from './Datepicker'

test('should render Datepicker component', () => {
  const view = render(<Datepicker value={new Date(2025, 5, 6, 6, 48, 57, 719)} />)

  expect(view).toMatchSnapshot()
})
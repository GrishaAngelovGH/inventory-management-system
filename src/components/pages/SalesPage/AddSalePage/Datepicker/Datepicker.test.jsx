import { render } from '@testing-library/react'

import Datepicker from './Datepicker'

test('should render Datepicker component', () => {
  const view = render(<Datepicker />)

  expect(view).toMatchSnapshot()
})
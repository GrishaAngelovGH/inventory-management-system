import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AddSalePage from './AddSalePage'

test('should render AddSalePage component', () => {
  const view = render(
    <MemoryRouter>
      <AddSalePage />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
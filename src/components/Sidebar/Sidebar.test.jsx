import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  test('should render opened Sidebar component', () => {
    const view = render(
      <MemoryRouter>
        <Sidebar open={true} />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should render closed Sidebar component', () => {
    const view = render(
      <MemoryRouter>
        <Sidebar open={false} />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })
})
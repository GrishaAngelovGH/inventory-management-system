import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

vi.mock('persistent/inventory')

import ManageSalesPage from './ManageSalesPage'

test('should render ManageSalesPage component', () => {
  const view = render(
    <MemoryRouter>
      <ManageSalesPage />
    </MemoryRouter>
  )

  expect(view).toMatchSnapshot()
})
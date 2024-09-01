import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import SidebarButtonItem from './SidebarButtonItem'

describe('SidebarButtonItem', () => {
  test('should render SidebarButtonItem component', () => {
    const view = render(
      <MemoryRouter>
        <SidebarButtonItem
          open={true}
          icon="products-icon.png"
          title="Products"
          childRoutes={[
            { icon: "add-icon.png", title: "Add Product", path: "/add-product" }
          ]}
        />
      </MemoryRouter>
    )

    expect(view).toMatchSnapshot()
  })

  test('should render the child routes when the button is clicked', async () => {
    render(
      <MemoryRouter>
        <SidebarButtonItem
          open={true}
          icon="products-icon.png"
          title="Products"
          childRoutes={[
            { icon: "add-icon.png", title: "Add Product", path: "/add-product" }
          ]}
        />
      </MemoryRouter>
    )

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(screen.getAllByRole('link').length).toBeGreaterThan(0)
  })
})


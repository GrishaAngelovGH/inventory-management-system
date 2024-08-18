import { render } from '@testing-library/react'

import TotalProductsWidget from './TotalProductsWidget'

const inventory = {
  categories: [
    {
      name: "Electronics",
      products: [
        { id: 1, name: "Smartphone", price: 800, stock: 50, sales: 20 },
        { id: 2, name: "Laptop", price: 1200, stock: 30, sales: 10 },
      ],
    },
    {
      name: "Sports Equipment",
      products: [
        { id: 9, name: "Football", price: 30, stock: 100, sales: 40 },
      ]
    }
  ]
}

test('should render TotalProductsWidget component', () => {
  const view = render(<TotalProductsWidget inventory={inventory} />)

  expect(view).toMatchSnapshot()
})
import { render } from '@testing-library/react'

import TotalValueWidget from './TotalValueWidget'

const inventoryItems = [
  {
    id: "123",
    name: "Electronics",
    products: [
      { id: 1, name: "Smartphone", price: 800, stock: 50, sales: 20 },
      { id: 2, name: "Laptop", price: 1200, stock: 30, sales: 10 },
    ],
  },
  {
    id: "234",
    name: "Sports Equipment",
    products: [
      { id: 9, name: "Football", price: 30, stock: 100, sales: 40 },
    ]
  }
]

test('should render TotalValueWidget component', () => {
  const view = render(<TotalValueWidget inventoryItems={inventoryItems} />)

  expect(view).toMatchSnapshot()
})
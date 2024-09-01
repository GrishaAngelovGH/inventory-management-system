import { render } from '@testing-library/react'

import TotalCategoriesWidget from './TotalCategoriesWidget'

const inventoryItems = [
  {
    id: "123",
    name: "Electronics",
    products: [
      { id: 1, name: "Smartphone", stock: 50, sales: 20, buyingPrice: 600, sellingPrice: 880 },
      { id: 2, name: "Laptop", stock: 30, sales: 10, buyingPrice: 900, sellingPrice: 1320 },
    ],
  },
  {
    id: "234",
    name: "Sports Equipment",
    products: [
      { id: 9, name: "Football", stock: 100, sales: 40, buyingPrice: 22.5, sellingPrice: 33 },
    ]
  }
]

test('should render TotalCategoriesWidget component', () => {
  const view = render(<TotalCategoriesWidget inventoryItems={inventoryItems} />)

  expect(view).toMatchSnapshot()
})
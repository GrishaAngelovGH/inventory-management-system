import { render } from '@testing-library/react'

import TotalValueWidget from './TotalValueWidget'

const inventoryItems = [
  {
    id: '123',
    name: 'Electronics',
    products: [
      { id: 1, name: 'Smartphone', quantity: 50, sales: 20, buyingPrice: 600, sellingPrice: 880 },
      { id: 2, name: 'Laptop', quantity: 30, sales: 10, buyingPrice: 900, sellingPrice: 1320 },
    ],
  },
  {
    id: '234',
    name: 'Sports Equipment',
    products: [
      { id: 9, name: 'Football', quantity: 100, sales: 40, buyingPrice: 22.5, sellingPrice: 33 },
    ]
  }
]

test('should render TotalValueWidget component', () => {
  const view = render(<TotalValueWidget inventoryItems={inventoryItems} />)

  expect(view).toMatchSnapshot()
})
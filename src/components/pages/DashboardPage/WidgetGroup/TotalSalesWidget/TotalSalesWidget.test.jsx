import { render } from '@testing-library/react'

import TotalSalesWidget from './TotalSalesWidget'

const sales = [
  { productName: "Smartphone", quantity: 5, sellingPrice: 880, date: new Date("2024-09-21T12:00:00.000Z"), total: 4400 },
  { productName: "Laptop", quantity: 12, sellingPrice: 1320, date: new Date("2024-09-21T12:00:00.000Z"), total: 15840 }
]


test('should render TotalSalesWidget component', () => {
  const view = render(<TotalSalesWidget sales={sales} />)

  expect(view).toMatchSnapshot()
})
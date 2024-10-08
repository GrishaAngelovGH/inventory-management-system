import { render } from '@testing-library/react'

import SalesPDF from './SalesPDF'

test('should render SalesPDF component', () => {
  const view = render(
    <SalesPDF
      sales={[
        { id: '1345', categoryId: '123', productId: '1', productName: 'Smartphone', quantity: 5, sellingPrice: 880, date: new Date('2024-09-21T12:00:00.000Z'), total: 4400 },
        { id: '2345', categoryId: '123', productId: '2', productName: 'Laptop', quantity: 12, sellingPrice: 1320, date: new Date('2024-09-21T12:00:00.000Z'), total: 15840 }
      ]}
    />
  )

  expect(view).toMatchSnapshot()
})
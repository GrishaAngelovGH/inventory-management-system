import { render } from '@testing-library/react'

import ProductsTable from './ProductsTable'

test('should render ProductsTable component', () => {
  const view = render(
    <ProductsTable
      products={[{ id: 1, name: "Smartphone", quantity: 50, sales: 20, buyingPrice: 600, sellingPrice: 880 }]}
      categoryId="::categoryId::"
    />
  )

  expect(view).toMatchSnapshot()
})
import { render } from '@testing-library/react'

import ProductPage from './ProductPage'

test('should render ProductPage component', () => {
  const view = render(
    <ProductPage
      title='Product Page Title'
      product={{
        name: '::Product Name::',
        quantity: 1,
        buyingPrice: 5,
        sellingPrice: 8
      }}
      categories={[{ id: 1, name: '::category name::' }]}
      buttons={<button type='submit'>Submit</button>}
      onProductNameChange={() => { }}
      onCategoryChange={() => { }}
      onProductQuantityChange={() => { }}
      onProductBuyingPriceChange={() => { }}
      onProductSellingPriceChange={() => { }}
      onSubmit={() => { }}
    />
  )

  expect(view).toMatchSnapshot()
})
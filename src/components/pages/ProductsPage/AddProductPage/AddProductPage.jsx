import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import ProductPage from "../ProductPage"

import inventory from "persistent/inventory"

const AddProductPage = ({ showNotification }) => {
  const [productName, setProductName] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productBuyingPrice, setProductBuyingPrice] = useState("")
  const [productSellingPrice, setProductSellingPrice] = useState("")

  const categories = inventory.getItems().map(v => ({ id: v.id, name: v.name }))

  const handleAddProduct = e => {
    e.preventDefault()

    try {
      inventory.addProductToCategory(
        categoryId,
        {
          name: productName,
          quantity: productQuantity,
          buyingPrice: productBuyingPrice,
          sellingPrice: productSellingPrice
        }
      )

      setProductName("")
      setCategoryId("")
      setProductQuantity("")
      setProductBuyingPrice("")
      setProductSellingPrice("")

      showNotification('The product is successfully added to the category')
    } catch (err) {
      showNotification(err.message, true)
    }
  }

  return (
    <SidebarLayout>
      <div className="pl-2 flex flex-col md:flex-row md:justify-center">
        <ProductPage
          title="Add new product"
          categoryId={categoryId}
          product={{
            name: productName,
            quantity: productQuantity,
            buyingPrice: productBuyingPrice,
            sellingPrice: productSellingPrice
          }}
          categories={categories}
          buttons={(
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white w-[150px] text-xl p-1 rounded-md"
            >
              Add Product
            </button>
          )}
          onProductNameChange={({ target: { value } }) => setProductName(value)}
          onCategoryChange={({ target: { value } }) => setCategoryId(value)}
          onProductQuantityChange={({ target: { value } }) => setProductQuantity(parseInt(value))}
          onProductBuyingPriceChange={({ target: { value } }) => setProductBuyingPrice(parseFloat(value))}
          onProductSellingPriceChange={({ target: { value } }) => setProductSellingPrice(parseFloat(value))}
          onSubmit={handleAddProduct}
        />
      </div>
    </SidebarLayout>
  )
}

export default AddProductPage
import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import ProductPage from "../ProductPage"
import ProductsTable from "./ProductsTable"

import { Select } from "flowbite-react"

import inventory from "persistent/inventory"

const ManageProductsPage = ({ showNotification }) => {
  const [categoryId, setCategoryId] = useState("")
  const [newCategoryId, setNewCategoryId] = useState("")
  const [product, setProduct] = useState()
  const [isEdit, setIsEdit] = useState(false)

  const categories = inventory.getItems()
  const products = inventory.getProductsForCategory(categoryId)

  return (
    <SidebarLayout>
      <div className="pl-2 flex flex-col md:flex-row gap-4 justify-center overflow-x-auto">
        {
          isEdit && (
            <ProductPage
              title="Edit product"
              categoryId={newCategoryId.length > 0 ? newCategoryId : categoryId}
              product={product}
              categories={categories}
              buttons={(
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white w-[150px] text-xl p-1 rounded-md"
                  >
                    Confirm
                  </button>

                  <button className="bg-gray-500  text-white w-[150px] text-xl p-1 rounded-md" onClick={() => setIsEdit(false)}>Cancel</button>
                </div>
              )}
              onProductNameChange={({ target: { value } }) => setProduct({ ...product, name: value })}
              onCategoryChange={({ target: { value } }) => setNewCategoryId(value)}
              onProductQuantityChange={({ target: { value } }) => setProduct({ ...product, quantity: value.length > 0 ? parseInt(value) : "" })}
              onProductBuyingPriceChange={({ target: { value } }) => setProduct({ ...product, buyingPrice: value.length > 0 ? parseFloat(value) : "" })}
              onProductSellingPriceChange={({ target: { value } }) => setProduct({ ...product, sellingPrice: value.length > 0 ? parseFloat(value) : "" })}
              onSubmit={e => {
                e.preventDefault()

                inventory.updateProduct(categoryId, newCategoryId, product)
                setIsEdit(false)
                showNotification("The product is successfully edited")
              }}
            />
          )
        }

        <div className="w-full md:w-2/3">
          <Select
            role="combobox"
            value={categoryId}
            onChange={({ target: { value } }) => setCategoryId(value)}
          >
            <option value="">Please select a category</option>
            {
              categories.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))
            }
          </Select>

          {
            products.length > 0 && (
              <div className="mt-5">
                <ProductsTable
                  products={products}
                  categoryId={categoryId}
                  showNotification={showNotification}
                  onEditClick={v => {
                    setProduct(v)
                    setIsEdit(true)
                  }}
                />
              </div>
            )
          }
        </div>
      </div>
    </SidebarLayout>
  )
}

export default ManageProductsPage
import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import Modal from "components/Modal"

import ProductPage from "../ProductPage"

import inventory from "persistent/inventory"

const Table = ({ columns, children }) => (
  <div className="bg-white w-[550px] md:w-full border border-gray-400 rounded-t-md rounded-b-md">
    <div className="bg-gray-200 rounded-t-md flex text-center">
      {columns.map(v => (<div key={v} className="p-1 w-[140px] md:w-1/4">{v}</div>))}
    </div>
    {children}
  </div>
)

const ProductsTable = ({ products, categoryId, showNotification, onEditClick }) => {
  const [showModal, setShowModal] = useState(false)
  const [productId, setProductId] = useState("")

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })

  return (
    <div>
      {
        showModal && (
          <Modal
            title="Delete Product"
            onConfirm={() => {
              inventory.deleteProduct(categoryId, productId)
              showNotification('Successfully deleted product')
              setShowModal(false)
            }}
            onCancel={() => {
              setProductId(null)
              setShowModal(false)
            }}
          >
            <p className="p-3 text-xl">
              Are you sure you want to delete this product?
            </p>
          </Modal>
        )
      }

      <Table columns={["Name", "Quantity", "Buying Price", "Selling Price", "Actions"]}>
        <div data-testid="products" className="max-h-[350px] overflow-auto">
          {
            products.map(v => (
              <div key={v.id} className="p-1 flex items-center text-center border-b border-gray-400 last:border-b-0">
                <div className="w-[140px] md:w-1/4">{v.name}</div>
                <div className="w-[140px] md:w-1/4">{v.quantity}</div>
                <div className="w-[140px] md:w-1/4">{formatter.format(v.buyingPrice)}</div>
                <div className="w-[140px] md:w-1/4">{formatter.format(v.sellingPrice)}</div>
                <div className="w-[140px] md:w-1/5 flex gap-2 justify-center">
                  <button
                    data-testid="delete-button"
                    className="bg-orange-500 rounded-md p-2"
                    onClick={() => onEditClick(v)}
                  >
                    <img src="/edit-icon.png" className="w-[15px] h-[15px]" />
                  </button>

                  <button
                    data-testid="delete-button"
                    className="bg-red-500 rounded-md p-2"
                    onClick={() => {
                      setProductId(v.id)
                      setShowModal(true)
                    }}
                  >
                    <img src="/delete-icon.png" className="w-[15px] h-[15px]" />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </Table>
    </div>
  )
}

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
              onProductQuantityChange={({ target: { value } }) => setProduct({ ...product, quantity: parseInt(value) })}
              onProductBuyingPriceChange={({ target: { value } }) => setProduct({ ...product, buyingPrice: parseFloat(value) })}
              onProductSellingPriceChange={({ target: { value } }) => setProduct({ ...product, sellingPrice: parseFloat(value) })}
              onSubmit={e => {
                e.preventDefault()

                inventory.updateProduct(categoryId, newCategoryId, product)
                setIsEdit(false)
                showNotification("The product is successfully edited")
              }}
            />
          )
        }

        <div className="w-full md:w-1/2">
          <select
            role="combobox"
            value={categoryId}
            className="bg-white border-2 border-gray-300 outline-0 p-2 text-xl rounded-md w-full"
            onChange={({ target: { value } }) => setCategoryId(value)}
          >
            <option value="">Please select a category</option>
            {
              categories.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))
            }
          </select>

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
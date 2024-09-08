import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import Modal from "components/Modal"

import inventory from "persistent/inventory"

const Table = ({ columns, children }) => (
  <div className="w-[550px] md:w-full border border-gray-400 rounded-t-md rounded-b-md">
    <div className="bg-gray-200 rounded-t-md flex text-center">
      {columns.map(v => (<div key={v} className="p-1 w-[140px] md:w-1/4">{v}</div>))}
    </div>
    {children}
  </div>
)

const ProductsTable = ({ products, categoryId, showNotification }) => {
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

  const categories = inventory.getItems()
  const products = inventory.getProductsForCategory(categoryId)

  return (
    <SidebarLayout>
      <div className="p-2 flex justify-center">
        <div className="w-full md:w-2/3">
          <select
            role="combobox"
            value={categoryId}
            className="outline-0 p-2 text-xl rounded-md w-full md:w-1/2"
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
                <ProductsTable products={products} categoryId={categoryId} showNotification={showNotification} />
              </div>
            )
          }
        </div>
      </div>
    </SidebarLayout>
  )
}

export default ManageProductsPage
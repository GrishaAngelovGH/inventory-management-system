import { useState } from "react"

import Modal from "components/Modal"

import inventory from "persistent/inventory"

const Table = ({ currentColumn, columns, children, onColumnClick }) => (
  <div className="bg-white w-[550px] md:w-full border border-gray-400 rounded-t-md rounded-b-md">
    <div className="bg-gray-200 rounded-t-md flex text-center">
      {
        columns.map(v =>
        (
          <div
            key={v}
            className={`cursor-pointer p-1 w-[140px] md:w-1/4 ${currentColumn === v ? "font-bold" : "font-normal"}`}
            onClick={() => onColumnClick(v)}
          >
            {v}
          </div>
        ))
      }
    </div>
    {children}
  </div>
)

const SortableProductsTable = ({ products, onEditClick, onDeleteClick }) => {
  const [sortField, setSortField] = useState("")
  const [currentColumn, setCurrentColumn] = useState("")

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })

  return (
    <Table
      columns={["Name", "Quantity", "Buying Price", "Selling Price", "Actions"]}
      currentColumn={currentColumn}
      onColumnClick={v => {
        const newValue = v
          .split(' ')
          .map((v, i) => i === 0 ? v.toLowerCase() : v[0].toUpperCase() + v.slice(1))
          .join("")

        setSortField(newValue)
        setCurrentColumn(v)
      }}
    >
      <div data-testid="products" className="max-h-[350px] overflow-auto">
        {
          products
            .sort((a, b) => {
              if (a[sortField] > b[sortField]) return 1
              if (a[sortField] < b[sortField]) return -1
              return 0
            })
            .map(v => (
              <div
                key={v.id}
                className={`${v.quantity >= 20 ? "bg-white" : v.quantity > 10 ? "bg-yellow-200" : "bg-red-200"} p-1 flex items-center text-center border-b border-gray-400 last:border-b-0`}
              >
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
                    onClick={() => onDeleteClick(v.id)}
                  >
                    <img src="/delete-icon.png" className="w-[15px] h-[15px]" />
                  </button>
                </div>
              </div>
            ))
        }
      </div>
    </Table>
  )
}

const ProductsTable = ({ products, categoryId, showNotification, onEditClick }) => {
  const [showModal, setShowModal] = useState(false)
  const [productId, setProductId] = useState("")

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

      <SortableProductsTable
        products={products}
        onEditClick={onEditClick}
        onDeleteClick={id => {
          setProductId(id)
          setShowModal(true)
        }}
      />
    </div>
  )
}

export default ProductsTable
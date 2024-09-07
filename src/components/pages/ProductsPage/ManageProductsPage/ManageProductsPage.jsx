import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"

import inventory from "persistent/inventory"

const Table = ({ columns, children }) => (
  <div className="border border-gray-400 rounded-t-md rounded-b-md">
    <div className="bg-gray-200 rounded-t-md flex justify-evenly text-center">
      {columns.map(v => (<div key={v} className="p-1 w-1/4">{v}</div>))}
    </div>
    {children}
  </div>
)

const ProductsTable = ({ products }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  })

  return (
    <Table columns={["Name", "Quantity", "Buying Price", "Selling Price"]}>
      <div data-testid="products">
        {
          products.map(v => (
            <div key={v.id} className="p-1 flex text-center border-b border-gray-400 last:border-b-0">
              <div className="w-1/4">{v.name}</div>
              <div className="w-1/4">{v.quantity}</div>
              <div className="w-1/4">{formatter.format(v.buyingPrice)}</div>
              <div className="w-1/4">{formatter.format(v.sellingPrice)}</div>
            </div>
          ))
        }
      </div>
    </Table>
  )
}

const ManageProductsPage = () => {
  const [categoryId, setCategoryId] = useState("")

  const categories = inventory.getItems()
  const products = inventory.getProductsForCategory(categoryId)

  return (
    <SidebarLayout>
      <div className="p-2 flex justify-center">
        <div className="md:w-1/2">
          <select
            role="combobox"
            value={categoryId}
            className="outline-0 p-2 text-xl rounded-md w-full"
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
                <ProductsTable products={products} />
              </div>
            )
          }
        </div>
      </div>
    </SidebarLayout>
  )
}

export default ManageProductsPage
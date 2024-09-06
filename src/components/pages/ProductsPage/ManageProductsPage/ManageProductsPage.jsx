import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"

import inventory from "persistent/inventory"

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
              <div data-testid="products">
                {
                  products.map(v => (
                    <div key={v.id}>{v.name}</div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </SidebarLayout>
  )
}

export default ManageProductsPage
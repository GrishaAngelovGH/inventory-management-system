import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import Datepicker from "./Datepicker"

import { Select, TextInput, Label } from "flowbite-react"

import inventory from "persistent/inventory"

const AddSalePage = ({ showNotification }) => {
  const [productId, setProductId] = useState("")
  const [productQuantity, setProductQuantity] = useState(1)
  const [date, setDate] = useState(new Date().toISOString())

  const products = inventory.getAllProducts()
  const currentProduct = products.find(v => v.id === productId)

  return (
    <SidebarLayout>
      <div className="pl-2 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <Select
            role="combobox"
            value={productId}
            onChange={({ target: { value } }) => setProductId(value)}
          >
            <option value="">Please select a product</option>
            {
              products.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))
            }
          </Select>
        </div>

        {
          currentProduct && (
            <div className="bg-white border border-slate-400 rounded-md md:w-1/2">
              <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Add new sale</div>

              <div className="p-2 flex flex-col gap-5">
                <Label>
                  <div className="text-gray-600 p-1">Product Name</div>
                  <TextInput
                    disabled
                    value={currentProduct.name}
                  />
                </Label>

                <Label>
                  <div className="text-gray-600 p-1">Selling Price</div>
                  <TextInput
                    type="number"
                    disabled
                    value={currentProduct.sellingPrice}
                  />
                </Label>

                <Label>
                  <div className="text-gray-600 p-1">Product Quantity</div>
                  <TextInput
                    data-testid="quantity-input"
                    type="number"
                    min="1"
                    value={productQuantity}
                    onChange={({ target: { value } }) => setProductQuantity(parseInt(value))}
                  />
                </Label>
                <Label>
                  <div className="text-gray-600 p-1">Date</div>
                  <Datepicker value={date} onChange={setDate} />
                </Label>

                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white w-[150px] text-xl p-1 rounded-md"
                  onClick={() => {
                    try {
                      inventory.createSale(
                        currentProduct,
                        {
                          quantity: productQuantity,
                          sellingPrice: currentProduct.sellingPrice,
                          date: new Date(date).toISOString()
                        }
                      )

                      showNotification("The sale is successfully added")
                    } catch (err) {
                      showNotification(err.message, true)
                    }
                  }}
                >
                  Add Sale
                </button>
              </div>
            </div>
          )
        }
      </div>
    </SidebarLayout>
  )
}

export default AddSalePage
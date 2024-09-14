import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"

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
        <div className="border border-slate-400 rounded-md md:w-1/2">
          <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Add new product</div>
          <div className="p-2 flex flex-col gap-5">
            <form data-testid="add-product-form" className="flex flex-col gap-5" onSubmit={handleAddProduct}>
              <input
                type="text"
                value={productName}
                placeholder="Enter product name"
                className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
                onChange={({ target: { value } }) => setProductName(value)}
                required
              />

              <select
                role="combobox"
                value={categoryId}
                className="focus:invalid:border-red-500 bg-white border-2 border-gray-300 outline-0 p-2 text-xl rounded-md "
                onChange={({ target: { value } }) => setCategoryId(value)}
                required
              >
                <option value="">Please select a category</option>
                {
                  categories.map(v => (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  ))
                }
              </select>

              <input
                type="number"
                value={productQuantity}
                min={1}
                max={100}
                placeholder="Enter product quantity"
                className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
                onChange={({ target: { value } }) => setProductQuantity(parseInt(value))}
                required
              />

              <input
                type="number"
                value={productBuyingPrice}
                step={0.1}
                min={1}
                placeholder="Enter buying price: 0.00"
                className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
                onChange={({ target: { value } }) => setProductBuyingPrice(parseFloat(value))}
                required
              />

              <input
                type="number"
                value={productSellingPrice}
                step={0.1}
                min={1}
                placeholder="Enter selling price: 0.00"
                className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
                onChange={({ target: { value } }) => setProductSellingPrice(parseFloat(value))}
                required
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white w-[150px] text-xl p-1 rounded-md"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default AddProductPage
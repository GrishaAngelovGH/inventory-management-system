import { TextInput, Select, Tooltip } from "flowbite-react"

const ProductPage = ({
  title,
  categoryId,
  product,
  categories,
  buttons,
  onProductNameChange,
  onCategoryChange,
  onProductQuantityChange,
  onProductBuyingPriceChange,
  onProductSellingPriceChange,
  onSubmit
}) => {
  return (
    <div className="bg-white border border-slate-400 rounded-md md:w-1/2">
      <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">{title}</div>
      <div className="p-2 flex flex-col gap-5">
        <form data-testid="add-product-form" className="flex flex-col gap-5" onSubmit={onSubmit}>
          <Tooltip content="Product name" placement="left">
            <TextInput
              value={product.name}
              placeholder="Enter product name"
              onChange={onProductNameChange}
              required
            />
          </Tooltip>

          <Tooltip content="Category" placement="left">
            <Select
              role="combobox"
              value={categoryId}
              onChange={onCategoryChange}
              required
            >
              <option value="">Please select a category</option>
              {
                categories.map(v => (
                  <option key={v.id} value={v.id}>{v.name}</option>
                ))
              }
            </Select>
          </Tooltip>

          <Tooltip content="Product quantity" placement="left">
            <TextInput
              type="number"
              value={product.quantity}
              min={1}
              max={100}
              placeholder="Enter product quantity"
              onChange={onProductQuantityChange}
              required
            />
          </Tooltip>

          <Tooltip content="Buying price" placement="left">
            <TextInput
              type="number"
              value={product.buyingPrice}
              step={0.01}
              min={1}
              placeholder="Enter buying price: 0.00"
              onChange={onProductBuyingPriceChange}
              required
            />
          </Tooltip>

          <Tooltip content="Selling price" placement="left">
            <TextInput
              type="number"
              value={product.sellingPrice}
              step={0.01}
              min={1}
              placeholder="Enter selling price: 0.00"
              onChange={onProductSellingPriceChange}
              required
            />
          </Tooltip>

          {buttons}
        </form>
      </div>
    </div>
  )
}

export default ProductPage
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
          <input
            type="text"
            value={product.name}
            placeholder="Enter product name"
            className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
            onChange={onProductNameChange}
            required
          />

          <select
            role="combobox"
            value={categoryId}
            className="focus:invalid:border-red-500 bg-white border-2 border-gray-300 outline-0 p-2 text-xl rounded-md "
            onChange={onCategoryChange}
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
            value={product.quantity}
            min={1}
            max={100}
            placeholder="Enter product quantity"
            className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
            onChange={onProductQuantityChange}
            required
          />

          <input
            type="number"
            value={product.buyingPrice}
            step={0.1}
            min={1}
            placeholder="Enter buying price: 0.00"
            className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
            onChange={onProductBuyingPriceChange}
            required
          />

          <input
            type="number"
            value={product.sellingPrice}
            step={0.1}
            min={1}
            placeholder="Enter selling price: 0.00"
            className="focus:invalid:border-red-500 invalid:border-2 outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
            onChange={onProductSellingPriceChange}
            required
          />

          {/* <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white w-[150px] text-xl p-1 rounded-md"
            >
              Add Product
            </button> */}

          {buttons}
        </form>
      </div>
    </div>
  )
}

export default ProductPage
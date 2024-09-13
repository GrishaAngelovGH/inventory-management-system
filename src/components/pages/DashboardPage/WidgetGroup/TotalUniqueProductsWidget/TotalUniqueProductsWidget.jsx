const TotalUniqueProductsWidget = ({ inventoryItems }) => {
  const totalUniqueProducts = inventoryItems.reduce((value, category) => {
    return value + category.products.length
  }, 0)

  return (
    <div className="bg-white p-2 rounded-md shadow-lg flex items-center md:w-1/4">
      <div className="w-3/4 text-center">
        <div className="text-3xl">{totalUniqueProducts}</div>
        <div className="mt-2 text-gray-500">Total Unique Products</div>
      </div>
      <div className="bg-blue-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
        <img src="/shopping-cart-icon.png" className="w-[40px] h-[40px]" />
      </div>
    </div>
  )
}

export default TotalUniqueProductsWidget
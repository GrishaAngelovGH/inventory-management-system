const TotalProductsWidget = ({ inventory }) => {
  const totalProducts = inventory.categories.reduce((value, category) => {
    return value + category.products.length
  }, 0)

  return (
    <div className="border border-slate-400 rounded-md shadow-lg flex md:w-[250px]">
      <div className="bg-blue-700 rounded-l-md w-1/2">
        <img src="/shopping-cart-icon.png" className="w-full" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center text-center">
        <div className="text-xl">{totalProducts}</div>
        <div className="mt-2 text-sm text-gray-500 font-bold">Total Products</div>
      </div>
    </div>
  )
}

export default TotalProductsWidget
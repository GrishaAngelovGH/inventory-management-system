const TotalValueWidget = ({ inventoryItems }) => {
  const totalValue = inventoryItems.reduce((value, category) => {
    return value + category.products.reduce((v, product) => {
      return v + (product.buyingPrice * product.quantity)
    }, 0)
  }, 0)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="border border-slate-400 rounded-md shadow-lg flex md:w-[250px]">
      <div className="bg-purple-700 rounded-l-md w-1/2 p-5 flex justify-center items-center">
        <img src="/total-value-icon.png" className="w-2/3" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center text-center">
        <div className="text-xl">{formatter.format(totalValue)}</div>
        <div className="mt-2 text-sm text-gray-500 font-bold">Total Inventory Value</div>
      </div>
    </div>
  )
}

export default TotalValueWidget
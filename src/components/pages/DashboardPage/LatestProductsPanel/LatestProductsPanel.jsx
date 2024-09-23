import inventory from "persistent/inventory"

const LatestProductsPanel = () => {
  const currentDate = new Date().toDateString()

  const latestProducts = inventory
    .getItems()
    .map(v => v.products)
    .flat()
    .filter(v => new Date(v.creationDate).toDateString() === currentDate)

  if (!latestProducts.length) {
    return null
  }

  return (
    <div className="mt-5 pl-2 flex flex-col md:flex-row md:justify-center">
      <div className="bg-white border border-slate-400 rounded-md md:w-1/2">
        <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Latest products</div>
        <div className="flex justify-evenly text-center bg-slate-300">
          <div className="w-[140px] md:w-1/4">Name</div>
          <div className="w-[140px] md:w-1/4">Quantity</div>
          <div className="w-[140px] md:w-1/4">Buying Price</div>
          <div className="w-[140px] md:w-1/4">Selling Price</div>
        </div>
        <div className="max-h-[150px] overflow-auto">
          {
            latestProducts.map(v => (
              <div key={v.id} className="flex justify-evenly text-center">
                <div className="w-[140px] md:w-1/4">{v.name}</div>
                <div className="w-[140px] md:w-1/4">{v.quantity}</div>
                <div className="w-[140px] md:w-1/4">{v.buyingPrice}</div>
                <div className="w-[140px] md:w-1/4">{v.sellingPrice}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LatestProductsPanel
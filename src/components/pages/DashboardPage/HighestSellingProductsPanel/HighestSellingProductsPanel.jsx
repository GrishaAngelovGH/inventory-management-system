import inventory from "persistent/inventory"
import currencyFormatter from "formatters/currencyFormatter"

const HighestSellingProductsPanel = () => {
  const latestTopSales = inventory
    .getAllSales()
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)

  return (
    <div className="mt-5 pl-2 flex flex-col md:flex-row md:justify-center">
      <div className="bg-white border border-slate-400 rounded-md md:w-1/2">
        <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Top 5 Products by Sales</div>
        <div className="flex justify-evenly text-center bg-slate-300">
          <div className="w-[140px] md:w-1/4">Name</div>
          <div className="w-[140px] md:w-1/4">Quantity</div>
          <div className="w-[140px] md:w-1/4">Selling Price</div>
          <div className="w-[140px] md:w-1/4">Total</div>
        </div>
        <div className="max-h-[150px] overflow-auto">
          {
            latestTopSales.map(v => (
              <div key={v.id} className="flex justify-evenly text-center">
                <div className="w-[140px] md:w-1/4">{v.productName}</div>
                <div className="w-[140px] md:w-1/4">{v.quantity}</div>
                <div className="w-[140px] md:w-1/4">{currencyFormatter.format(v.sellingPrice)}</div>
                <div className="w-[140px] md:w-1/4">{currencyFormatter.format(v.total)}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HighestSellingProductsPanel
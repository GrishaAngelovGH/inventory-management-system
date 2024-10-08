import currencyFormatter from "formatters/currencyFormatter"

const SalesPDF = ({ sales }) => {
  const columns = ["Product Name", "Quantity", "Selling Price", "Date", "Total"]
  const totalSum = sales.reduce((a, b) => a + b.total, 0)

  return (
    <div className="border-2 border-slate-400 text-xl">
      <div className="flex justify-center items-center text-center bg-slate-200 h-[75px]">
        {
          columns.map((v, i) => (<div key={i} className="w-[130px]">{v}</div>))
        }
      </div>
      {
        sales.map(v => (
          <div key={v.id} className={"p-1 flex items-center text-center border-b border-gray-400 last:border-b-0"}>
            <div className="w-[140px] md:w-1/4">{v.productName}</div>
            <div className="w-[140px] md:w-1/4">{v.quantity}</div>
            <div className="w-[140px] md:w-1/4">{currencyFormatter.format(v.sellingPrice)}</div>
            <div className="w-[140px] md:w-1/4">{new Date(v.date).toLocaleDateString("en-GB")}</div>
            <div className="w-[140px] md:w-1/4">{currencyFormatter.format(v.total)}</div>
          </div>
        ))
      }
      <div className="text-xl bg-blue-200 p-1 h-[50px] flex justify-center items-center text-center">Total Sales: {currencyFormatter.format(totalSum)}</div>
    </div>
  )
}

export default SalesPDF
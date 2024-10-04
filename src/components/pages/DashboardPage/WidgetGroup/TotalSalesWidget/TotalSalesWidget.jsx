const TotalSalesWidget = ({ sales }) => {
  const totalSales = sales.reduce((a, b) => a + b.total, 0)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="bg-white p-2 rounded-md shadow-lg flex items-center md:w-1/4">
      <div className="w-3/4 text-center">
        <div className="text-3xl">{formatter.format(totalSales)}</div>
        <div className="mt-2 text-gray-500">Total Sales</div>
      </div>
      <div className="bg-green-400 rounded-full w-[60px] h-[60px] flex justify-center items-center">
        <img src="/sales-icon.png" className="w-[40px] h-[40px]" />
      </div>
    </div>
  )
}

export default TotalSalesWidget
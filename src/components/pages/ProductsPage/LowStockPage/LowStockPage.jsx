import SidebarLayout from "components/SidebarLayout"

import inventory from "persistent/inventory"

const LowStockPage = () => {
  const categories = inventory
    .getItems()
    .filter(v => v.products.some(p => p.quantity < 10))
    .map(v => ({ ...v, products: v.products.filter(p => p.quantity < 10) }))

  return (
    <SidebarLayout>
      <div className="pl-2 flex flex-col items-center">
        <div className="text-2xl text-center">Low Stock Products</div>
        {
          categories.length > 0 ? (
            <div className="mt-5 w-[280px] md:w-1/2 md:max-h-[500px] overflow-auto">
              {
                categories.map(v => (
                  <div key={v.id}>
                    <div className="text-xl bg-gray-200">{v.name}</div>
                    {
                      v.products.map(p => (
                        <div key={p.id} className="flex justify-between p-1">
                          <div>{p.name}</div>
                          <div>Current Quantity: {p.quantity}</div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="mt-5 text-2xl text-center bg-green-200 text-green-700 p-2 rounded-md flex items-center gap-5">
              <img src="success-icon.png" />
              <div>All inventory items are stocked at optimal levels</div>
            </div>
          )
        }
      </div>
    </SidebarLayout >
  )
}

export default LowStockPage
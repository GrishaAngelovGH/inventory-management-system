import TotalInventoryValueWidget from "./TotalInventoryValueWidget"
import TotalCategoriesWidget from "./TotalCategoriesWidget"
import TotalUniqueProductsWidget from "./TotalUniqueProductsWidget"
import TotalSalesWidget from "./TotalSalesWidget/TotalSalesWidget"

import inventory from "persistent/inventory"

const WidgetGroup = () => {
  const inventoryItems = inventory.getItems()
  const sales = inventory.getAllSales()

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-evenly pl-2">
      <TotalInventoryValueWidget inventoryItems={inventoryItems} />
      <TotalCategoriesWidget inventoryItems={inventoryItems} />
      <TotalUniqueProductsWidget inventoryItems={inventoryItems} />
      <TotalSalesWidget sales={sales} />
    </div>
  )
}

export default WidgetGroup
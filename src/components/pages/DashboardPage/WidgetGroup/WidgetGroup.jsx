import TotalValueWidget from "./TotalValueWidget"
import TotalCategoriesWidget from "./TotalCategoriesWidget"
import TotalUniqueProductsWidget from "./TotalUniqueProductsWidget"

import inventory from "persistent/inventory"

const WidgetGroup = () => {
  const inventoryItems = inventory.getItems()

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-evenly pl-2">
      <TotalValueWidget inventoryItems={inventoryItems} />
      <TotalCategoriesWidget inventoryItems={inventoryItems} />
      <TotalUniqueProductsWidget inventoryItems={inventoryItems} />
    </div>
  )
}

export default WidgetGroup
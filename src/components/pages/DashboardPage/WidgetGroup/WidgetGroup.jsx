import TotalValueWidget from "./TotalValueWidget"
import TotalCategoriesWidget from "./TotalCategoriesWidget"
import TotalProductsWidget from "./TotalProductsWidget"

import inventory from "persistent/inventory"

const WidgetGroup = () => {
  const inventoryItems = inventory.getItems()

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-evenly mt-2">
      <TotalValueWidget inventoryItems={inventoryItems} />
      <TotalCategoriesWidget inventoryItems={inventoryItems} />
      <TotalProductsWidget inventoryItems={inventoryItems} />
    </div>
  )
}

export default WidgetGroup
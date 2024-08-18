import TotalValueWidget from "./TotalValueWidget"
import TotalCategoriesWidget from "./TotalCategoriesWidget"
import TotalProductsWidget from "./TotalProductsWidget"

const WidgetGroup = ({ inventory }) => (
  <div className="flex flex-col md:flex-row gap-2 justify-evenly mt-2">
    <TotalValueWidget inventory={inventory} />
    <TotalCategoriesWidget inventory={inventory} />
    <TotalProductsWidget inventory={inventory} />
  </div>
)

export default WidgetGroup
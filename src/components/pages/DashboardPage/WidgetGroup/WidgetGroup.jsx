import TotalValueWidget from "./TotalValueWidget"
import TotalCategoriesWidget from "./TotalCategoriesWidget"

const WidgetGroup = ({ inventory }) => (
  <div className="flex flex-col md:flex-row gap-2 justify-evenly mt-2">
    <TotalValueWidget inventory={inventory} />
    <TotalCategoriesWidget inventory={inventory} />
  </div>
)

export default WidgetGroup
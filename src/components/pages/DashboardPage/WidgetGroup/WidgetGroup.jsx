import TotalValueWidget from "./TotalValueWidget"

const WidgetGroup = ({ inventory }) => (
  <div className="flex flex-col md:flex-row gap-2 justify-evenly mt-2">
    <TotalValueWidget inventory={inventory} />
  </div>
)

export default WidgetGroup
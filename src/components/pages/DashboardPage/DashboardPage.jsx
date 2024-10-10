import SidebarLayout from "components/SidebarLayout"

import WidgetGroup from "./WidgetGroup"
import LatestProductsPanel from "./LatestProductsPanel"
import HighestSellingProductsPanel from "./HighestSellingProductsPanel"
import LatestSalesPanel from "./LatestSalesPanel"

const DashboardPage = () => (
  <SidebarLayout>
    <WidgetGroup />
    <LatestProductsPanel />
    <div className="mt-5 p-2 flex flex-col md:flex-row gap-5">
      <HighestSellingProductsPanel />
      <LatestSalesPanel />
    </div>
  </SidebarLayout >
)

export default DashboardPage
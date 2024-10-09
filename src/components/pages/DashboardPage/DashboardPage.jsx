import SidebarLayout from "components/SidebarLayout"

import WidgetGroup from "./WidgetGroup"
import LatestProductsPanel from "./LatestProductsPanel"
import HighestSellingProductsPanel from "./HighestSellingProductsPanel"

const DashboardPage = () => (
  <SidebarLayout>
    <WidgetGroup />
    <LatestProductsPanel />
    <HighestSellingProductsPanel />
  </SidebarLayout >
)

export default DashboardPage
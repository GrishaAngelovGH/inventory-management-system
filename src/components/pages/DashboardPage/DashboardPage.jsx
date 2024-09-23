import SidebarLayout from "components/SidebarLayout"

import WidgetGroup from "./WidgetGroup"
import LatestProductsPanel from "./LatestProductsPanel"

const DashboardPage = () => (
  <SidebarLayout>
    <WidgetGroup />
    <LatestProductsPanel />
  </SidebarLayout >
)

export default DashboardPage
import SidebarLayout from "components/SidebarLayout"

import WidgetGroup from "./WidgetGroup"

const DashboardPage = () => {
  return (
    <SidebarLayout>
      <div className="p-2">
        <WidgetGroup />
      </div>
    </SidebarLayout>
  )
}

export default DashboardPage
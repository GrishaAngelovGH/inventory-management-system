import SidebarLayout from "components/SidebarLayout"

import AddCategoryPanel from "./AddCategoryPanel"
import CategoryList from "./CategoryList"

const CategoriesPage = ({ showNotification }) => {
  return (
    <SidebarLayout>
      <div className="p-2 flex flex-col md:flex-row gap-5">
        <AddCategoryPanel showNotification={showNotification} />
        <CategoryList showNotification={showNotification} />
      </div>
    </SidebarLayout>
  )
}

export default CategoriesPage
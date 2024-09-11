import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"

import AddCategoryPanel from "./AddCategoryPanel"
import EditCategoryPanel from "./EditCategoryPanel"
import CategoryList from "./CategoryList"

import inventory from "persistent/inventory"

const CategoriesPage = ({ showNotification }) => {
  const [categoryId, setCategoryId] = useState("")
  const [categoryName, setCategoryName] = useState("")

  const handleEdit = (id, name) => {
    setCategoryId(id)
    setCategoryName(name)
  }

  const handleConfirm = newCategoryName => {
    inventory.updateCategoryName(categoryId, newCategoryName)
    setCategoryId("")
    setCategoryName("")
    showNotification("Successfully edited category!")
  }

  const handleCancel = () => {
    setCategoryId("")
    setCategoryName("")
  }

  return (
    <SidebarLayout>
      <div className="p-2 flex flex-col md:flex-row gap-5">
        {
          !categoryId.length ?
            (<AddCategoryPanel showNotification={showNotification} />) :
            (
              <EditCategoryPanel
                categoryName={categoryName}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
            )
        }
        <CategoryList showNotification={showNotification} onEdit={handleEdit} />
      </div>
    </SidebarLayout>
  )
}

export default CategoriesPage
import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"
import Modal from "components/Modal"

import AddCategoryPanel from "./AddCategoryPanel"
import CategoryList from "./CategoryList"

import inventory from "persistent/inventory"

const CategoriesPage = ({ showNotification }) => {
  const [showModal, setShowModal] = useState(false)
  const [categoryId, setCategoryId] = useState()
  const [categoryName, setCategoryName] = useState("")

  const handleEdit = (id, name) => {
    setCategoryId(id)
    setCategoryName(name)
    setShowModal(true)
  }

  const handleConfirm = () => {
    inventory.updateCategoryName(categoryId, categoryName)
    setShowModal(false)
    showNotification("Category updated successfully")
  }

  const handleCancel = () => {
    setCategoryId(null)
    setCategoryName("")
    setShowModal(false)
  }

  return (
    <SidebarLayout>
      {
        showModal && (
          <Modal title="Edit Category" onConfirm={handleConfirm} onCancel={handleCancel}>
            <div className="p-5">
              <input
                type="text"
                value={categoryName}
                className="outline-0 border-2 text-xl rounded-md p-2"
                onChange={({ target: { value } }) => setCategoryName(value)}
              />
            </div>
          </Modal>
        )
      }

      <div className="p-2 flex flex-col md:flex-row gap-5">
        <AddCategoryPanel showNotification={showNotification} />
        <CategoryList showNotification={showNotification} onEdit={handleEdit} />
      </div>
    </SidebarLayout>
  )
}

export default CategoriesPage
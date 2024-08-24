import { useState } from "react"

import SidebarLayout from "components/SidebarLayout"

import inventory from "persistent/inventory"

const AddCategoryPanel = ({ showNotification }) => {
  const [newCategory, setNewCategory] = useState("")

  const handleInputChange = ({ target: { value } }) => {
    setNewCategory(value)
  }

  const handleAdd = () => {
    try {
      inventory.createCategory(newCategory)
      setNewCategory("")
      showNotification("Successfully added category!")
    } catch (error) {
      showNotification(error.message, true)
    }
  }

  return (
    <div className="border border-slate-400 rounded-md w-1/2">
      <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Add new category</div>

      <div className="p-2 flex flex-col gap-5">
        <input
          type="text"
          value={newCategory}
          placeholder="Enter category name"
          className="outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
          onChange={handleInputChange}
        />
        <button
          disabled={!newCategory.length}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white w-[150px] text-xl p-1 rounded-md"
          onClick={handleAdd}
        >
          Add Category
        </button>
      </div>
    </div>
  )
}

const CategoriesPage = ({ showNotification }) => {
  return (
    <SidebarLayout>
      <div className="p-2 flex gap-5">
        <AddCategoryPanel showNotification={showNotification} />
      </div>
    </SidebarLayout>
  )
}

export default CategoriesPage
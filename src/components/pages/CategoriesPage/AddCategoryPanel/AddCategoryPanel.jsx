import { useState } from "react"

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
    <div className="border border-slate-400 rounded-md md:w-1/2 max-h-[150px]">
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
          data-testid="add-category-button"
          disabled={!newCategory.length}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white w-[150px] text-xl p-1 rounded-md"
          onClick={handleAdd}
        >
          Add Category
        </button>
      </div>
    </div>
  )
}

export default AddCategoryPanel
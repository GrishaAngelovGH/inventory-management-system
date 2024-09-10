import { useState } from "react"

const EditCategoryPanel = ({ categoryName, onConfirm, onCancel }) => {
  const [newCategory, setNewCategory] = useState(categoryName)

  const handleInputChange = ({ target: { value } }) => {
    setNewCategory(value)
  }

  const handleEdit = () => {
    onConfirm(newCategory)
  }

  return (
    <div className="border border-slate-400 rounded-md md:w-1/2 max-h-[150px]">
      <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Edit category</div>

      <div className="p-2 flex flex-col gap-5">
        <input
          type="text"
          value={newCategory}
          placeholder="Enter category name"
          className="outline-0 border border-gray-300 p-1 text-xl rounded-md w-full"
          onChange={handleInputChange}
        />
        <div className="flex gap-2">
          <button disabled={!newCategory.length} className="bg-blue-500 disabled:bg-gray-300 text-white w-[150px] text-xl p-1 rounded-md" onClick={handleEdit}>Confirm</button>
          <button className="bg-gray-500  text-white w-[150px] text-xl p-1 rounded-md" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditCategoryPanel
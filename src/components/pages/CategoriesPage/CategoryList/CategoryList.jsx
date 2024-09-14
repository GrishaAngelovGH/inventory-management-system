import { useState } from "react"

import Modal from "components/Modal"

import inventory from "persistent/inventory"

const CategoryList = ({ showNotification, onEdit }) => {
  const [showModal, setShowModal] = useState(false)
  const [categoryId, setCategoryId] = useState()

  const categories = inventory.getItems()

  return (
    <div className="border border-slate-400 rounded-md md:w-1/2 max-h-[420px]">
      {
        showModal && (
          <Modal
            title="Delete Category"
            onConfirm={() => {
              inventory.deleteCategory(categoryId)
              showNotification('Successfully deleted category')
              setShowModal(false)
            }}
            onCancel={() => {
              setCategoryId(null)
              setShowModal(false)
            }}
          >
            <p className="p-3 text-xl">
              Are you sure you want to delete this category?
              All associated products will also be deleted.
            </p>
          </Modal>
        )
      }

      <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">
        Category List
      </div>

      <div className="bg-white max-h-[380px] overflow-auto">
        {
          categories.map((v, i) => (
            <div key={v.id} data-testid={`category-item-${i}`} className="mt-2 p-2 text-xl flex justify-between items-center border-b-2 last:border-b-0">
              <div className="w-[180px] md:w-auto">{v.name}</div>

              <div className="flex gap-4">
                <button
                  className="bg-orange-500 rounded-md p-2"
                  onClick={() => {
                    onEdit(v.id, v.name)
                  }}
                >
                  <img src="/edit-icon.png" className="w-[20px] h-[20px]" />
                </button>

                <button
                  data-testid="delete-button"
                  className="bg-red-500 rounded-md p-2"
                  onClick={() => {
                    setCategoryId(v.id)
                    setShowModal(true)
                  }}
                >
                  <img src="/delete-icon.png" className="w-[20px] h-[20px]" />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryList
import inventory from "persistent/inventory"

const CategoryList = ({ showNotification }) => {
  const categories = inventory.getItems()

  return (
    <div className="border border-slate-400 rounded-md md:w-1/2 max-h-[420px]">
      <div className="uppercase text-xl text-center border-b-2 border-blue-500 bg-gray-200 rounded-t-md text-gray-500">Category List</div>

      <div className="max-h-[380px] overflow-auto">
        {
          categories.map(v => (
            <div key={v.id} className="mt-2 p-2 text-xl flex justify-between items-center border-b-2 last:border-b-0">
              <div>{v.name}</div>
              <button
                className="bg-red-500 rounded-md p-2"
                onClick={() => {
                  inventory.deleteCategory(v.id)
                  showNotification('Successfully deleted category')
                }}
              >
                <img src="/delete-icon.png" className="w-[20px] h-[20px]" />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryList
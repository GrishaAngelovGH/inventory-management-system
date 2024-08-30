const TotalCategoriesWidget = ({ inventoryItems }) => (
  <div className="border border-slate-400 rounded-md shadow-lg flex md:w-[250px]">
    <div className="bg-blue-700 rounded-l-md w-1/2 p-5 flex justify-center items-center">
      <img src="/categories-icon.png" className="w-2/3" />
    </div>
    <div className="w-1/2 flex flex-col justify-center items-center text-center">
      <div className="text-xl">{inventoryItems.length}</div>
      <div className="mt-2 text-sm text-gray-500 font-bold">Total Categories</div>
    </div>
  </div>
)

export default TotalCategoriesWidget
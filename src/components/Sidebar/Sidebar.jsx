const LeftChevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 12 L18 24 L28 36" />
  </svg>
)

const RightChevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12 L30 24 L20 36" />
  </svg>
)

const Sidebar = ({ open, onToggle }) => {
  return (
    <div className="h-full bg-slate-600 text-white p-1 text-center relative">
      <div className="border-2 rounded-md border-blue-100 p-1">Inventory Management</div>

      <div
        className="w-[40px] h-[40px] text-2xl flex justify-center items-center rounded-full bg-orange-500 hover:bg-orange-600 absolute left-[90%] top-[50%] cursor-pointer"
        onClick={onToggle}
      >
        {open ? <RightChevron /> : <LeftChevron />}
      </div>
    </div>
  )
}

export default Sidebar
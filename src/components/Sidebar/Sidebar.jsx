import { NavLink } from "react-router-dom"

import SidebarButtonItem from "./SidebarButtonItem"

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
  const items = [
    { icon: "home-icon.png", title: "Home", path: "/", isButton: false },
    { icon: "dashboard-icon.png", title: "Dashboard", path: "/dashboard", isButton: false },
    { icon: "categories-icon.png", title: "Categories", path: "/categories", isButton: false },
    {
      icon: "products-icon.png",
      title: "Products",
      isButton: true,
      childRoutes: [
        { icon: "add-icon.png", title: "Add Product", path: "/add-product" }
      ]
    }
  ]

  return (
    <div className={`h-full bg-slate-600 text-white p-1 text-center relative ${open ? 'min-w-[200px]' : 'min-w-[60px]'} duration-200`}>
      <div className={`flex flex-col ${open ? "items-start" : "items-center"}`}>
        {
          items.map((v, i) => {
            return v.isButton ?
              (<SidebarButtonItem key={i} open={open} {...v} />) :
              (
                <NavLink
                  key={i}
                  to={v.path}
                  className={({ isActive }) => `${isActive ? "text-slate-400" : "text-white"} flex items-center gap-2 mt-4 ${open ? 'ms-6' : 'ms-0'}`}
                >
                  <img src={v.icon} className="w-[20px] h-[20px]" />

                  <span className={`${open ? "block" : "hidden"}`}>
                    {v.title}
                  </span>
                </NavLink>
              )
          })
        }
      </div>

      <div
        className={`${window.innerWidth > 700 ? 'block' : 'hidden'}  w-[40px] h-[40px] text-2xl flex justify-center items-center rounded-full bg-orange-500 hover:bg-orange-600 absolute left-[100%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
        onClick={onToggle}
      >
        {open ? <LeftChevron /> : <RightChevron />}
      </div>
    </div>
  )
}

export default Sidebar
import { useState } from "react"

import { NavLink } from "react-router-dom"

const SidebarButtonItem = ({ open, icon, title, childRoutes, showChildRoutes }) => {
  const [toggled, setToggled] = useState(showChildRoutes)

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <div>
      <button
        title={open ? '' : title}
        className={`text-white flex items-center gap-2 mt-4 ${open ? 'ms-6' : 'ms-0'}`}
        onClick={handleToggle}
      >
        <img src={icon} className="w-[20px] h-[20px]" />

        <span className={`${open ? "block" : "hidden"}`}>
          {title}
        </span>
      </button>

      {
        toggled && (
          <div>
            {
              childRoutes.map((v, i) => (
                <NavLink
                  role="link"
                  key={i}
                  title={open ? '' : v.title}
                  to={v.path}
                  className={({ isActive }) => `${isActive ? "text-slate-400" : "text-white"} flex items-center gap-2 mt-4 ${open ? 'ms-10' : 'ms-0'}`}
                >
                  <img src={v.icon} className="w-[20px] h-[20px]" />

                  <span className={`${open ? "block" : "hidden"}`}>
                    {v.title}
                  </span>
                </NavLink>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default SidebarButtonItem
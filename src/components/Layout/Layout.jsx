const Layout = ({ sidebar, children }) => (
  <div className="h-screen flex">
    {sidebar}
    <div className="flex-1 overflow-x-auto pl-[2%] p-2">{children}</div>
  </div>
)

export default Layout
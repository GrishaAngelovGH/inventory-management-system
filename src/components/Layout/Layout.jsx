const Layout = ({ sidebar, children }) => (
  <div className="h-screen flex">
    {sidebar}
    <div className="flex-1 overflow-x-auto">{children}</div>
  </div>
)

export default Layout
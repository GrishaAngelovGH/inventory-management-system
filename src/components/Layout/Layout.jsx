const Layout = ({ sidebar, children }) => (
  <div className="h-screen flex">
    <div className="w-[200px]">{sidebar}</div>
    <div className="flex-1">{children}</div>
  </div>
)

export default Layout
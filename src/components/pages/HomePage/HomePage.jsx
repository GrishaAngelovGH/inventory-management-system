const HeadingTitle = () => (
  <div className="bg-blue-400 p-1 flex items-center">
    <img src="/inventory-management.png" width={50} height={50} />
    <h1 className="text-3xl flex-1 text-center text-blue-950">Inventory Management System</h1>
  </div>
)

const HomePage = () => {
  return (
    <>
      <HeadingTitle />
    </>
  )
}

export default HomePage

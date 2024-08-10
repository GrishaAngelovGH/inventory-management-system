const HeadingTitle = () => (
  <div className="bg-blue-400 p-1 flex items-center">
    <img src="/inventory-management.png" width={50} height={50} />
    <h1 className="text-3xl flex-1 text-center text-blue-950">Inventory Management System</h1>
  </div>
)

const IntroductionSection = () => (
  <div className="h-[300px] bg-slate-300 flex">
    <div className="w-3/6 p-4 text-center flex flex-col justify-center">
      <h1 className="text-3xl">Effortless Inventory, Seamless Operations—Your Smarter Way to Manage Stock</h1>
      <p className="text-xl pt-4 text-justify">Transform the way you manage your inventory with our powerful, easy-to-use system. Gain real-time insights, optimize stock levels, and streamline processes—all in one place. Your path to smarter inventory starts here.</p>
    </div>
    <div className="w-3/6">
      <img src="/im-1.jpg" className="w-full h-full opacity-75" />
    </div>
  </div>
)

const HomePage = () => {
  return (
    <>
      <HeadingTitle />
      <IntroductionSection />
    </>
  )
}

export default HomePage

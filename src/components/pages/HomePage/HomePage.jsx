const HeadingTitle = () => (
  <div className="bg-blue-400 p-1 flex items-center">
    <img src="/inventory-management.png" width={50} height={50} />
    <h1 className="text-3xl flex-1 text-center text-blue-950">Inventory Management System</h1>
  </div>
)

const IntroductionSection = () => (
  <div className="md:h-[300px] bg-slate-300 flex">
    <div className="w-3/6 p-4 text-center flex flex-col justify-center">
      <h1 className="md:text-xl lg:text-3xl">Effortless Inventory, Seamless Operations—Your Smarter Way to Manage Stock</h1>
      <p className="md:text-xl pt-4 text-justify">Transform the way you manage your inventory with our powerful, easy-to-use system. Gain real-time insights, optimize stock levels, and streamline processes—all in one place. Your path to smarter inventory starts here.</p>
    </div>
    <div className="w-3/6">
      <img src="/im-1.jpg" className="w-full h-full opacity-75" />
    </div>
  </div>
)

const DiscoverSection = () => (
  <div className="md:h-[300px] bg-[url('/im-2.jpg')] bg-cover flex justify-center items-center">
    <div className="w-4/6 backdrop-blur-md p-5 rounded-md">
      <h1 className="text-xl lg:text-3xl text-center">Take the First Step Towards Smarter Inventory</h1>

      <p className="mt-5 text-xl text-justify">
        Discover the tools you need to optimize and grow your business.
        Whether you're a small startup or an established enterprise, our system adapts to your needs.
        Try it risk-free today and see the impact it can have on your operations!
      </p>
    </div>
  </div>
)

const HomePage = () => {
  return (
    <>
      <HeadingTitle />
      <IntroductionSection />
      <DiscoverSection />
    </>
  )
}

export default HomePage

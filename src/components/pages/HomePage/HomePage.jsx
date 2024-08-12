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

const SeamlessIntegrationSection = () => (
  <div className="md:h-[300px] bg-[url('/im-3.jpg')] bg-cover flex justify-center items-center">
    <div className="w-4/6 backdrop-blur-xl p-5 rounded-md text-white">
      <h1 className="text-xl lg:text-3xl text-center">Seamless Integration</h1>

      <p className="mt-5 text-xl text-justify">
        Our system works harmoniously with your favorite tools and platforms.
        Whether it's accounting software, e-commerce platforms, or point-of-sale systems,
        we've got you covered for a unified workflow.
      </p>
    </div>
  </div>
)

const BoostProductivitySection = () => (
  <div className="md:h-[300px] bg-[url('/im-4.png')] bg-cover flex justify-center items-center">
    <div className="w-4/6 backdrop-blur-xl p-5 rounded-md text-white">
      <h1 className="text-xl lg:text-3xl text-center">Boost Your Productivity</h1>

      <p className="mt-5 text-xl text-justify">
        Spend less time managing inventory and more time growing your business.
        Our intuitive dashboard, smart alerts, and automation features let you focus
        on what truly matters.
      </p>
    </div>
  </div>
)

const DataDrivenDecisionsSection = () => (
  <div className="md:h-[300px] bg-[url('/im-5.jpg')] bg-cover flex justify-center items-center">
    <div className="w-4/6 backdrop-blur-xl p-5 rounded-md">
      <h1 className="text-xl lg:text-3xl text-center">Data-Driven Decisions</h1>

      <p className="mt-5 text-xl text-justify">
        Access powerful analytics and detailed reporting to uncover trends,
        monitor performance, and forecast demand.
        Make informed decisions with confidence and precision.
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
      <SeamlessIntegrationSection />
      <BoostProductivitySection />
      <DataDrivenDecisionsSection />
    </>
  )
}

export default HomePage

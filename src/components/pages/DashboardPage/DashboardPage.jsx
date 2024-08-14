import Layout from "components/Layout"
import Sidebar from "components/Sidebar"

const DashboardPage = () => {
  return (
    <Layout sidebar={<Sidebar />}>
      <div>DashboardPage</div>
    </Layout>
  )
}

export default DashboardPage
import { useState } from "react"

import Layout from "components/Layout"
import Sidebar from "components/Sidebar"

const SidebarLayout = ({ children }) => {
  const [open, setOpen] = useState(true)

  const handleSidebarToggle = () => {
    setOpen(!open)
  }

  return (
    <Layout sidebar={<Sidebar open={open} onToggle={handleSidebarToggle} />}>
      {children}
    </Layout>
  )
}

export default SidebarLayout
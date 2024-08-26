import { useState, useEffect } from "react"

import Layout from "components/Layout"
import Sidebar from "components/Sidebar"

const SidebarLayout = ({ children }) => {
  const [open, setOpen] = useState(window.innerWidth > 700)

  const handleSidebarToggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 700)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout sidebar={<Sidebar open={open} onToggle={handleSidebarToggle} />}>
      {children}
    </Layout>
  )
}

export default SidebarLayout
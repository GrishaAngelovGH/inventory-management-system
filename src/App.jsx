import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Notification from "components/Notification"

import HomePage from "components/pages/HomePage"
import DashboardPage from "components/pages/DashboardPage"
import CategoriesPage from "components/pages/CategoriesPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/categories" element={<Notification><CategoriesPage /></Notification>} />
      </Routes>
    </Router>
  )
}

export default App

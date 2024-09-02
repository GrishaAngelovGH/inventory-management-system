import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Notification from "components/Notification"

import HomePage from "components/pages/HomePage"
import DashboardPage from "components/pages/DashboardPage"
import CategoriesPage from "components/pages/CategoriesPage"
import AddProductPage from "components/pages/ProductsPage/AddProductPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/categories" element={<Notification><CategoriesPage /></Notification>} />
        <Route path="/add-product" element={<Notification><AddProductPage /></Notification>} />
      </Routes>
    </Router>
  )
}

export default App

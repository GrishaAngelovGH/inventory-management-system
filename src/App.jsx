import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Notification from "components/Notification"

import HomePage from "components/pages/HomePage"
import DashboardPage from "components/pages/DashboardPage"
import CategoriesPage from "components/pages/CategoriesPage"
import AddProductPage from "components/pages/ProductsPage/AddProductPage"
import ManageProductsPage from "components/pages/ProductsPage/ManageProductsPage"
import AddSalePage from "components/pages/SalesPage/AddSalePage"
import ManageSalesPage from "components/pages/SalesPage/ManageSalesPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/categories" element={<Notification><CategoriesPage /></Notification>} />
        <Route path="/add-product" element={<Notification><AddProductPage /></Notification>} />
        <Route path="/manage-products" element={<Notification><ManageProductsPage /></Notification>} />
        <Route path="/add-sale" element={<Notification><AddSalePage /></Notification>} />
        <Route path="/manage-sales" element={<Notification><ManageSalesPage /></Notification>} />
      </Routes>
    </Router>
  )
}

export default App

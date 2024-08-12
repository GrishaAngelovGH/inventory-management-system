import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "components/pages/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductList from "./components/product-list"
import ProductDetail from "./pages/product-detail"
import { Toaster } from "./components/ui/toaster"
import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App
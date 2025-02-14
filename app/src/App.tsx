import ProductList from "./components/product-list"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ProductList />
      <Toaster />
    </div>
  )
}

export default App
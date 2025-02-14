import { ModeToggle } from "./mode-toggle"
import { Link } from "react-router-dom"
import CartDrawer from "./cart-drawer"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Store</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <CartDrawer />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
import { ModeToggle } from "./mode-toggle"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import { Link } from "react-router-dom"

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items)
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Store</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
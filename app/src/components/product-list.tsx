import { useState } from "react"
import { products } from "@/lib/data/products"
import ProductCard from "./product-card"
import CategoryFilter from "./category-filter"

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="mt-8 text-center text-muted-foreground">
          No products found in this category.
        </div>
      )}
    </div>
  )
}
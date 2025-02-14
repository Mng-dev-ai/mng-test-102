import { categories } from "@/lib/data/categories"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            size="sm"
            className={cn(
              selectedCategory === category.id &&
                "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
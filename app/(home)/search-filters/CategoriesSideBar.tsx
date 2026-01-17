import React from "react";
import { Category } from "../types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoriesSideBarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: Category[];
}
export default function CategoriesSideBar({
  open,
  onOpenChange,
  data,
}: CategoriesSideBarProps) {
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category | null>(null);

  function handleCategorySelect(category: Category) {
    if (category.subCategories && category.subCategories.length > 0) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
      onOpenChange(false);
    }
  }

  function handleCloseSidebar() {
    setSelectedCategory(null);
    onOpenChange(false);
  }

  return (
    <Sheet open={open} onOpenChange={handleCloseSidebar}>
      <SheetContent
        side="left"
        className={cn("p-0 transition-none")}
        style={
          selectedCategory
            ? { backgroundColor: selectedCategory.color }
            : undefined
        }
      >
        <SheetHeader>
          <SheetTitle className="border-b pb-3 -mb-4">Categories</SheetTitle>
        </SheetHeader>
        {/* Categories list will go here */}
        <ScrollArea className="overflow-y-auto h-full">
          {!selectedCategory &&
            data.map((category) => {
              return (
                <div key={category.slug} className="flex items-center mr-9">
                  <button
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer justify-between"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category.name}
                    {category.subCategories &&
                      category.subCategories.length > 0 && (
                        <ChevronRight className="w-4 h-4" aria-hidden />
                      )}
                  </button>
                </div>
              );
            })}

          {selectedCategory && (
            <>
              <div>
                <button
                  className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  <ChevronLeft className="mr-2" />
                  <span>Back</span>
                </button>

                {selectedCategory.subCategories?.map((subCategory) => (
                  <button
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
                    key={subCategory.slug}
                  >
                    <Link href={subCategory.slug} className="w-full">
                      {subCategory.name}
                    </Link>
                  </button>
                ))}
              </div>
            </>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

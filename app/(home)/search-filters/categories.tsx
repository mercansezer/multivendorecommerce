"use client";

import { useEffect, useRef, useState } from "react";
import { Category } from "../types";
import { CategoryDropdown } from "./category-dropdown";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ListFilterIcon } from "lucide-react";
import CategoriesSideBar from "./CategoriesSideBar";

interface Props {
  data: Category[];
}

export const Categories = ({ data }: Props) => {
  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isAnyHovered, setIsAnyHovered] = useState(false);

  const activeCategory = "all";

  const viewAllRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateVisibleItems = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current)
        return;
      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      let totalWidth = 0;
      let visible = 0;

      const items = Array.from(measureRef.current.children);

      for (const item of items) {
        const width = item.getBoundingClientRect().width;
        if (totalWidth + width > availableWidth) break;

        totalWidth += width;
        visible++;
      }
      setVisibleCount(visible);
    };

    calculateVisibleItems();

    const resizeObserver = new ResizeObserver(calculateVisibleItems);

    resizeObserver.observe(containerRef.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data.length]);

  return (
    <div className="relative w-full">
      {/* Categories SideBar*/}
      <CategoriesSideBar
        open={isSideBarOpen}
        onOpenChange={setIsSideBarOpen}
        data={data}
      />

      {/* Invisible measure for dropdown positioning */}
      <div
        className="flex"
        style={{ position: "fixed", left: -9999, top: -9999 }}
        ref={measureRef}
      >
        {data.slice(0, data.length).map((category: Category) => {
          return (
            <div key={category._id}>
              <CategoryDropdown
                category={category}
                isActive={category.slug === activeCategory}
                isNavigationHovered={false}
              />
            </div>
          );
        })}
      </div>

      {/* Actual visible categories */}
      <div
        className="flex items-center"
        ref={containerRef}
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {data.slice(0, visibleCount).map((category: Category) => {
          return (
            <div key={category._id}>
              <CategoryDropdown
                category={category}
                isActive={category.slug === activeCategory}
                isNavigationHovered={isAnyHovered}
              />
            </div>
          );
        })}
        <div className="ml-2" ref={viewAllRef}>
          <Button
            variant="elevated"
            className={cn(
              "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            )}
            onClick={() => setIsSideBarOpen(true)}
          >
            View All
            <ListFilterIcon className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

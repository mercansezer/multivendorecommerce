"use client";
import { Input } from "@/components/ui/input";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { Category } from "../types";
import React from "react";
import { Categories } from "./categories";
import CategoriesSideBar from "./CategoriesSideBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  disabled?: boolean;
  data: Category[];
}
export function SearchInput({ disabled, data }: Props) {
  const [sideBarOpen, setSideBarOpen] = React.useState(true);
  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSideBar
        data={data}
        open={sideBarOpen}
        onOpenChange={setSideBarOpen}
      />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          placeholder="Search products"
          className="pl-10 text-neutral-500"
          disabled={disabled}
        />
      </div>
      <Button
        variant="elevated"
        className={cn("lg:hidden hover:bg-white border-primary  text-black ")}
        onClick={() => setSideBarOpen(true)}
      >
        <ListFilterIcon className="size-4" />
      </Button>
    </div>
  );
}

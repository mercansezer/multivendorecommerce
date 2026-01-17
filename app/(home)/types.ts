export type SubCategory = {
  name: string;
  slug: string;
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  color?: string;
  subCategories?: SubCategory[]; // Burada Category[] yerine SubCategory[] kullan
};

export type CategoryDropdownProps = {
  category: Category;
  isActive: boolean;
  isNavigationHovered: boolean;
};

export type SubCategoryMenuProps = {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
};

import Link from "next/link";

interface Category {
  _id: string;
  name: string;
  color?: string;
  subCategories?: Category[];
}

interface Props {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubCategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subCategories ||
    category.subCategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      style={{ top: position.top, left: position.left }}
      className="z-100 fixed "
    >
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px] "
      >
        {category.subCategories.map((category) => {
          return (
            <Link
              key={category._id}
              href="/"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium "
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

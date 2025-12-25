import { CategoryDropdown } from "./category-dropdown";

interface Props {
  data: any;
}

export const Categories = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex items-center">
        {data.map((category: any) => {
          return (
            <div key={category._id}>
              <CategoryDropdown
                category={category}
                isActive={false}
                isNavigationHovered={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

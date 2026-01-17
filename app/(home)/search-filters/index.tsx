import { Category } from "../types";
import { Categories } from "./categories";
import { SearchInput } from "./search-input";
interface Props {
  data: Category[];
}

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className="border-b px-4 lg:px-12 py-8 flex flex-col gap-4  w-full ">
      <SearchInput data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
};

import { Categories } from "./categories";
import { SearchInput } from "./search-input";
interface Props {
  data: any;
}

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className="border-b px-4 lg:px-12 py-8 flex flex-col gap-4  w-full ">
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};

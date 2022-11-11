import { FiSearch } from "react-icons/fi";

interface Props {
  submint: (e: { preventDefault: () => void }) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const HeaderForm: React.FC<Props> = ({ submint, search, setSearch }) => (
  <form onSubmit={submint}>
    <label htmlFor="search" className="text-sm font-medium sr-only">
      Busca
    </label>

    <div className="relative">
      <div className="absolute bottom-[13px] right-[14.83px]">
        <FiSearch className="text-gray-400" size={19} id="FiSearch" />
      </div>

      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Procurando por algo específico?"
        className="text-sm p-3 pr-8 bg-gray-500 text-black-300 w-80 rounded-lg focus:outline-none focus:shadow"
      />
    </div>
  </form>
);

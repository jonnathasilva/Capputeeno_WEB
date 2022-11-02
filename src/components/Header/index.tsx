import { FiSearch, FiShoppingBag } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-700 font-SairaStencilOne">
          capputeeno
        </h1>

        <div className="flex items-center space-x-6">
          <form>
            <label htmlFor="search" className="text-sm font-medium sr-only ">
              Busca
            </label>

            <div className="relative">
              <div className="absolute bottom-[13px] right-[14.83px]">
                <FiSearch className="text-gray-400" size={19} />
              </div>

              <input
                type="search"
                name="search"
                id="search"
                placeholder="Procurando por algo específico?"
                className="text-sm p-3 pr-8 bg-gray-500 text-black-300 w-80 rounded-lg focus:outline-none focus:shadow"
              />
            </div>
          </form>

          <FiShoppingBag size={24} />
        </div>
      </div>
    </header>
  );
};

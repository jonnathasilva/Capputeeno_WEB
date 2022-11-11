import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderForm } from "@/components";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Header: React.FC<Props> = ({ setCurrentPage }) => {
  const navegate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);

  const submint = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setCurrentPage(0);
    setIsModal(false);
    navegate(`/?q=${search}`);
    setSearch("");
  };

  const modal = (e: MouseEvent) => {
    if (
      (e.target as Element).id !== "search" &&
      (e.target as Element).id !== "FiSearch"
    ) {
      setIsModal(false);
    }
  };

  return (
    <header className="bg-white-500 px-4 md:px-0">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-700 font-SairaStencilOne">
          capputeeno
        </h1>

        <div className="flex items-center space-x-6">
          <div className="hidden md:block">
            <HeaderForm
              submint={submint}
              search={search}
              setSearch={setSearch}
            />
          </div>

          <FiSearch
            className="text-gray-400 block md:hidden"
            size={21}
            onClick={() => setIsModal(true)}
          />

          <FiShoppingBag size={24} />
        </div>
      </div>

      <div
        className={
          isModal
            ? "flex justify-center pt-5 fixed top-0 left-0 h-full w-full backdrop-blur-sm"
            : "hidden"
        }
        onClick={modal}
      >
        <div id="formSearch">
          <HeaderForm submint={submint} search={search} setSearch={setSearch} />
        </div>
      </div>
    </header>
  );
};

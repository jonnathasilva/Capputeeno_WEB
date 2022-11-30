import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useState, MouseEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import { HeaderForm } from "@/components";
import { useCarts } from "@/hooks";

export const Header = () => {
  const navegate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);

  const { data } = useCarts();

  const submint = (e: { preventDefault: () => void }) => {
    e.preventDefault();

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
            data-testid="isModal"
            onClick={() => setIsModal(true)}
          />

          <Link to="/cart" className="relative" data-testid="Link">
            <FiShoppingBag size={24} />

            <span
              className="absolute -bottom-1 -right-2 w-4 h-4 bg-red rounded-full text-center text-xs text-white-500"
              data-testid="cartVelue"
            >
              {data?.product.length === 0 ? "0" : data?.product.length}
            </span>
          </Link>
        </div>
      </div>

      <div
        className={
          isModal
            ? "flex justify-center pt-5 fixed top-0 left-0 h-full w-full backdrop-blur-sm"
            : "hidden"
        }
        data-testid="modal"
        onClick={modal}
      >
        <div id="formSearch">
          <HeaderForm submint={submint} search={search} setSearch={setSearch} />
        </div>
      </div>
    </header>
  );
};

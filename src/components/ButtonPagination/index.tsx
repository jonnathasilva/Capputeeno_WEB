import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

interface Props {
  page: number | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ButtonPagination = ({ page, setCurrentPage }: Props) => {
  const [searchParams] = useSearchParams();
  const navegate = useNavigate();

  const onPagination = (e: { currentTarget: { value: string } }) => {
    setCurrentPage(Number(e.currentTarget.value));

    if (!searchParams.get("q")) {
      return navegate(`/?page=${e.currentTarget.value}`);
    }

    navegate(`/?page=${e.currentTarget.value}&q=${searchParams.get("q")}`);
  };

  return (
    <div className="space-x-1 flex justify-end">
      {Array.from(Array(page), (item, index): JSX.Element => {
        return (
          <button
            value={index}
            key={index}
            onClick={onPagination}
            className="w-6 h-6 bg-gray-300 text-gray-400 rounded-lg"
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface Props {
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ButtonPagination = ({ page, setCurrentPage }: Props) => (
  <div className="space-x-2 flex items-end">
    <div className="space-x-1">
      {Array.from(Array(page), (item, index): JSX.Element => {
        return (
          <button
            value={index}
            key={index}
            onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}
            className="w-6 h-6 bg-gray-300 text-gray-400 rounded-lg"
          >
            {index + 1}
          </button>
        );
      })}
    </div>

    <button
      onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}
      className="w-6 h-6 bg-gray-300 text-gray-400 rounded-lg inline-flex justify-center items-center"
    >
      <AiOutlineLeft size={15} />
    </button>

    <button
      onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}
      className="w-6 h-6 bg-gray-300 text-gray-400 rounded-lg inline-flex justify-center items-center"
    >
      <AiOutlineRight size={15} />
    </button>
  </div>
);

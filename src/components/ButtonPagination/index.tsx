interface Props {
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ButtonPagination = ({ page, setCurrentPage }: Props) => (
  <div className="space-x-1 flex justify-end">
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
);

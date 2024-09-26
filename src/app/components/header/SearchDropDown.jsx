const SearchDropDown = ({ filterSearch, setIsOpen, handleSelect }) => {
  const handleClickLink = (city) => {
    handleSelect(city); // 選択された都市名をセット
    setIsOpen(false); // ドロップダウンを閉じる
  };

  return (
    <div
      className={`${
        filterSearch.length > 0 ? "flex" : "hidden"
      } flex-col gap-2 bg-[#F4F4F5] p-2 overflow-hidden rounded-b-lg w-[229px] duration-200`}
    >
      {filterSearch.length > 0 ? (
        filterSearch.slice(0, 3).map((property) => (
          <div
            key={property.id}
            onClick={() => handleClickLink(property.City)} 
            className="flex flex-col hover:bg-gray-300 duration-200 border-b-2 border-gray-300 bg-red-500"
          >
            {property.City}
          </div>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchDropDown;

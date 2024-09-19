"use client";

import { useEffect, useState } from "react";
import SearchDropDown from "./SearchDropDown";
import data from "../../mock/us-property-listings-100.json";

const SearchOutSide = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataForSearch, setDataForSearch] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (window !== "undefined") {
      const handleMouseUp = () => {
        setIsOpen(false);
      };
      document.body.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.body.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  const filterSearch = dataForSearch.filter((property) =>
    property.City.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filterDataForSearch = () => {
    setDataForSearch(data.properties);
  };

  const handleRemove = () => {
    setSearchValue("");
  };

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSearchValue(selectedValue);
  };

  useEffect(() => {
    filterDataForSearch();
  }, []);

  return (
    <div className="container m-auto px-3">
      <label className="input input-bordered flex items-center gap-2">
        <select
          className="select select-bordered w-[100px] max-w-xs"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="rent">Rent</option>
          <option value="sell">Sell</option>
        </select>
        {searchValue && (
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-lg mr-1">
            {filterSearch.slice(0, 3).map((property) => (
              <span key={property.id}>{property.City}</span>
            ))}
            <div
              className="ml-2 cursor-pointer text-gray-500"
              onClick={handleRemove}
            >
              &times;
            </div>
          </div>
        )}
        <input
          onChange={handleInputChange}
          type="search"
          placeholder="Search"
          className="text-black pl-3 bg-[#F4F4F5]"
        />{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 17"
          fill="currentColor"
          className="h-[48px] w-[48px] opacity-70 bg-[#3b62e1] rounded-r-lg text-white"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {isOpen && (
        <SearchDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSearchValue={setSearchValue}
          filterSearch={filterSearch}
        />
      )}
    </div>
  );
};

export default SearchOutSide;

//   const [selectedOption, setSelectedOption] = useState('rent');

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedOption} onChange={handleSelectChange}>
//         <option value="rent">Rent</option>
//         <option value="sell">Sell</option>
//       </select>
//       <p>You selected: {selectedOption}</p>
//     </div>
//   );
// }

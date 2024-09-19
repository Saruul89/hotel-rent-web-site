"use client";
import { useEffect, useState } from "react";
import data from "../../mock/us-property-listings-100.json";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleRemove = () => {
    setSearchValue("");
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setSearchValue();
  }, []);

  return (
    <div className="container m-auto px-3">
      <label className="input input-bordered flex items-center gap-2">
        <select className="select select-bordered w-[100px] max-w-xs">
          <option disabled selected>
            select
          </option>
          <option>Stay</option>
          <option>Rent</option>
        </select>
        {searchValue && (
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-lg mr-1">
            {searchValue}
            <div
              className="ml-2 cursor-pointer text-gray-500 border rounded-[50%]"
              onClick={handleRemove}
            ></div>
          </div>
        )}
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchValue}
          onChange={onChange}
        />
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
    </div>
  );
};

export default Search;

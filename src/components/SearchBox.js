import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigation = useNavigate();

  // context variables
  const { setSearch } = useContext(ApiContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value.toLowerCase());
    e.target.search.value = "";
    navigation("/search");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 p-1 border border-white rounded text-primary-dark"
    >
      <input
        className="text-xs text-white focus:outline-none"
        name="search"
        type="text"
        required
      />
      <button type="submit">
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBox;

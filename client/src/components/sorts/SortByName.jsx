//import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortCountryByName } from "../../redux/actions";

export default function SortByName({ setOrder }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(sortCountryByName(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handleChange(e)}>
          <option value="all" key="all">
            Sort By Name
          </option>
          <option value="asc" key="asc">
            A - Z
          </option>
          <option value="desc" key="desc">
            Z - A
          </option>
        </select>
      </div>
    </div>
  );
}

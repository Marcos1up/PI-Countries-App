import React from "react";
import { useDispatch } from "react-redux";
import { sortByPopulation } from "../../redux/actions";

export default function SortByPopulation({ setOrder }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(sortByPopulation(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handleChange(e)}>
          <option value="all" key="all">
            Sort By Population
          </option>
          <option value="Low" key="low">
            Menor a mayor
          </option>
          <option value="High" key="high">
            Mayor a menor
          </option>
        </select>
      </div>
    </div>
  );
}

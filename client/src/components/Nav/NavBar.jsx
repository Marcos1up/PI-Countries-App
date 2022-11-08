import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
//import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

let Navbar = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountry(name));
    setName("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div id={styles.navbar}>
      <nav>
        <div className={styles.container}>
          <ul>
            <li>
              <a href="/">Welcome</a>
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/activity">Activity</a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <input
          value={name}
          id="search"
          type="search"
          placeholder="Search Country..."
          onChange={(e) => {
            handleSearch(e);
          }}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Home/home.module.css";

import { getAllCountries } from "../../redux/actions";
import SortByName from "../sorts/SortByName";
import SortByPopulation from "../sorts/SortByPopulation";
import { Link } from "react-router-dom";
import Card from "../CountryCard/Card";

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  let handleReload = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  return (
    <section id={styles.showcase}>
      <div>
        <div>
          <h6>div de los filtrados</h6>
          <button
            className={styles.reloadBtn}
            onClick={(e) => {
              handleReload(e);
            }}
          >
            RELOAD COUNTRIES
          </button>
          <div>
            <SortByName setOrder={setOrder} />
          </div>
          <div>
            <SortByPopulation setOrder={setOrder} />
          </div>
        </div>
        {countries &&
          countries.map((e) => {
            return (
              <div className={styles.card_wrapper} key={e.id}>
                <Link to={"/countries/" + e.id}>
                  <Card
                    flag={e.flag}
                    name={e.name}
                    id={e.id}
                    continent={e.continent}
                    key={e.id}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Home;

/* 
  id: el.cca3,
  name: el.name.common,
  flag: el.flags[1],
  continent: el.region,
  subregion: el.subregion,
  capital: el.capital ? el.capital : "Capital no encontrada",
  population: el.population,
  area: el.area, 
        */

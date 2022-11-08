import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, reSetCountryDetails } from "../../redux/actions";
import Navbar from "../Nav/NavBar";
import styles from "./countrydetails.module.css";

export default function CountryDetails(props) {
  const myCountry = useSelector((state) => state.countryById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryById(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    return () => {
      dispatch(reSetCountryDetails());
    };
  }, [dispatch]);

  return (
    <section id={styles.showcase}>
      <div>
        <Navbar />
      </div>
      <div className={styles.card_details_wrapper}>
        <img
          className={styles.card_details_img}
          src={myCountry.flag}
          alt="Flag noyt found"
          width="300px"
          height="200px"
        ></img>
        {myCountry ? (
          <div className={styles.card_details}>
            <div className={styles.card_details_name}>
              Country: {myCountry.name}
            </div>
            <p className={styles.card_details_p}>Country ID: {myCountry.id}</p>
            <p className={styles.card_details_p}>
              Continent: {myCountry.continent}
            </p>
            <p className={styles.card_details_p}>
              Region: {myCountry.subregion}
            </p>
            <p className={styles.card_details_p}>
              Capital: {myCountry.capital}
            </p>
            <p className={styles.card_details_p}>Area km2: {myCountry.area}</p>
            <p className={styles.card_details_p}>
              Population: {myCountry.population}
            </p>
            <div className={styles.activity_title}> Tourist Activities: </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}

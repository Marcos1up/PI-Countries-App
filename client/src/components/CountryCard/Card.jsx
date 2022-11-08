import React from "react";
import { Link } from "react-router-dom";
import styles from "./cards.module.css";

export default function Card({ flag, name, id, continent }) {
  if (flag && name && id && continent) {
    return (
      <div className={styles.card}>
        <img
          className={styles.card__image}
          src={flag}
          alt="Bandera no encontrada"
        ></img>
        <div /* class={styles.details} */>
          <Link to={`/countries/${id}`}> {name} </Link>
          <p>{continent}</p>
        </div>
      </div>
    );
  } else {
    return (
      <h1>No se encontró un país con ese nombre</h1>
    )
  }
}

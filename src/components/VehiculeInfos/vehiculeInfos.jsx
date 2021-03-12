import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";

import style from "../../css/main.module.css";

import styles from "./vehiculeInfos.module.css";

function VehiculeInfos() {
  const { setHeader } = useContext(HeaderContext);
  const [car, setCar] = useState({
    marque: "",
    modele: "",
    energie: "",
    transmission: "",
    puissance: "",
    type: "",
    version: "",
    génération: "",
    nbPortes: "",
    kilometrage: 0,
  });

  useEffect(() => {
    setHeader({ path: "/financing", title: "Voiture actuelle" });
  }, [setHeader]);

  const HandleCar = (e) => {
    if (e.target.type === "number") {
      setCar({ ...car, [e.target.name]: parseInt(e.target.value) });
    } else {
      setCar({...car, [e.target.name]: e.target.value })
    }
  };

  return (
    <div className={styles.vi_wrapper}>
      <p>Détails de mon véhicule</p>

      <form className={styles.vi_form_wrapper}>
        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Marque</option>
          <option>Peugeot</option>
        </select>

        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Modèle</option>
          <option>2008</option>
        </select>

        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Énergie</option>
          <option>2008</option>
        </select>

        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Transmission</option>
          <option>2008</option>
        </select>

        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Puissance</option>
          <option>2008</option>
        </select>

        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Type</option>
          <option>2008</option>
        </select>

        <select onChange={(e) => HandleCar(e)}>
          <option value="UNKNOWN">Génération</option>
          <option>2008</option>
        </select>

        <div className={styles.vi_field_wrapper}>
          <label htmlFor="nbPortes">
            <input
              type="number"
              name="nbPortes"
              key="nbPortes"
              placeholder="0"
              value={car?.nbPortes}
              onChange={(e) => HandleCar(e)}
            />

            {/* je vérifie que la valeur du nombre de porte du vehicule est cohérante sinon j'affiche un message d'erreur */}

            <span className={car?.nbPortes > 5 ? style.error : style.match}>
              {car?.nbPortes > 5 ? "nombre de portes non valable" : ""}
            </span>
          </label>
          <div className={styles.vi_placeholder}>Nombre de portes</div>
        </div>

        <div className={styles.vi_field_wrapper}>
          <label htmlFor="kilométrage">
            <input
              type="number"
              name="kilométrage"
              key="kilométrage"
              placeholder="0"
              onChange={(e) => HandleCar(e)}
              value={car?.kilometrage}
            />
          </label>
          <div className={styles.vi_placeholder}>Kilométrage du véhicule</div>
        </div>
      </form>
      <Link to="/domiciliation">
        <button
          className={car ? style.btn_visible : style.btn_hidden}
          disabled={car ? false : true}
          type="button"
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default VehiculeInfos;

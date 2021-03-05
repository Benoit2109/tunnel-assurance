import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";

import style from "../../css/main.module.css";

import styles from "./vehiculeInfos.module.css";

function VehiculeInfos() {
  const {setHeader} = useContext(HeaderContext);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  useEffect(()=>{
    setHeader({ path:"/vehicule-condition", title:"Information du véhicule"});
  },[setHeader])

  const HandleBrand = (e) => {
    setBrand(e.target.value);
  };

  const HandleModel = (e) => {
    setModel(e.target.value);
  };
  return (
    <div className={styles.vi_wrapper}>
      <p>Détails de mon véhicule</p>
      <form className={styles.vi_form_wrapper}>
        <select onChange={(e) => HandleBrand(e)} value={brand}>
          <option>Marque</option>
          <option>Peugeot</option>
        </select>
        <select onChange={(e) => HandleModel(e)} value={model}>
          <option>Modèle</option>
          <option>2008</option>
        </select>
      </form>
      <Link to="#">
        <button
          className={brand && model ? style.btn_visible : style.btn_hidden}
          disabled={brand && model ? false : true}
          type="button"
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default VehiculeInfos;

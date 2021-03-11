import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import style from "../../css/main.module.css";
import styles from "./ActualVehicule.module.css";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";

function ActualVehicule() {
  const { setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);
  const [immat, setImmat] = useState("");
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
    setHeader({ path: "/owned-car", title: "Voiture actuelle" });
  }, [setHeader]);
  const Token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTQ2OTQ5NTYsInJvbGUiOiJbXCJBZG1pbmlzdHJhdG9yc1wiLFwiUmVnaXN0ZXJlZCBVc2Vyc1wiLFwiU3Vic2NyaWJlcnNcIl0iLCJuYW1laWQiOiI1MDQiLCJ1bmlxdWVfbmFtZSI6Imp1bGllbiB0ZXN0IiwibmJmIjoxNjE0NjA4NTU2LCJpc3MiOiJodHRwczovL3Rlc3RhcGkuZ29vZC1hbmdlbC5mci8iLCJhdWQiOiJodHRwczovL3Rlc3RhcGkuZ29vZC1hbmdlbC5mci8ifQ.FGdwGt2p6aXEGWEb0RMnunqu9CGQR1vIZNFxRSBHniQ`;

  const fetchImmat = (event) => {
    if (immat.length === 9) {
      event.preventDefault();
      axios
        .get(
          `https://testdriving.good-angel.fr/api/Insurance/VehiculeInfo/${immat}`,
          { headers: { Authorization: `Bearer ${Token}` } }
        )
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          setCar({
            marque: res.marque,
            modele: res.modele,
            energie: res.energie,
            transmission: res.tpBoiteVit,
            puissance: res.puisFisc,
            type: res.type,
            version: res.version,
            génération: "",
            nbPortes: "",
            kilometrage:"",
          });
          setProposition({
            ...proposition,
            vehicle: { ...proposition.vehicle, price: parseInt(res.prixVehic) },
          });
        });
    } else {
      console.error("plaque non reconnue");
    }
  };

  const handleImmat = (e) => {
    setImmat(e.target.value);
  };

  const handlePortes = (e) => {
    setCar({ ...car, [e.target.name]: parseInt(e.target.value) });
  };

  const handlekilo = (e) => {
    setProposition({
      ...proposition,
      vehicle: { ...proposition.vehicle, kmTraveled: parseInt(e.target.value) },
    });
    setCar({ ...car, kilometrage: parseInt(e.target.value) });
  };

  return (
    <div className={styles.av_wrapper}>
      <div className={styles.av_fecthimmat}>
        <p>Votre plaque d'immatriculation</p>
        <form className={styles.av_fetchCar_wrapper}>
          <label htmlFor="immat">
            <input
              type="text"
              key="immat"
              name="immat"
              value={immat}
              pattern="[A-Za-z]{2}-[0-9]{3}-[A-Za-z]{2}"
              title="veuillez respecter le format de plaque d'immatriculation"
              placeholder="AB-123-CD"
              onChange={(e) => handleImmat(e)}
            />
            <span className={immat.length < 9 ? style.match : immat.match("[A-Za-z]{2}-[0-9]{3}-[A-Za-z]{2}")? style.match : style.error}>{immat.match("[A-Za-z]{2}-[0-9]{3}-[A-Za-z]{2}")? "": "veuillez respecter le format d'immatriculation"}</span>
          </label>

          <button
            className={
              immat.match("[A-Za-z]{2}-[0-9]{3}-[A-Za-z]{2}") ? style.btn_visible : style.btn_hidden
            }
            onClick={(e) => fetchImmat(e)}
          >
            Rechercher
          </button>
        </form>
      </div>

      <div
        className={
          car?.modele?.length !== 0
            ? styles.av_carInfos_contener
            : styles.av_hidden
        }
      >
        <form className={styles.av_carInfos_form_wrapper}>
          <label htmlFor="brand">
            <select name="brand" key="brand">
              <option value="Marque">
                {car.marque && car.marque.length > 0 ? car.marque : "Marque"}
              </option>
            </select>
          </label>

          <label htmlFor="model">
            <select name="model" key="model">
              <option value="model">
                {car.modele && car.modele.length > 0 ? car.modele : "Modèle"}
              </option>
            </select>
          </label>

          <label htmlFor="energie">
            <select name="energie" key="energie">
              <option value="energie">
                {car.energie && car.energie.length > 0
                  ? car.energie
                  : "Énergie"}
              </option>
            </select>
          </label>

          <label htmlFor="transmission">
            <select name="transmission" key="transmission">
              <option value="transmission">
                {car.transmission && car.transmission.length > 0
                  ? car.transmission
                  : "Transmission"}
              </option>
            </select>
          </label>

          <label htmlFor="puissance">
            <select name="puissance" key="puissance">
              <option value="puissance">
                {car.puissance && car.puissance.length > 0
                  ? car.puissance
                  : "Puissance"}
              </option>
            </select>
          </label>

          <label htmlFor="type">
            <select name="type" key="type">
              <option value="type">
                {car.type && car.type.length > 0 ? car.type : "Type"}
              </option>
            </select>
          </label>

          <label htmlFor="generation">
            <select name="generation" key="generation">
              <option value="generation">
                {car.generation && car.generation.length > 0
                  ? car.generation
                  : "Génération"}
              </option>
            </select>
          </label>

          <div className={styles.av_field_wrapper}>
            <label htmlFor="nbPortes">
              <input
                type="number"
                name="nbPortes"
                key="nbPortes"
                placeholder="0"
                value={car?.nbPortes}
                onChange={(e) => handlePortes(e)}
              />
              <span className={car?.nbPortes > 5 ? style.error : style.match}>{car?.nbPortes > 5 ? "nombre de portes non valable" : ""}</span>
            </label>
            <div className={styles.av_placeholder}>Nombre de portes</div>
          </div>

          <div className={styles.av_field_wrapper}>
            <label htmlFor="kilométrage">
              <input
                type="number"
                name="kilométrage"
                key="kilométrage"
                placeholder="0"
                onChange={(e) => handlekilo(e)}
                value={car.kilometrage}
              />
            </label>
            <div className={styles.av_placeholder}>Kilométrage du véhicule</div>
          </div>
        </form>

        <Link to="/domiciliation">
          <button className={proposition?.vehicle?.price && car?.kilometrage? style.btn_visible: style.btn_hidden}>Étape suivante</button>
        </Link>
      </div>
    </div>
  );
}

export default ActualVehicule;

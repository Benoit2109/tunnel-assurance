import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import style from "../../css/main.module.css";
import styles from "./ActualVehicule.module.css";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";

function ActualVehicule() {
  const {setHeader} = useContext(HeaderContext);
  const { proposition, setProposition} = useContext(PropositionContext);
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
    kilometrage: "",
  });

  useEffect(()=>{
    setHeader({ path:"/owned-car", title:"Voiture actuelle"});
  },[setHeader])
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
            nbPortes: res.nbPortes,
          });
          setProposition({...proposition, vehicle:{...proposition.vehicle, price: res.prixVehic}})
        });
    } else {
      console.error("plaque non reconnue");
    }
  };

  const handleImmat = (e) => {
    setImmat(e.target.value);
  };

  const handlekilo = (e) => {
    setProposition({ ...proposition, vehicle:{...proposition.vehicle, kmTraveled: e.target.value }});
  };

  return (
    <div className={styles.av_wrapper}>
      <div className={styles.av_fecthimmat}>
        <p>Votre plaque d'immatriculation</p>
        <form className={styles.av_fetchCar_wrapper}>
          <label htmlFor="immat">
            <input
              type="text"
              id="immat"
              name="immat"
              value={immat}
              placeholder="AB-123-CD"
              onChange={(e) => handleImmat(e)}
            />
          </label>

          <button
            className={
              immat.length === 9 ? style.btn_visible : style.btn_hidden
            }
            onClick={(e) => fetchImmat(e)}
          >
            Rechercher
          </button>
        </form>
      </div>

      <div
        className={
          car.modele.length !== 0
            ? styles.av_carInfos_contener
            : styles.av_hidden
        }
      >
        <form className={styles.av_carInfos_form_wrapper}>
          <label htmlFor="brand">
            <select name="brand" id="brand">
              <option value="Marque">
                {car.marque && car.marque.length > 0 ? car.marque : "Marque"}
              </option>
            </select>
          </label>

          <label htmlFor="model">
            <select name="model" id="model">
              <option value="model">
                {car.modele && car.modele.length > 0 ? car.modele : "Modèle"}
              </option>
            </select>
          </label>

          <label htmlFor="energie">
            <select name="energie" id="energie">
              <option value="energie">
                {car.energie && car.energie.length > 0
                  ? car.energie
                  : "Énergie"}
              </option>
            </select>
          </label>

          <label htmlFor="transmission">
            <select name="transmission" id="transmission">
              <option value="transmission">
                {car.transmission && car.transmission.length > 0
                  ? car.transmission
                  : "Transmission"}
              </option>
            </select>
          </label>

          <label htmlFor="puissance">
            <select name="puissance" id="puissance">
              <option value="puissance">
                {car.puissance && car.puissance.length > 0
                  ? car.puissance
                  : "Puissance"}
              </option>
            </select>
          </label>

          <label htmlFor="type">
            <select name="type" id="type">
              <option value="type">
                {car.type && car.type.length > 0 ? car.type : "Type"}
              </option>
            </select>
          </label>

          <label htmlFor="generation">
            <select name="generation" id="generation">
              <option value="generation">
                {car.generation && car.generation.length > 0
                  ? car.generation
                  : "Génération"}
              </option>
            </select>
          </label>

          <div className={styles.av_field_wrapper}>
            <label htmlFor="nb de porte">
              <input
                type="text"
                name="nb de porte"
                id="nb de porte"
                placeholder="0"
                value={car.nbPortes}
              />
            </label>
            <div className={styles.av_placeholder}>Nombre de portes</div>
          </div>

          <div className={styles.av_field_wrapper}>
            <label htmlFor="kilométrage">
              <input
                type="text"
                name="kilométrage"
                id="kilométrage"
                placeholder="0"
                onChange={(e) => handlekilo(e)}
                value={car.kilometrage}
              />
            </label>
            <div className={styles.av_placeholder}>Kilométrage du véhicule</div>
          </div>
        </form>

        <Link to="/domiciliation"><button className={style.btn_visible}>Étape suivante</button></Link>
      </div>
    </div>
  );
}

export default ActualVehicule;

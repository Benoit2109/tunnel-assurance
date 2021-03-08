import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { jourPlus2, ojd, apiDate } from "../commons/convertDate";

import style from "../../css/main.module.css";
import styles from "./ownedCar.module.css";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";


function OwnedCar() {
  const { proposition, setProposition } = useContext(PropositionContext);
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader({
      path: "/vehicule-condition",
      title: "Information du véhicule",
    });
  }, [setHeader]);

  const HandleVehicle = (e) => {
    setProposition({
      ...proposition,
      vehicle: { ...proposition.vehicle, [e.target.name]: e.target.value },
    });
  };

  const HandleBool = (choice) => {
    setProposition({
      ...proposition,
      vehicle: {
        ...proposition.vehicle,
        hasVehiculeInsuranceSinceGetting: choice,
      },
    });
  };

  const HandleDate = (e) => {
    setProposition({
      ...proposition,
      vehicle: { ...proposition.vehicle, [e.target.name]: apiDate(e.target.value) },
    });
  };

  const HandleDesiredEffect = (e) => {
    setProposition({ ...proposition, [e.target.name]: apiDate(e.target.value) });
  };

  return (
    <div className={styles.owned_wrapper}>
      <form className={styles.owned_form_wrapper}>
        <div className={styles.owned_field_wrapper}>
          <label htmlFor="release">
            <input
              type="date"
              id="release"
              name="release"
              max={ojd}
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              title="veuillez respecter le format de saisie de la date"
              onChange={(e) => HandleDate(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>
            Première mise en circulation
          </div>
        </div>

        <div className={styles.owned_field_wrapper}>
          <label htmlFor="getting">
            <input
              type="date"
              id="getting"
              name="getting"
              max={ojd}
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              title="veuillez respecter le format de saisie de la date"
              onChange={(e) => HandleDate(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>Date d'achat</div>
        </div>

        <div className={styles.owned_field_wrapper}>
          <label htmlFor="fundingMode">
            <select
              name="fundingMode"
              id="fundingMode"
              value={proposition?.vehicle.fundingMode}
              placeholder="Mode de financement"
              onChange={(e) => HandleVehicle(e)}
            >
              <option value="UNKNOWN">Mode de financement</option>
              <option value="CASH">Comptant</option>
              <option value="CREDIT">Crédit</option>
              <option value="LOA">LOA</option>
              <option value="LDD">LDD</option>
            </select>
          </label>
        </div>

        <div className={styles.owned_field_wrapper}>
          <p>Véhicule actuellement assuré ?</p>
          <div className={styles.owned_field_check_contener}>
            <div className={styles.owned_field_check_wrapper}>
              <p>Oui</p>
              <div
                className={
                  proposition?.vehicle?.hasVehiculeInsuranceSinceGetting ===
                  true
                    ? style.checkbox
                    : style.checkbox_off
                }
                onClick={() => HandleBool(true)}
              />
            </div>
            <div className={styles.owned_field_check_wrapper}>
              <p>Non</p>
              <div
                className={
                  proposition?.vehicle?.hasVehiculeInsuranceSinceGetting ===
                  false
                    ? style.checkbox
                    : style.checkbox_off
                }
                onClick={() => HandleBool(false)}
              />
            </div>
          </div>
        </div>

        <div
          className={
            proposition?.vehicle?.hasVehiculeInsuranceSinceGetting === false
              ? styles.owned_field_wrapper
              : styles.owned_field_hidden
          }
        >
          <label htmlFor="endOfInsurance">
            <input
              type="date"
              id="endOfInsurance"
              name="endOfInsurance"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              title="veuillez respecter le format de saisie de la date"
              onChange={(e) => HandleDate(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>Date d'interruption</div>
        </div>

        <div className={styles.owned_field_wrapper}>
          <label htmlFor="desiredEffect">
            <input
              type="date"
              id="desiredEffect"
              name="desiredEffect"
              min={jourPlus2}
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              title="veuillez respecter le format de saisie de la date"
              onChange={(e) => HandleDesiredEffect(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>
            Date de début souhaitée
          </div>
        </div>
      </form>
      <Link to="/actual-vehicule">
        <button
          className={
            proposition?.vehicle?.release &&
            proposition?.vehicle?.fundingMode &&
            proposition?.vehicle?.getting &&
            proposition?.vehicle?.hasVehiculeInsuranceSinceGetting &&
            proposition.desiredEffect
              ? style.btn_visible
              : style.btn_hidden
          }
          type="button"
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default OwnedCar;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jourPlus2, ojd } from "../commons/convertDate";

import style from "../../css/main.module.css";
import styles from "./ownedCar.module.css";
import { HeaderContext } from "../../Contexts/headerContext";

function OwnedCar() {
  const { setHeader } = useContext(HeaderContext);
  const [firstDate, setFirstDate] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finance, setFinance] = useState("");
  const [interrupt, setInterrupt] = useState("");
  const [stopDate, setStopDate] = useState("");

  useEffect(() => {
    setHeader({
      path: "/vehicule-condition",
      title: "Information du véhicule",
    });
  }, [setHeader]);

  const HandleFirst = (e) => {
    setFirstDate(e.target.value);
  };

  const HandleStart = (e) => {
    setStartDate(e.target.value);
  };

  const HandleStop = (e) => {
    setStopDate(e.target.value);
  };

  const HandleBuy = (e) => {
    setBuyDate(e.target.value);
  };

  const HandleFinance = (e) => {
    setFinance(e.target.value);
  };

  const HandleInterrupt = (choice) => {
    setInterrupt(choice);
  };

  return (
    <div className={styles.owned_wrapper}>
      <form className={styles.owned_form_wrapper}>
        <div className={styles.owned_field_wrapper}>
          <label htmlFor="first-date">
            <input
              type="date"
              id="first-date"
              name="first-date"
              value={firstDate}
              max={ojd}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => HandleFirst(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>
            Première mise en circulation
          </div>
        </div>

        <div className={styles.owned_field_wrapper}>
          <label htmlFor="buy-date">
            <input
              type="date"
              id="buy-date"
              name="buy-date"
              value={buyDate}
              max={ojd}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => HandleBuy(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>Date d'achat</div>
        </div>

        <div className={styles.owned_field_wrapper}>
          <label htmlFor="pay-type">
            <select
              name="pay-type"
              id="pay-type"
              value={finance}
              placeholder="Mode de financement"
              onChange={(e) => HandleFinance(e)}
            >
              <option>Mode de financement</option>
              <option>Comptant</option>
              <option>Crédit</option>
              <option>LOA</option>
              <option>LDD</option>
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
                  interrupt === true ? style.checkbox : style.checkbox_off
                }
                onClick={() => HandleInterrupt(true)}
              />
            </div>
            <div className={styles.owned_field_check_wrapper}>
              <p>Non</p>
              <div
                className={
                  interrupt === false ? style.checkbox : style.checkbox_off
                }
                onClick={() => HandleInterrupt(false)}
              />
            </div>
          </div>
        </div>

        <div
          className={
            interrupt === "non"
              ? styles.owned_field_wrapper
              : styles.owned_field_hidden
          }
        >
          <label htmlFor="stop-date">
            <input
              type="date"
              id="stop-date"
              name="stop-date"
              value={stopDate}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => HandleStop(e)}
            />
          </label>
          <div className={styles.owned_placeholder}>Date d'interruption</div>
        </div>

        <div className={styles.owned_field_wrapper}>
          <label htmlFor="start-date">
            <input
              type="date"
              id="start-date"
              name="start-date"
              value={startDate}
              min={jourPlus2}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => HandleStart(e)}
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
            firstDate && finance && startDate && buyDate && interrupt
              ? style.btn_visible
              : style.btn_hidden
          }
          disabled={firstDate && finance && startDate ? false : true}
          type="button"
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default OwnedCar;

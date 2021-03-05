import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jourPlus2 } from "../commons/convertDate";

import styles from "./financing.module.css";
import style from "../../css/main.module.css";
import { HeaderContext } from "../../Contexts/headerContext";


function Financing() {
  const {setHeader} = useContext(HeaderContext);
  const [buyDate, setBuyDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finance, setFinance] = useState("");

  useEffect(()=>{
    setHeader({path:"/vehicule-condition", title:"Financement"})
  },[setHeader])

  const HandleBuy = (e) => {
    setBuyDate(e.target.value);
  };

  const HandleStart = (e) => {
    setStartDate(e.target.value);
  };

  const HandleFinance = (e) => {
    setFinance(e.target.value);
  };

  
  return (
    <div className={styles.finance_wrapper}>
      <form className={styles.finance_form_wrapper}>
        <div className={styles.finance_field_wrapper}>
          <label htmlFor="buy-date">
            <input
              type="date"
              id="buy-date"
              name="buy-date"
              value={buyDate}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => HandleBuy(e)}
            />
          </label>
          <div className={styles.finance_placeholder}>Date d'achat</div>
        </div>

        <div className={styles.finance_field_wrapper}>
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

        <div className={styles.finance_field_wrapper}>
          <label htmlFor="start-date">
            <input
              type="date"
              id="start-date"
              name="start-date"
              min={jourPlus2}
              value={startDate}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => HandleStart(e)}
            />
          </label>
          <div className={styles.finance_placeholder}>
            Date de début souhaitée
          </div>
        </div>
      </form>
      <Link to="/select-vehicule">
        <button
          className={
            buyDate && finance && startDate
              ? style.btn_visible
              : style.btn_hidden
          }
          disabled={buyDate && finance && startDate ? false : true}
          type="button"
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default Financing;

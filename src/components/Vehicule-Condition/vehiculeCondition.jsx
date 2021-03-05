import React, { useContext, useEffect, useState } from "react";
import style from "../../css/main.module.css";
import styles from "./vehiculeCondition.module.css";
import { Link } from "react-router-dom";

import voiture from "../../assets/images/documents_car.png";
import billet from "../../assets/images/billets_volants_insurance.png";
import check from "../../assets/images/checkmark.png";
import { HeaderContext } from "../../Contexts/headerContext";

function VehiculeCondition() {
  const { setHeader } = useContext(HeaderContext);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setHeader({ title: "Assurance", path: "/rbs" });
  }, [setHeader]);

  const onClick = (choice) => {
    setSelected(choice);
  };

  return (
    <div className={styles.vc_wrapper}>
      <p>
        Roulez tranquille en seulement <span>3 étapes</span>
      </p>
      <div className={styles.vc_card_contener}>
        <div
          className={styles.vc_card_template}
          onClick={() => onClick("choice1")}
        >
          <p
            className={
              selected === "choice1" ? styles.vc_p_selected : styles.vc_p
            }
          >
            J'assure un véhicule que je possède
          </p>
          <img src={voiture} alt="voiture" />
        </div>
        <img
          className={
            selected === "choice1" ? styles.vc_check_on : styles.vc_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.vc_card_contener}>
        <div
          className={styles.vc_card_template}
          onClick={() => onClick("choice2")}
        >
          <p
            className={
              selected === "choice2" ? styles.vc_p_selected : styles.vc_p
            }
          >
            J'assure un véhicule neuf
          </p>
          <img src={billet} alt="billet" />
        </div>
        <img
          className={
            selected === "choice2" ? styles.vc_check_on : styles.vc_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.vc_card_contener}>
        <div
          className={styles.vc_card_template}
          onClick={() => onClick("choice3")}
        >
          <p
            className={
              selected === "choice3" ? styles.vc_p_selected : styles.vc_p
            }
          >
            J'assure un véhicule d'occasion
          </p>
          <img src={billet} alt="billet" />
        </div>
        <img
          className={
            selected === "choice3" ? styles.vc_check_on : styles.vc_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <Link to={selected === "choice1" ? "/owned-car" : "/financing"}>
        <button
          className={selected ? style.btn_visible : style.btn_hidden}
          disabled={selected ? false : true}
          type="button"
        >
          Je m'assure en 3 étapes
        </button>
      </Link>
    </div>
  );
}

export default VehiculeCondition;

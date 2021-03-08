import React, { useContext, useEffect } from "react";
import style from "../../css/main.module.css";
import styles from "./vehiculeCondition.module.css";
import { Link } from "react-router-dom";

import voiture from "../../assets/images/documents_car.png";
import billet from "../../assets/images/billets_volants_insurance.png";
import check from "../../assets/images/checkmark.png";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";

function VehiculeCondition() {
  const { setHeader } = useContext(HeaderContext);
  const {proposition, setProposition} = useContext(PropositionContext);
  

  useEffect(() => {
    setHeader({ title: "Assurance", path: "/rbs" });
    
  }, []);

  const onClick = (choice) => {
    
    setProposition({...proposition , vehicle:{...proposition.vehicle, gettingMode: choice}});
  };

  return (
    <div className={styles.vc_wrapper}>
      <p>
        Roulez tranquille en seulement <span>3 étapes</span>
      </p>
      <div className={styles.vc_card_contener}>
        <div
          className={styles.vc_card_template}
          onClick={() => onClick("HAVE_ALREADY_VEHICLE")}
        >
          <p
            className={
              proposition?.vehicle?.gettingMode === "HAVE_ALREADY_VEHICLE" ? styles.vc_p_selected : styles.vc_p
            }
          >
            J'assure un véhicule que je possède
          </p>
          <img src={voiture} alt="voiture" />
        </div>
        <img
          className={
            proposition?.vehicle?.gettingMode === "HAVE_ALREADY_VEHICLE" ? styles.vc_check_on : styles.vc_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.vc_card_contener}>
        <div
          className={styles.vc_card_template}
          onClick={() => onClick("GET_NEW_VEHICLE")}
        >
          <p
            className={
              proposition?.vehicle?.gettingMode === "GET_NEW_VEHICLE" ? styles.vc_p_selected : styles.vc_p
            }
          >
            J'assure un véhicule neuf
          </p>
          <img src={billet} alt="billet" />
        </div>
        <img
          className={
            proposition?.vehicle?.gettingMode === "GET_NEW_VEHICLE" ? styles.vc_check_on : styles.vc_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.vc_card_contener}>
        <div
          className={styles.vc_card_template}
          onClick={() => onClick("GET_USED_CAR")}
        >
          <p
            className={
              proposition?.vehicle?.gettingMode === "GET_USED_CAR" ? styles.vc_p_selected : styles.vc_p
            }
          >
            J'assure un véhicule d'occasion
          </p>
          <img src={billet} alt="billet" />
        </div>
        <img
          className={
            proposition?.vehicle?.gettingMode === "GET_USED_CAR" ? styles.vc_check_on : styles.vc_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <Link to={proposition?.vehicle?.gettingMode === "HAVE_ALREADY_VEHICLE" ? "/owned-car" : "/financing"}>
        <button
          className={proposition?.vehicle?.gettingMode ? style.btn_visible : style.btn_hidden}
          disabled={proposition?.vehicle?.gettingMode ? false : true}
          type="button"
        >
          Je m'assure en 3 étapes
        </button>
      </Link>
    </div>
  );
}

export default VehiculeCondition;

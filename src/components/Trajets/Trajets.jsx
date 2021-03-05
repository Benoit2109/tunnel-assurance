import React, { useContext, useEffect, useState } from "react";

import style from "../../css/main.module.css";
import styles from "./Trajets.module.css";
import house from "../../assets/images/trajet_prive.png";
import board from "../../assets/images/trajet_prive_pro.png";
import suitcase from "../../assets/images/trajet_pro.png";
import check from "../../assets/images/checkmark.png";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";

function Trajets() {
  const {setHeader} = useContext(HeaderContext);
  const [trajet, setTrajet] = useState("");
  const [garage, setGarage] = useState("");
  const [principal, setPrincipal] = useState("");
  const [titulaire, setTitulaire] = useState("");

  useEffect(()=>{
    setHeader({ path:"/domiciliation", title:"Vos trajets"});
  },[setHeader])

  const handleTrajet = (choice) => {
    setTrajet(choice);
  };

  const handleGarage = (choice) => {
    setGarage(choice);
  };

  const handlePrincipal = (choice) => {
    setPrincipal(choice);
  };

  const handleTitulaire = (choice) => {
    setTitulaire(choice);
  };

  return (
    <div className={styles.trajet_wrapper}>
      <p>Vous utiliserez votre véhicule pour...</p>
      <div className={styles.trajet_card_contener}>
        <div
          className={styles.trajet_card_template}
          onClick={() => handleTrajet("choice1")}
        >
          <p
            className={
              trajet === "choice1" ? styles.trajet_p_selected : styles.trajet_p
            }
          >
            Des trajets privés uniquement
          </p>
          <img src={house} alt="house" />
        </div>
        <img
          className={
            trajet === "choice1"
              ? styles.trajet_check_on
              : styles.trajet_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.trajet_card_contener}>
        <div
          className={styles.trajet_card_template}
          onClick={() => handleTrajet("choice2")}
        >
          <p
            className={
              trajet === "choice2" ? styles.trajet_p_selected : styles.trajet_p
            }
          >
            Des trajets privés et domicile/travail
          </p>
          <img src={board} alt="panneau" />
        </div>
        <img
          className={
            trajet === "choice2"
              ? styles.trajet_check_on
              : styles.trajet_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.trajet_card_contener}>
        <div
          className={styles.trajet_card_template}
          onClick={() => handleTrajet("choice3")}
        >
          <p
            className={
              trajet === "choice3" ? styles.trajet_p_selected : styles.trajet_p
            }
          >
            Des trajets privés et pour le travail
          </p>
          <img src={suitcase} alt="malette" />
        </div>
        <img
          className={
            trajet === "choice3"
              ? styles.trajet_check_on
              : styles.trajet_check_off
          }
          src={check}
          alt="checkmark"
        />
      </div>

      <div className={styles.trajet_check_section}>
        <p>Où garez-vous le véhicule ?</p>
        <div className={styles.trajet_props_wrapper}>
          <div className={styles.trajet_prop_wrapper}>
            <p>Rue ou parking public</p>
            <div
              className={
                garage === "choice1"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleGarage("choice1")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Parking collectif clos</p>
            <div
              className={
                garage === "choice2"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleGarage("choice2")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Box privé ou garage</p>
            <div
              className={
                garage === "choice3"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleGarage("choice3")}
            />
          </div>
        </div>

        <p>Qui est le conducteur principal ?</p>
        <div className={styles.trajet_props_wrapper}>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous</p>
            <div
              className={
                principal === "choice1"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handlePrincipal("choice1")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous et votre conjoint</p>
            <div
              className={
                principal === "choice2"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handlePrincipal("choice2")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous et un enfant</p>
            <div
              className={
                principal === "choice3"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handlePrincipal("choice3")}
            />
          </div>
        </div>

        <p>Qui est le titulaire de la carte grise ?</p>
        <div className={styles.trajet_props_wrapper}>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous</p>
            <div
              className={
                titulaire === "choice1"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleTitulaire("choice1")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous et votre conjoint</p>
            <div
              className={
                titulaire === "choice2"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleTitulaire("choice2")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Société de leasing</p>
            <div
              className={
                titulaire === "choice3"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleTitulaire("choice3")}
            />
          </div>
        </div>
      </div>

      <Link to="/informations">
        <button className={trajet && garage && principal && titulaire? style.btn_visible : style.btn_hidden}>Étape suivante</button>
      </Link>
    </div>
  );
}

export default Trajets;

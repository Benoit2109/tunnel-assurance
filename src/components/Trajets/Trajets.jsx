import React, { useContext, useEffect } from "react";

import style from "../../css/main.module.css";
import styles from "./Trajets.module.css";
import house from "../../assets/images/trajet_prive.png";
import board from "../../assets/images/trajet_prive_pro.png";
import suitcase from "../../assets/images/trajet_pro.png";
import check from "../../assets/images/checkmark.png";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";

function Trajets() {
  const { setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);

  useEffect(() => {
    setHeader({ path: "/domiciliation", title: "Vos trajets" });
  }, [setHeader]);

  const handleTrajet = (choice) => {
    setProposition({
      ...proposition,
      vehicle: { ...proposition.vehicle, use: choice },
    });
  };

  const handleGarage = (choice) => {
    setProposition({
      ...proposition,
      vehicle: { ...proposition.vehicle, garageMode: choice },
    });
  };

  const handlePrincipal = (choice) => {
    setProposition({
      ...proposition,
      drivers: { ...proposition.drivers, driverGroupType: choice },
    });
  };

  const handleTitulaire = (choice) => {
    setProposition({
      ...proposition,
      drivers: { ...proposition.drivers, grayCardOwnerType: choice },
    });
  };

  return (
    <div className={styles.trajet_wrapper}>
      <p>Vous utiliserez votre véhicule pour...</p>
      <div className={styles.trajet_card_contener}>
        <div
          className={styles.trajet_card_template}
          onClick={() => handleTrajet("PRIVATE")}
        >
          <p
            className={
              proposition?.vehicle?.use === "PRIVATE"
                ? styles.trajet_p_selected
                : styles.trajet_p
            }
          >
            Des trajets privés uniquement
          </p>
          <img src={house} alt="house" />
        </div>
        <img
          className={
            proposition?.vehicle?.use === "PRIVATE"
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
          onClick={() => handleTrajet("PRIVATE_AND_TRIP")}
        >
          <p
            className={
              proposition?.vehicle?.use === "PRIVATE_AND_TRIP"
                ? styles.trajet_p_selected
                : styles.trajet_p
            }
          >
            Des trajets privés et domicile/travail
          </p>
          <img src={board} alt="panneau" />
        </div>
        <img
          className={
            proposition?.vehicle?.use === "PRIVATE_AND_TRIP"
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
          onClick={() => handleTrajet("PRIVATE_AND_BUSINESS")}
        >
          <p
            className={
              proposition?.vehicle?.use === "PRIVATE_AND_BUSINESS"
                ? styles.trajet_p_selected
                : styles.trajet_p
            }
          >
            Des trajets privés et pour le travail
          </p>
          <img src={suitcase} alt="malette" />
        </div>
        <img
          className={
            proposition?.vehicle?.use === "PRIVATE_AND_BUSINESS"
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
                proposition?.vehicle?.garageMode === "PUBLIC_AREA"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleGarage("PUBLIC_AREA")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Parking collectif clos</p>
            <div
              className={
                proposition?.vehicle?.garageMode === "PRIVATE_AREA"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleGarage("PRIVATE_AREA")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Box privé ou garage</p>
            <div
              className={
                proposition?.vehicle?.garageMode === "GARAGE_OR_BOX"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleGarage("GARAGE_OR_BOX")}
            />
          </div>
        </div>

        <p>Qui est le conducteur principal ?</p>
        <div className={styles.trajet_props_wrapper}>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous</p>
            <div
              className={
                proposition?.drivers?.driverGroupType === "MYSELF"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handlePrincipal("MYSELF")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous et votre conjoint</p>
            <div
              className={
                proposition?.drivers?.driverGroupType === "MY_PARTNER_AND_I"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handlePrincipal("MY_PARTNER_AND_I")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous et un enfant</p>
            <div
              className={
                proposition?.drivers?.driverGroupType ===
                "ONE_OF_MY_CHILDREN_AND_I"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handlePrincipal("ONE_OF_MY_CHILDREN_AND_I")}
            />
          </div>
        </div>

        <p>Qui est le titulaire de la carte grise ?</p>
        <div className={styles.trajet_props_wrapper}>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous</p>
            <div
              className={
                proposition?.drivers?.grayCardOwnerType === "SUBSCRIBER"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleTitulaire("SUBSCRIBER")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Vous et votre conjoint</p>
            <div
              className={
                proposition?.drivers?.grayCardOwnerType ===
                "SUBSCRIBER_OR_IT_PARTNER"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleTitulaire("SUBSCRIBER_OR_IT_PARTNER")}
            />
          </div>
          <div className={styles.trajet_prop_wrapper}>
            <p>Société de leasing</p>
            <div
              className={
                proposition?.drivers?.grayCardOwnerType ===
                "LEASING_OR_CREDIT_COMPANY"
                  ? style.checkbox
                  : style.checkbox_off
              }
              onClick={() => handleTitulaire("LEASING_OR_CREDIT_COMPANY")}
            />
          </div>
        </div>
      </div>

      <Link to="/informations">
        <button
          className={
            proposition.vehicle.use &&
            proposition.vehicle.garageMode &&
            proposition.drivers.driverGroupType &&
            proposition.drivers.grayCardOwnerType
              ? style.btn_visible
              : style.btn_hidden
          }
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default Trajets;

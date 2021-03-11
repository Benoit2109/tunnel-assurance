import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";
import { apiDate } from "../commons/convertDate";

import style from "../../css/main.module.css";
import styles from "./Informations.module.css";
import { MainDriverContext } from "../../Contexts/MainDriverContext";

function Informations() {
  const { setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);
  const { mainDriver, setMainDriver } = useContext(MainDriverContext);
  const [sex, setSex] = useState("");

  useEffect(() => {
    setHeader({ path: "/trajets", title: "Informations" });
  }, [setHeader]);

  const handleGender = (choice) => {
    setSex(choice);
    setProposition({
      ...proposition,
      drivers: {
        ...proposition.drivers,
        drivers: {
          ...proposition.drivers.drivers,
          [0]: { ...proposition.drivers.drivers[0], sex: choice },
        },
      },
    });
  };

  const handleMainDriver = (e) => {
    setMainDriver({ ...mainDriver, [e.target.name]: e.target.value });
  };

  const handleDriver = (e) => {
    setProposition({
      ...proposition,
      drivers: {
        ...proposition.drivers,
        drivers: {
          ...proposition.drivers.drivers,
          [0]: {
            ...proposition.drivers.drivers[0],
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  };

  const handleAAC = (e) => {
    if (e.target.value === "true") {
      setProposition({
        ...proposition,
        drivers: {
          ...proposition.drivers,
          drivers: {
            ...proposition.drivers.drivers,
            [0]: {
              ...proposition.drivers.drivers[0],
              accompaniedDriving: true,
            },
          },
        },
      });
    } else {
      setProposition({
        ...proposition,
        drivers: {
          ...proposition.drivers,
          drivers: {
            ...proposition.drivers.drivers,
            [0]: {
              ...proposition.drivers.drivers[0],
              accompaniedDriving: false,
            },
          },
        },
      });
    }
  };

  const handleDate = (e) => {
    setProposition({
      ...proposition,
      drivers: {
        ...proposition.drivers,
        drivers: {
          ...proposition.drivers.drivers,
          [0]: {
            ...proposition.drivers.drivers[0],
            [e.target.name]: apiDate(e.target.value),
          },
        },
      },
    });
    setMainDriver({ ...mainDriver, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.informations_wrapper}>
      <div className={styles.informations_contener}>
        <section>
          <p>Conducteur principal</p>
          <div className={styles.informations_avatar_wrapper}>
            <p>Je suis...</p>
            <div
              className={
                sex === "MALE"
                  ? styles.informations_avatar_m
                  : styles.informations_avatar_m_off
              }
              onClick={() => handleGender("MALE")}
            />
            <div
              className={
                sex === "FEMALE"
                  ? styles.informations_avatar_w
                  : styles.informations_avatar_w_off
              }
              onClick={() => handleGender("FEMALE")}
            />
          </div>
        </section>

        <div className={styles.informations_form_contener}>
          <form>
            <div className={styles.informations_input_contener}>
              <label htmlFor="firstname">
                <input
                  type="text"
                  name="firstname"
                  key="firstname"
                  value={mainDriver?.firstname}
                  onChange={(e) => handleMainDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>MON PRÉNOM</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  key="name"
                  value={mainDriver?.name}
                  onChange={(e) => handleMainDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>MON NOM</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="birthDate">
                <input
                  type="date"
                  name="birthDate"
                  key="birthDate"
                  onChange={(e) => handleDate(e)}
                />
              </label>
              <div className={styles.informations_placeholder_center}>
                Date de naissance
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="telephone">
                <input
                  type="tel"
                  name="telephone"
                  key="telephone"
                  value={mainDriver?.telephone}
                  onChange={(e) => handleMainDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>
                MON NUMÉRO DE TÉLÉPHONE
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  key="email"
                  value={mainDriver?.email}
                  onChange={(e) => handleMainDriver(e)}
                />
                <span className={mainDriver?.email.length<5? style.match : mainDriver?.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? style.match : style.error}>{mainDriver?.email.length<5? "" : mainDriver?.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? "" : "veuillez vérifier votre adresse email"}</span>
              </label>
              <div className={styles.informations_placeholder}>EMAIL</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="address">
                <input
                  type="text"
                  name="address"
                  key="address"
                  value={mainDriver?.address}
                  onChange={(e) => handleMainDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>
                ADRESSE POSTALE
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="zip_code">
                <input
                  type="text"
                  name="zip_code"
                  key="zip_code"
                  value={mainDriver?.zip_code}
                  onChange={(e) => handleMainDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>CODE POSTAL</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="city">
                <input
                  type="text"
                  name="city"
                  key="city"
                  value={proposition?.vehicle?.city}
                  onChange={(e) => handleDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>VILLE</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="familySituation">
                <select
                  name="familySituation"
                  key="familySituation"
                  value={proposition?.drivers?.drivers[0]?.familySituation}
                  onChange={(e) => handleDriver(e)}
                >
                  <option value="UNKNOWN">Situation familliale</option>
                  <option value="SINGLE">Célibataire</option>
                  <option value="PARTNER">Concubin</option>
                  <option value="CIVIL_PARTNERSHIP">Pacsé</option>
                  <option value="MARRIED">Marié</option>
                  <option value="SEPARATED">Séparé</option>
                  <option value="DIVORCED">Divorcé</option>
                  <option value="WIDOWER">Veuf</option>
                </select>
              </label>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="profession">
                <select
                  name="profession"
                  key="profession"
                  value={proposition?.drivers?.drivers[0]?.profession}
                  onChange={(e) => handleDriver(e)}
                >
                  <option value="UNKNOWN">Profession</option>
                  <option value="WITHOUT_PROFESSION">Sans profession</option>
                  <option value="STUDENT">Étudiant</option>
                  <option value="EMPLOYEE">Salarié</option>
                  <option value="CIVIL_SERVANT">Fonctionnaire</option>
                  <option value="LIBERAL_PROFESSION">
                    Profession libérale
                  </option>
                  <option value="CRAFTSMAN">Artisan</option>
                  <option value="RETIRED">Retraité</option>
                  <option value="FARMER">Agriculteur</option>
                </select>
              </label>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="drivingLicenceObtainedDate">
                <input
                  type="date"
                  name="drivingLicenceObtainedDate"
                  key="drivingLicenceObtainedDate"
                  onChange={(e) => handleDate(e)}
                />
              </label>
              <div className={styles.informations_placeholder_center}>
                Date du permis de conduire
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="accompaniedDriving">
                <select
                  name="accompaniedDriving"
                  key="accompaniedDriving"
                  value={proposition?.drivers?.drivers[0]?.accompaniedDriving}
                  onChange={(e) => handleAAC(e)}
                >
                  <option value="UNKNOWN">Avez vous fait AAC ?</option>
                  <option value="true">
                    J'ai fait la conduite accompagnée
                  </option>
                  <option value="false">
                    Je n'ai pas fait la conduite accompagnée
                  </option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>
      <Link to="/antecedants">
        <button
          className={
            proposition.drivers.drivers[0].sex !== "UNKNOWN" &&
            proposition.drivers.drivers[0].birthDate !== "" &&
            proposition.drivers.drivers[0].familySituation !== "UNKNOWN" &&
            proposition.drivers.drivers[0].profession !== "UNKNOWN" &&
            proposition.drivers.drivers[0].drivingLicenceObtainedDate !== "" &&
            proposition.drivers.drivers[0].accompaniedDriving !== "UNKNOWN"
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

export default Informations;

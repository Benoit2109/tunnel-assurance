import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";
import {apiDate} from '../commons/convertDate';

import style from "../../css/main.module.css";
import styles from "./Informations.module.css";

function Informations() {
  const { setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);
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
          [0]: { ...proposition.drivers.drivers[0], sex: choice }
        }
      }
    });
  };

  const handleDriver = (e) => {
    setProposition({
      ...proposition,
      drivers: {
        ...proposition.drivers,
        drivers: {
          ...proposition.drivers.drivers,
          [0]: { ...proposition.drivers.drivers[0], [e.target.name]: e.target.value }
        }
      }
    });
  };

  const handleDate = (e) => {
    setProposition({
      ...proposition,
      drivers: {
        ...proposition.drivers,
        drivers: {
          ...proposition.drivers.drivers,
          [0]: { ...proposition.drivers.drivers[0], [e.target.name]: apiDate(e.target.value) }
        }
      }
    });
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
                  id="firstname"
                  onChange={(e) => handleDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>MON PRÉNOM</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => handleDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>MON NOM</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="birthDate">
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
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
                  id="telephone"
                  onChange={(e) => handleDriver(e)}
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
                  id="email"
                  onChange={(e) => handleDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>EMAIL</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="address">
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={(e) => handleDriver(e)}
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
                  id="zip_code"
                  onChange={(e) => handleDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>CODE POSTAL</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="city">
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => handleDriver(e)}
                />
              </label>
              <div className={styles.informations_placeholder}>VILLE</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="familySituation">
                <select
                  name="familySituation"
                  id="familySituation"
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
                  id="profession"
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
                  id="drivingLicenceObtainedDate"
                  onChange={(e) => handleDate(e)}
                />
              </label>
              <div className={styles.informations_placeholder_center}>
                Date du permis de conduire
              </div>
            </div>
          </form>
        </div>
      </div>
      <Link to="/antecedants">
        <button className={style.btn_visible}>Étape suivante</button>
      </Link>
    </div>
  );
}

export default Informations;

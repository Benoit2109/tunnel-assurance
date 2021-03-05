import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lastYear } from "../commons/convertDate";
import { years3ago } from "../commons/convertDate";

import style from "../../css/main.module.css";
import styles from "./Antecedants.module.css";
import { HeaderContext } from "../../Contexts/headerContext";

function Antecedants() {
  const {setHeader} = useContext(HeaderContext);
  const [bonus, setBonus] = useState("");
  const [malus, setMalus] = useState("");
  const [insured, setInsured] = useState({
    insuranceRate: "",
    insuredPeriod: "non",
    months1insured: "",
    lastInsuranceCompany: "",
    resilied: "",
    resiliedReason: "",
    resiliedCompanyName: "",
  });

  useEffect(() => {
    setHeader({ path:"/informations", title:"Antécédents assurances"});
    const BonusList = () => {
      let boucleBonus = [];
      for (let i = 51; i < 100; i++) {
        boucleBonus.push(i / 100);
      }
      setBonus(boucleBonus);
    };
    BonusList();

    const MalusList = () => {
      let boucleMalus = [];
      for (let i = 101; i <= 350; i++) {
        boucleMalus.push(i / 100);
      }
      setMalus(boucleMalus);
    };
    MalusList();
  }, [setHeader]);

  const handleInsured = (e) => {
    setInsured({ ...insured, [e.target.name]: e.target.value });
  };

  const handleResilied = (choice) => {
    setInsured({ ...insured, resilied: choice });
  };

  return (
    <div className={styles.ante_wrapper}>
      <section className={styles.ante_form_wrapper}>
        <form>
          <select name="insuranceRate" onChange={(e) => handleInsured(e)}>
            <option>Sélectionner votre bonus/malus</option>
            <option value="0.48">
              0.50 soit 50% de bonus, depuis + de 6 ans
            </option>
            <option value="0.47">
              0.50 soit 50% de bonus, depuis 5 à 6 ans
            </option>
            <option value="0.46">
              0.50 soit 50% de bonus, depuis 4 à 5 ans
            </option>
            <option value="0.47">
              0.50 soit 50% de bonus, depuis 3 à 4 ans
            </option>
            <option value="0.48">
              0.50 soit 50% de bonus, depuis 2 à 3 ans
            </option>
            <option value="0.49">
              0.50 soit 50% de bonus, depuis 1 à 2 ans
            </option>
            <option value="0.5">
              0.50 soit 50% de bonus, depuis - de 1 an
            </option>
            {bonus &&
              bonus.map((el) => (
                <option value={el} id={el}>
                  {el} soit {Math.floor(100 - el * 100)}% de bonus
                </option>
              ))}
            <option value="O">1.00 soit 0% ni bonus, ni malus</option>
            {malus &&
              malus.map((el) => (
                <option value={el} id={el}>
                  {el} soit {Math.floor(el * 100 - 100)}% de malus
                </option>
              ))}
          </select>
          <select name="insuredPeriod" onChange={(e) => handleInsured(e)}>
            <option>Avez-vous été assuré ?</option>
            <option value="non">Non</option>
            <option value="-12">Oui, assuré de moins de 12 mois</option>
            <option value="/12">
              Oui, assuré avec interruptions sur les 12 derniers mois
            </option>
            <option value="/24">
              Oui, assuré avec interruptions sur les 24 derniers mois
            </option>
            <option value="/36">
              Oui, assuré avec interruptions sur les 36 derniers mois
            </option>
            <option value="36">
              Oui, assuré sans interruptions sur les 36 derniers mois
            </option>
          </select>
          <div
            className={
              insured && insured.insuredPeriod !== "non"
                ? styles.ante_input_wrapper
                : styles.ante_input_wrapper_off
            }
          >
            <p>Nombre de mois d'assurance depuis le {lastYear}</p>
            <label htmlFor="months1insured">
              <input
                onChange={(e) => handleInsured(e)}
                type="number"
                name="months1insured"
                id="months1insured"
              />
            </label>
            <label htmlFor="lastInsuranceCompany">
              <input
                onChange={(e) => handleInsured(e)}
                type="text"
                name="lastInsuranceCompany"
                id="lastInsuranceCompany"
                placeholder="Votre précédent assureur"
              />
            </label>
            <p>
              Un assureur a-t-il résillié votre contrat d'assurance depuis le{" "}
              {years3ago}
            </p>
            <div className={styles.ante_checkbox_wrapper}>
              <div className={styles.ante_checkbox_contener}>
                <p>Oui</p>
                <div
                  className={
                    insured && insured.resilied === true
                      ? style.checkbox
                      : style.checkbox_off
                  }
                  onClick={() => handleResilied(true)}
                />
              </div>
              <div className={styles.ante_checkbox_contener}>
                <p>Non</p>
                <div
                  className={
                    insured && insured.resilied === false
                      ? style.checkbox
                      : style.checkbox_off
                  }
                  onClick={() => handleResilied(false)}
                />
              </div>
            </div>
            <div
              className={
                (insured && insured.resilied === false) ||
                insured.resilied === ""
                  ? styles.ante_resilied_section_off
                  : ""
              }
            >
              <select name="resiliedReason" onChange={(e) => handleInsured(e)}>
                <option value="">Pour quel motif ?</option>
                <option value="non paiement">Pour non paiement</option>
                <option value="dossier incomplet">
                  Pour dossier incomplet
                </option>
                <option value="fausse déclaration">
                  Pour fausse déclaration
                </option>
                <option value="sinistre">Pour sinistre</option>
                <option value="sanction">Pour sanction pénale</option>
                <option value="autre">Pour un autre motif</option>
              </select>
              <label htmlFor="resiliedCompanyName">
                <input
                  onChange={(e) => handleInsured(e)}
                  type="text"
                  name="resiliedCompanyName"
                  id="resiliedCompanyName"
                  placeholder="Nom de la dernière compagnie d'assurance ayant résiliée le contrat"
                />
              </label>
            </div>
          </div>
        </form>
      </section>
      <Link to="#">
        <button className={style.btn_visible}>Étape suivante</button>
      </Link>
    </div>
  );
}

export default Antecedants;

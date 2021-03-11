import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lastYear } from "../commons/convertDate";
import { years3ago } from "../commons/convertDate";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";
import axios from "axios";

import style from "../../css/main.module.css";
import styles from "./Antecedants.module.css";

function Antecedants() {
  const { setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);
  const [bonus, setBonus] = useState("");
  const [malus, setMalus] = useState("");

  useEffect(() => {
    setHeader({ path: "/informations", title: "Antécédents assurances" });
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

  const HandleBonusMalus = (e) => {
    if (parseInt(e.target.value) <= 6) {
      setProposition({
        ...proposition,
        drivers: {
          ...proposition.drivers,
          drivers: {
            ...proposition.drivers.drivers,
            [0]: {
              ...proposition.drivers.drivers[0],
              previousInsurance: {
                ...proposition.drivers.drivers[0].previousInsurance,
                bonusMalus: 50,
                bonusSenorityYears: parseInt(e.target.value),
              },
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
              previousInsurance: {
                ...proposition.drivers.drivers[0].previousInsurance,
                bonusMalus: parseInt(e.target.value),
                bonusSenorityYears: 0,
              },
            },
          },
        },
      });
    }
  };

  const handleInsured = (e) => {
    if (e.target.type === "number") {
      setProposition({
        ...proposition,
        drivers: {
          ...proposition.drivers,
          drivers: {
            ...proposition.drivers.drivers,
            [0]: {
              ...proposition.drivers.drivers[0],
              previousInsurance: {
                ...proposition.drivers.drivers[0].previousInsurance,
                [e.target.name]: parseInt(e.target.value),
              },
            },
          },
        },
      });
    } else if (
      e.target.value === "YES_WITHOUT_INTERRUPTION_ON_LAST_36_MONTHS_AND_MORE"
    ) {
      setProposition({
        ...proposition,
        drivers: {
          ...proposition.drivers,
          drivers: {
            ...proposition.drivers.drivers,
            [0]: {
              ...proposition.drivers.drivers[0],
              previousInsurance: {
                ...proposition.drivers.drivers[0].previousInsurance,
                [e.target.name]: e.target.value,
                insuranceMonths: 36,
              },
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
              previousInsurance: {
                ...proposition.drivers.drivers[0].previousInsurance,
                [e.target.name]: e.target.value,
              },
            },
          },
        },
      });
    }
  };

  const handleResilied = (choice) => {
    setProposition({
      ...proposition,
      drivers: {
        ...proposition.drivers,
        drivers: {
          ...proposition.drivers.drivers,
          [0]: {
            ...proposition.drivers.drivers[0],
            previousInsurance: {
              ...proposition.drivers.drivers[0].previousInsurance,
              hasInsuranceTerminate: choice,
            },
          },
        },
      },
    });
  };

  const SubmitProposition = () => {
    const Token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTQ2OTQ5NTYsInJvbGUiOiJbXCJBZG1pbmlzdHJhdG9yc1wiLFwiUmVnaXN0ZXJlZCBVc2Vyc1wiLFwiU3Vic2NyaWJlcnNcIl0iLCJuYW1laWQiOiI1MDQiLCJ1bmlxdWVfbmFtZSI6Imp1bGllbiB0ZXN0IiwibmJmIjoxNjE0NjA4NTU2LCJpc3MiOiJodHRwczovL3Rlc3RhcGkuZ29vZC1hbmdlbC5mci8iLCJhdWQiOiJodHRwczovL3Rlc3RhcGkuZ29vZC1hbmdlbC5mci8ifQ.FGdwGt2p6aXEGWEb0RMnunqu9CGQR1vIZNFxRSBHniQ`;
    axios
      .post(
        "https://testdriving.good-angel.fr/api/Insurance/Propositions",
        proposition,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={styles.ante_wrapper}>
      <section className={styles.ante_form_wrapper}>
        <form>
          <select name="bonusMalus" onChange={(e) => HandleBonusMalus(e)}>
            <option>Sélectionner votre bonus/malus</option>
            <option key="6" value="6">
              0.50 soit 50% de bonus, depuis + de 6 ans
            </option>
            <option key="5" value="5">
              0.50 soit 50% de bonus, depuis 5 à 6 ans
            </option>
            <option key="4" value="4">
              0.50 soit 50% de bonus, depuis 4 à 5 ans
            </option>
            <option key="3" value="3">
              0.50 soit 50% de bonus, depuis 3 à 4 ans
            </option>
            <option key="2" value="2">
              0.50 soit 50% de bonus, depuis 2 à 3 ans
            </option>
            <option key="1" value="1">
              0.50 soit 50% de bonus, depuis 1 à 2 ans
            </option>
            <option key="0" value="0">
              0.50 soit 50% de bonus, depuis - de 1 an
            </option>
            {bonus &&
              bonus.map((el) => (
                <option value={el * 100} key={el * 100}>
                  {el} soit {Math.floor(100 - el * 100)}% de bonus
                </option>
              ))}
            <option key="100" value="100">
              1.00 soit 0% ni bonus, ni malus
            </option>
            {malus &&
              malus.map((el) => (
                <option value={el * 100} key={el * 100}>
                  {el} soit {Math.floor(el * 100 - 100)}% de malus
                </option>
              ))}
          </select>
          <select name="insuranceSeniority" onChange={(e) => handleInsured(e)}>
            <option value="UNKNOWN">Avez-vous été assuré ?</option>
            <option value="NO_NEVER_INSURED">Non</option>
            <option value="YES_INSURED_LESS_12_MONTHS">
              Oui, assuré de moins de 12 mois
            </option>
            <option value="YES_WITH_INTERRUPTION_ON_LAST_12_MONTHS">
              Oui, assuré avec interruptions sur les 12 derniers mois
            </option>
            <option value="YES_WITH_INTERRUPTION_ON_LAST_24_MONTHS">
              Oui, assuré avec interruptions sur les 24 derniers mois
            </option>
            <option value="YES_WITH_INTERRUPTION_ON_LAST_36_MONTHS">
              Oui, assuré avec interruptions sur les 36 derniers mois
            </option>
            <option value="YES_WITHOUT_INTERRUPTION_ON_LAST_36_MONTHS_AND_MORE">
              Oui, assuré sans interruptions sur les 36 derniers mois
            </option>
          </select>
          <div
            className={
              proposition?.drivers?.drivers[0]?.previousInsurance
                ?.insuranceSeniority !== "UNKNOWN" &&
              proposition?.drivers?.drivers[0]?.previousInsurance
                ?.insuranceSeniority !== "NO_NEVER_INSURED"
                ? styles.ante_input_wrapper
                : styles.ante_input_wrapper_off
            }
          >
            <div
              className={
                proposition?.drivers?.drivers[0]?.previousInsurance
                  ?.insuranceSeniority ===
                "YES_WITHOUT_INTERRUPTION_ON_LAST_36_MONTHS_AND_MORE"
                  ? style.btn_hidden
                  : styles.ante_visible
              }
            >
              <p>Nombre de mois d'assurance depuis le {lastYear}</p>
              <label htmlFor="insuranceMonths">
                <input
                  onChange={(e) => handleInsured(e)}
                  type="number"
                  name="insuranceMonths"
                  key="insuranceMonths"
                  value={proposition?.drivers?.drivers[0]?.insuranceMonths}
                />
                <span
                  className={
                    proposition?.drivers?.drivers[0]?.previousInsurance
                      .insuranceSeniority === "YES_INSURED_LESS_12_MONTHS" &&
                    proposition?.drivers?.drivers[0]?.previousInsurance
                      .insuranceMonths > 12
                      ? style.error
                      : proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceSeniority ===
                          "YES_WITH_INTERRUPTION_ON_LAST_12_MONTHS" &&
                        proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceMonths > 12
                      ? style.error
                      : proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceSeniority ===
                          "YES_WITH_INTERRUPTION_ON_LAST_24_MONTHS" &&
                        proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceMonths > 24
                      ? style.error
                      : proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceSeniority ===
                          "YES_WITH_INTERRUPTION_ON_LAST_24_MONTHS" &&
                        proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceMonths > 24
                      ? style.error
                      : proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceSeniority ===
                          "YES_WITH_INTERRUPTION_ON_LAST_36_MONTHS" &&
                        proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceMonths > 36
                      ? style.error
                      : proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceSeniority ===
                          "YES_WITHOUT_INTERRUPTION_ON_LAST_36_MONTHS_AND_MORE" &&
                        proposition?.drivers?.drivers[0]?.previousInsurance
                          .insuranceMonths > 36
                      ? style.error
                      : style.match
                  }
                >
                  {proposition?.drivers?.drivers[0]?.previousInsurance
                    .insuranceSeniority === "YES_INSURED_LESS_12_MONTHS" &&
                  proposition?.drivers?.drivers[0]?.previousInsurance
                    .insuranceMonths > 12
                    ? "veuillez vérifier la valeur saisie"
                    : proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceSeniority ===
                        "YES_WITH_INTERRUPTION_ON_LAST_12_MONTHS" &&
                      proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceMonths > 12
                    ? "veuillez vérifier la valeur saisie"
                    : proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceSeniority ===
                        "YES_WITH_INTERRUPTION_ON_LAST_24_MONTHS" &&
                      proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceMonths > 24
                    ? "veuillez vérifier la valeur saisie"
                    : proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceSeniority ===
                        "YES_WITH_INTERRUPTION_ON_LAST_24_MONTHS" &&
                      proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceMonths > 24
                    ? "veuillez vérifier la valeur saisie"
                    : proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceSeniority ===
                        "YES_WITH_INTERRUPTION_ON_LAST_36_MONTHS" &&
                      proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceMonths > 36
                    ? "veuillez vérifier la valeur saisie"
                    : proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceSeniority ===
                        "YES_WITHOUT_INTERRUPTION_ON_LAST_36_MONTHS_AND_MORE" &&
                      proposition?.drivers?.drivers[0]?.previousInsurance
                        .insuranceMonths > 36
                    ? "veuillez vérifier la valeur saisie"
                    : ""}
                </span>
              </label>
            </div>
            <label htmlFor="lastInsuranceName">
              <input
                onChange={(e) => handleInsured(e)}
                type="text"
                name="lastInsuranceName"
                key="lastInsuranceName"
                placeholder="Votre précédent assureur"
                value={proposition?.drivers?.drivers[0]?.lastInsuranceName}
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
                    proposition?.drivers?.drivers[0]?.previousInsurance
                      ?.hasInsuranceTerminate === true
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
                    proposition?.drivers?.drivers[0]?.previousInsurance
                      ?.hasInsuranceTerminate === false
                      ? style.checkbox
                      : style.checkbox_off
                  }
                  onClick={() => handleResilied(false)}
                />
              </div>
            </div>
            <div
              className={
                proposition?.drivers?.drivers[0]?.previousInsurance
                  ?.hasInsuranceTerminate === false ||
                proposition?.drivers?.drivers[0]?.previousInsurance
                  ?.hasInsuranceTerminate === "UNKNOWN"
                  ? styles.ante_resilied_section_off
                  : styles.ante_visible
              }
            >
              <select name="terminateReason" onChange={(e) => handleInsured(e)}>
                <option value="UNKNOWN">Pour quel motif ?</option>
                <option value="NON_PAYEMENT">Pour non paiement</option>
                <option value="INCOMPLETE_FILE">Pour dossier incomplet</option>
                <option value="FALSE_DECLARATION">
                  Pour fausse déclaration
                </option>
                <option value="CLAIM">Pour sinistre</option>
                <option value="CRIMINAL_SANCTION">Pour sanction pénale</option>
                <option value="ANOTHER">Pour un autre motif</option>
              </select>
              <label htmlFor="terminateBy">
                <input
                  onChange={(e) => handleInsured(e)}
                  type="text"
                  name="terminateBy"
                  key="terminateBy"
                  placeholder="Nom de la dernière compagnie d'assurance ayant résiliée le contrat"
                  value={proposition?.drivers?.drivers[0]?.terminateBy}
                />
              </label>
            </div>
          </div>
        </form>
      </section>
      <Link to="#">
        <button
          className={style.btn_visible}
          onClick={() => SubmitProposition()}
        >
          Étape suivante
        </button>
      </Link>
    </div>
  );
}

export default Antecedants;

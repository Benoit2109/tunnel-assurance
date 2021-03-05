import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/headerContext";

import style from "../../css/main.module.css";
import styles from "./Informations.module.css";

function Informations() {
  const{setHeader} = useContext(HeaderContext);
  const [sex, setSex] = useState("");
  const [birthdate, setBirthdate] = useState({
      day:"",
      month:"",
      year:"",
  })

  useEffect(()=>{
    setHeader({ path:"/trajets", title:"Informations"});
  },[setHeader])

  const [driver, setDriver] = useState({
    roleOrder: 1,
    sex: "",
    firstname: "",
    name: "",
    birthdate: `${birthdate.year}-${birthdate.month}-${birthdate.day}`,
    telephone: "",
    email: "",
    address: "",
    zip_code: "",
    city: "",
    familySituation: "",
    profession: "",
    drivingLicenceObtainedDate: "",
  });

  const handleGender = (choice) => {
    setSex(choice);
    setDriver({ ...driver, sex: choice });
  };

  const handleDriver = (e) => {
      setDriver({...driver, [e.target.name]: e.target.value})
  }

  const handleBirthday =(e)=> {
      setBirthdate({...birthdate, [e.target.name]: e.target.value})
  }

  return (
    <div className={styles.informations_wrapper}>
      <div className={styles.informations_contener}>
        <section>
          <p>Conducteur principal</p>
          <div className={styles.informations_avatar_wrapper}>
            <p>Je suis...</p>
            <div
              className={
                sex === "male"
                  ? styles.informations_avatar_m
                  : styles.informations_avatar_m_off
              }
              onClick={() => handleGender("male")}
            />
            <div
              className={
                sex === "female"
                  ? styles.informations_avatar_w
                  : styles.informations_avatar_w_off
              }
              onClick={() => handleGender("female")}
            />
          </div>
        </section>

        <div className={styles.informations_form_contener}>
          <form>
            <div className={styles.informations_input_contener}>
              <label htmlFor="firstname">
                <input type="text" name="firstname" id="firstname" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>MON PRÉNOM</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="name">
                <input type="text" name="name" id="name" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>MON NOM</div>
            </div>

            <div className={styles.informations_birth_wrapper}>
              <div className={styles.informations_birth_relative}>
                <label htmlFor="day">
                  <input type="number" name="day" id="day" onChange={(e)=> handleBirthday(e)}/>
                </label>
                <div className={styles.informations_placeholder}>JJ</div>
              </div>
              <div className={styles.informations_birth_relative}>
                <label htmlFor="month">
                  <input type="number" name="month" id="month" onChange={(e)=> handleBirthday(e)}/>
                </label>
                <div className={styles.informations_placeholder}>MM</div>
              </div>
              <div className={styles.informations_birth_relative}>
                <label htmlFor="year">
                  <input type="number" name="year" id="year" onChange={(e)=> handleBirthday(e)}/>
                </label>
                <div className={styles.informations_placeholder}>AAAA</div>
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="telephone">
                <input type="tel" name="telephone" id="telephone" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>
                MON NUMÉRO DE TÉLÉPHONE
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="email">
                <input type="email" name="email" id="email" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>EMAIL</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="address">
                <input type="text" name="address" id="address" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>
                ADRESSE POSTALE
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="zip_code">
                <input type="text" name="zip_code" id="zip_code" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>
                CODE POSTAL
              </div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="city">
                <input type="text" name="city" id="city" onChange={(e)=> handleDriver(e)}/>
              </label>
              <div className={styles.informations_placeholder}>VILLE</div>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="familySituation">
                <select name="familySituation" id="familySituation" onChange={(e)=> handleDriver(e)}>
                  <option value="">Situation familliale</option>
                  <option value="Celibataire">Célibataire</option>
                  <option value="Concubin">Concubin</option>
                  <option value="Pacse">Pacsé</option>
                  <option value="Marie">Marié</option>
                  <option value="Separe">Séparé</option>
                  <option value="Divorce">Divorcé</option>
                  <option value="Veuf">Veuf</option>
                </select>
              </label>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="profession">
                <select name="profession" id="profession" onChange={(e)=> handleDriver(e)}>
                  <option value="">Profession</option>
                  <option value="Sans profession">Sans profession</option>
                  <option value="Etudiant">Étudiant</option>
                  <option value="Salarie">Salarié</option>
                  <option value="Fonctionnaire">Fonctionnaire</option>
                  <option value="Profession liberale">
                    Profession libérale
                  </option>
                  <option value="Artisan">Artisan</option>
                  <option value="Retraite">Retraité</option>
                  <option value="Agriculteur">Agriculteur</option>
                </select>
              </label>
            </div>

            <div className={styles.informations_input_contener}>
              <label htmlFor="drivingLicenceObtainedDate">
                <input type="date" name="drivingLicenceObtainedDate" id="drivingLicenceObtainedDate" onChange={(e)=> handleDriver(e)}/>
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

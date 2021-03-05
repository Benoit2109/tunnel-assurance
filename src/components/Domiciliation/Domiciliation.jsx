import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map";
import { Link } from "react-router-dom";

import style from "../../css/main.module.css";
import styles from "./Domiciliation.module.css";
import cross from "../../assets/images/cross_ui.png";
import { HeaderContext } from "../../Contexts/headerContext";

function Domiciliation() {
  const {header,setHeader} = useContext(HeaderContext);
  const [address, setAddress] = useState([]);
  const [findAddress, setFindAddress] = useState("");
  
  useEffect(()=>{
    if(header.path==="/owned-car"){
      setHeader({ path:"/actual-vehicule", title:"Domiciliation"});
    } else {
      setHeader({ path:"/select-vehicule", title:"Domiciliation"});
    }
    
  },[setHeader])

  const handleAddress = (e) => {
    if (e.target.value.length > 0) {
      let fetchAddress = e.target.value.split(" ").join("+");
      axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${fetchAddress}&limit=10`
        )
        .then((res) => setFindAddress(res.data.features));
    }
  };

  const selectAddress = (e) => {
    setAddress([findAddress.find((el) => el.properties.id === e.target.id)]);
    setFindAddress("");
  };

  const initAddress = () => {
    setAddress("");
  };

  return (
    <div className={styles.dom_contener}>
      <div>
        <form className={styles.dom_form_wrapper}>
          <div className={styles.dom_field_wrapper}>
            <label htmlFor="adresse">
              <input
                type="text"
                name="adresse"
                id="adresse"
                onChange={(e) => handleAddress(e)}
                value={address ? address[0]?.properties.label : ""}
              />
            </label>
            <div className={styles.dom_placeholder}>VOTRE ADRESSE</div>
          </div>
          <img
            src={cross}
            className={styles.dom_cross}
            onClick={initAddress}
            alt="supprier l'addresse saisie"
          />
        </form>
      </div>

      <div></div>
      <Map className={styles.dom_map_wrapper} address={address} />

      <Link to="/trajets">
        <button className={style.btn_visible}>Étape suivante</button>
      </Link>

      <div
        className={
          findAddress.length > 5
            ? styles.dom_address_list
            : styles.dom_address_list_hidden
        }
      >
        <ul>
          {findAddress &&
            findAddress.map((e) => (
              <li id={e.properties.id} onClick={(e) => selectAddress(e)}>
                {e.properties.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Domiciliation;

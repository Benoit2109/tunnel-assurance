import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map";
import { Link } from "react-router-dom";

import style from "../../css/main.module.css";
import styles from "./Domiciliation.module.css";
import cross from "../../assets/images/cross_ui.png";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";
import { MainDriverContext } from "../../Contexts/MainDriverContext";

function Domiciliation() {
  const { header, setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);
  const { mainDriver, setMainDriver } = useContext(MainDriverContext);
  const [address, setAddress] = useState([]);
  const [findAddress, setFindAddress] = useState([]);

  useEffect(() => {
    if (header.path === "/owned-car") {
      setHeader({ path: "/actual-vehicule", title: "Domiciliation" });
    } else {
      setHeader({ path: "/select-vehicule", title: "Domiciliation" });
    }
  }, [setHeader, header.path]);

  const handleAddress = (e) => {
    if (e.target.value.length > 4) {
      let fetchAddress = e.target.value.split(" ").join("+");
      axios
        .get(
          `https://geocode.search.hereapi.com/v1/
          geocode?q=${fetchAddress}&apiKey=HJOMK543rJEuqp4_UDWH0zqXul1RXJUZcBzVX-5Cgg0`)
        .then((res) => {
          console.log(res);
        });
    }
  };

  const handleFullAddress = () => {
    setProposition({
      ...proposition,
      vehicle: {
        ...proposition.vehicle,
        postalCode: address[0].properties.postcode,
        city: address[0].properties.city,
      },
    });
    setMainDriver({
      ...mainDriver,
      address: address[0].properties.name,
      zip_code: address[0].properties.postcode,
      city: address[0].properties.city,
    });
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
            <label htmlFor="address">
              <input
                type="text"
                name="address"
                key="address"
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
        <button
          className={style.btn_visible}
          onClick={() => handleFullAddress()}
        >
          Étape suivante
        </button>
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
              <li
                key={e.properties.id}
                id={e.properties.id}
                onClick={(e) => selectAddress(e)}
              >
                {e.properties.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Domiciliation;

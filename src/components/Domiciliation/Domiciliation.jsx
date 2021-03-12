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

  // j'initialise mon header avec les infos reçu au montge de mon composant.

  useEffect(() => {
    if (header.path === "/owned-car") {
      setHeader({ path: "/actual-vehicule", title: "Domiciliation" });
    } else {
      setHeader({ path: "/select-vehicule", title: "Domiciliation" });
    }
  }, [setHeader, header.path]);

  // je lance mon appel à l'api HERE uniquement lorsque la recherche dépasse 4 caractère afin de limiter le nombre d'appel et précisier mes résultats.

  const handleAddress = (e) => {
    if (e.target.value.length > 4) {
      let fetchAddress = e.target.value.split(" ").join("+");
      axios
        .get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${fetchAddress}&apiKey=0UDiQDnGqivVBljhgwZiqCJHiE45lClwR5j4ClysH88`)
        .then((res) => {
          setFindAddress(res.data.items);
        });
    }
  };

  // je sauve les informations nécessaire dans mon context pour mon appel final et obtenir une proposition d'assurance.

  const handleFullAddress = () => {
    setProposition({
      ...proposition,
      vehicle: {
        ...proposition.vehicle,
        postalCode: address[0].address.postalCode,
        city: address[0].address.city,
      },
    });

    // Je récupère les infos du conducteur pour plus tard et aider à l'autocomplétion du composant informations.

    setMainDriver({
      ...mainDriver,
      address: `${address[0].address.houseNumber} ${address[0].address.street}`,
      zip_code: address[0].address.postalCode,
      city: address[0].address.city,
    });
  };

  const selectAddress = (e) => {
    setAddress([findAddress.find((el) => el.id === e.target.id)]);
    setFindAddress("");
  };

  // je permet à l'utilisateur de faire un reset d'address pour saisir une autre adresse s'il a fait une erreur de saisie.

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
                value={address ? address[0]?.address.label : ""}
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

    {/* j'envoie le state address à mon composant map pour pouvoir fficher le résultat de a recherche sur la carte et permettre à l'utilisateur de s'assurer que son addresse correspond */}

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
          findAddress.length > 0
            ? styles.dom_address_list
            : styles.dom_address_list_hidden
        }
      >
        <ul>
          {findAddress &&
            findAddress.map((e) => (
              <li
                key={e.id}
                id={e.id}
                onClick={(e) => selectAddress(e)}
              >
                {e.address.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Domiciliation;

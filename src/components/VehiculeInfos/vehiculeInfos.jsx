import React, {useState} from 'react';

import style from '../../css/main.module.css';
import styles from './vehiculeInfos.module.css';


function VehiculeInfos() {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");


    const HandleBrand =(e)=>{
        setBrand(e.target.value);
    }

    const HandleModel =(e)=>{
        setModel(e.target.value);
    }
    return (
        <div className={styles.vi_wrapper}>
            <p>Détails de mon véhicule</p>
            <form className={styles.vi_form_wrapper}>
                <select onChange={(e)=>HandleBrand(e)} value={brand}>
                    <option>Marque</option>
                </select>
                <select onChange={(e)=>HandleModel(e)} value={model}>
                    <option>Modèle</option>
                </select>
            </form>
            <button
          className={
            brand && model
              ? style.btn_visible
              : style.btn_hidden
          }
          disabled={brand && model? false : true}
          type="button"
        >
          Étape suivante
        </button>
        </div>
    )
}

export default VehiculeInfos;

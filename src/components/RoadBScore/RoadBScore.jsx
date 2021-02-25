import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RoadBScore.module.css";
import style from "../../css/main.module.css";

function RoadBScore() {
  const [rbscore, setRbscore] = useState("AAAAAAAAAAAAAAAAAAAA");

  const handleChange = (e) => {
    setRbscore(e.target.value);
  };

  return (
    <div className={styles.rbs_wrapper}>
      <div className={styles.rbs_contener}>
        <p>Pour bénéficier de l'assurance jeune conducteur</p>
        <p>vous devez passer le test Road-B-Score ®</p>
        <p className={styles.rbs_text_highlight}>Attention</p>
        <p>Tu n'as qu'un essai</p>
        <p>Le test dure environ 10 minutes</p>
        <p>Conserve bien le code qui va t'être donné</p>
        <p>Bon courage et à tout de suite !</p>
        <div className={styles.rbs_btn_test}>PASSER LE TEST</div>
        <span className={styles.rbs_span_breaker} />
        <p>Code de portabilité Road-B-Score ®</p>
        <form className={styles.rbs_form}>
          <label htmlFor="RBScore">
            <input
              className={styles.rbs_input_text}
              name="RBscore"
              type="text"
              value={rbscore}
              placeholder="ABCDEFG/+33600000000"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <Link to="/vehicule-condition" className={styles.rbs_link}>
            <input
              className={
                rbscore && rbscore.length === 20
                  ? style.btn_visible
                  : style.btn_hidden
              }
              type="submit"
              value="Continuer"
              disabled={rbscore && rbscore.length === 20 ? false : true}
            />
          </Link>
        </form>
        <p className={styles.rbs_text_center}>
          Note : Si vous avez réalisé le test il y a plus d'une heure vous devez
          réactiver le code en cliquant sur le lien reçu par SMS, puis sur
          "Obtenir le code portabilité"
        </p>
      </div>
    </div>
  );
}

export default RoadBScore;

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import IframeResizer from "iframe-resizer-react";

import styles from "./RoadBScore.module.css";
import style from "../../css/main.module.css";
import { HeaderContext } from "../../Contexts/headerContext";
import { PropositionContext } from "../../Contexts/PropositionContext";

function RoadBScore() {
  const { setHeader } = useContext(HeaderContext);
  const { proposition, setProposition } = useContext(PropositionContext);

  // je charge les infos de mon header en fonction du composant.

  useEffect(() => {
    setHeader({ path: "/", title: "Road-B-Score ®" });
  }, [setHeader, proposition.codeRBS]);


  const handleChange = (e) => {

    // je renseigne mon context qui me servira à faire mon envoi pour recevoir une proposition d'assurance
    setProposition({ ...proposition, codeRBS: e.target.value });
  };

  const RBSlink = "https://www.road-b-score.com/";

  return (
    <div className={styles.rbs_wrapper}>
      <div className={styles.rbs_contener}>
        <p>Pour bénéficier de l'assurance jeune conducteur</p>
        <p className={styles.rbs_p_nomarginB}>
          vous devez passer le test Road-B-Score ®
        </p>
        <p className={styles.rbs_text_highlight}>Attention</p>
        <p className={styles.rbs_p_nomargin}>Tu n'as qu'un essai</p>
        <p className={styles.rbs_p_nomargin}>Le test dure environ 10 minutes</p>
        <p className={styles.rbs_p_nomargin}>
          Conserve bien le code qui va t'être donné
        </p>
        <p className={styles.rbs_p_nomargin}>
          Bon courage et à tout de suite !
        </p>
        <a href={RBSlink}>
          <div className={styles.rbs_btn_test}>PASSER LE TEST</div>
        </a>
        <span className={styles.rbs_span_breaker} />
        <p>Code de portabilité Road-B-Score ®</p>
        <form className={styles.rbs_form}>
          <label htmlFor="RBScore">
            <input
              className={styles.rbs_input_text}
              name="RBScore"
              type="text"
              value={proposition?.codeRBS}
              placeholder="ABCDEFG/+33600000000"
              pattern="[A-Za-z]{7}/.[0-9]{11}"
              title="le code RBS est une combinaison du type ABCDEFG/+33600000000"
              onChange={(e) => handleChange(e)}
            />

            {/* je vérifie le corde RBS saisi afin qu'il corresponde au pattern, j'affiche le message d'erreur correspondant */}

            <span className={proposition?.codeRBS.length<20? style.error : proposition?.codeRBS.length>20 ? style.error : proposition?.codeRBS.match("[A-Za-z]{7}/+[0-9]{11}")? style.match:style.error }>{proposition?.codeRBS.length<20? "le code RBS est trop court" : proposition?.codeRBS.length>20 ? "le code RBS est trop long" : proposition?.codeRBS.match(`[A-Za-z]{7}/.[0-9]{11}`)? "":"le code RBS ne respecte pas le bon format" }</span>
          </label>
          <Link to="/vehicule-condition" className={styles.rbs_link}>
            <input
              className={
                proposition?.codeRBS?.length === 20
                  ? style.btn_visible
                  : style.btn_hidden
              }
              type="submit"
              value="Continuer"
              disabled={proposition?.codeRBS?.length === 20 ? false : true}
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

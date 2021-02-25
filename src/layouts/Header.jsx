import React from 'react';
import styles from './Header.module.css';

import arrow_back from '../assets/images/icon_back.png'

function Header() {
    return (
        <div className={styles.header_wrapper}>
            <img src={arrow_back} alt="fleche-retour"/>
            <p>nom de page</p>
        </div>
    )
}

export default Header;

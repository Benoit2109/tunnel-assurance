import React, { useContext } from 'react';
import {HeaderContext} from '../Contexts/headerContext';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import arrow_back from '../assets/images/icon_back.png'


function Header() {
    const {header} = useContext(HeaderContext);
    return (
        <div className={styles.header_wrapper}>
            <Link to={header && header.path}><img src={arrow_back} alt="fleche-retour"/></Link>
            <p>{header && header.title}</p>
        </div>
    )
}

export default Header;

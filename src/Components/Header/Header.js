import React from 'react'
import styles from './Header.module.css'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'


function Header() {

    return(
        <div className={`${styles.head_container} ${styles.sticky}`}>
            <div className={styles.head_row}>
                <div className={styles.head_col_logo}>
                    <Link to="/">
                        <img src = {logo} alt="logo.svg"/>
                    </Link>
                </div>
                <h1>Image Classification</h1>
                <Link to="/resnet">
                <button className={styles.btn_head_resnet}>resnet</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;
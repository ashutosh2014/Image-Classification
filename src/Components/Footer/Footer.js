import React from 'react'
import styles from './Footer.module.css'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'

function Footer() {
    return(
        <div className={`${styles.container} ${styles.sticky}`}>
                <div className={styles.row}>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.row_flex}>
                    <Link to="/">
                        <div className={styles.foot_col_logo}>
                            <img src = {logo} alt="logo.svg"/>
                        </div>
                        <h1>Image Classification</h1>
                    </Link>
                </div>    
            </div>
    )
}

export default Footer;
import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import styles from './Sidenav.module.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../../Assets/Logos/image.png';
const Sidenav = () => {
    return (
        <Aux>
            <div className={styles.Sidenav}>
            <img className={styles.Logo} src={Logo} alt="Logo"/>  
                <div className={styles.Options}>
                    <li><NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/tools'>&#127776; &nbsp; Tools</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/creative'>Creativity</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/home1'>Home</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/home2'>Home</NavLink></li>
                </div>
            </div>
        </Aux>
    )
}

export default Sidenav;
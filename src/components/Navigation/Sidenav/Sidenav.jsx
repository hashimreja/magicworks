import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import styles from './Sidenav.module.css';
import {NavLink} from 'react-router-dom';

const Sidenav = () => {
    return (
        <Aux>
            <div className={styles.Sidenav}>
                <div>Magic Works</div>
                <div className={styles.Options}>
                    <li><NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/tools'>&#128295; Tools</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/home'>Home</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/home1'>Home</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/home2'>Home</NavLink></li>
                </div>
            </div>
        </Aux>
    )
}

export default Sidenav;
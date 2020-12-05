import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import styles from './Sidenav.module.css';


const Sidenav = () => {
    return (
        <Aux>
            <div className={styles.Sidenav}>
                <div className={styles.Options}>
                    <li>Tools</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </div>
            </div>
        </Aux>
    )
}

export default Sidenav;
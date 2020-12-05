import React from 'react';
import styles from './Layout.module.css';
import Aux from '../Auxillary/Auxillary';
import Sidenav from '../../components/Navigation/Sidenav/Sidenav';
class Layout extends React.Component {
    render() {
        return (
            <Aux>
                <div className={styles.Flex}>
                <header>
                    <Sidenav/>
                </header>
                <main>{this.props.children}</main>
                </div>
            </Aux>
        )
    }
}

export default Layout;
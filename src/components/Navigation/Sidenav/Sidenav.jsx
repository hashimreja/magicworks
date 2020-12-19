import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import styles from './Sidenav.module.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../../Assets/Logos/image.png';

class Sidenav extends React.Component{
    state = {
        closemode : false
    }

    navModeHanlder = () => {
        this.setState({
            closemode : !this.state.closemode
        })
    }
    render(){
        let nav = null;
        if(!this.state.closemode){
            nav =  <div className={styles.Sidenav}>
                <div>
            <img className={styles.Logo} src={Logo} alt="Logo"/>
            <span className={styles.Arrow} onClick={this.navModeHanlder}>&#9776;</span>  
            </div>
                <div className={styles.Options}>
                    <li><NavLink activeClassName={styles.ActiveLink} className={styles.Link} to='/tools'>&#128824; &nbsp; Tools kit</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/creative'>&#128396; &nbsp; Creativity</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/chat'>&#128396; &nbsp; Chatroom</NavLink></li>
                    <li><NavLink className={styles.Link} activeClassName={styles.ActiveLink} to='/home2'>&#128396; &nbsp; Creativity</NavLink></li>
                </div>
            </div>
        }else{
            nav =  <div className={styles.SidenavClosed}>
            <div>
            <img className={styles.Logo} src={Logo} alt="Logo"/>
            <span className={styles.ArrowClosed} onClick={this.navModeHanlder}>&#9776;</span>  
            </div>
                <div className={styles.Options}>
                    <li><NavLink activeClassName={styles.ActiveLink} className={styles.LinkClosed} to='/tools'>&#128824; &nbsp;</NavLink></li>
                    <li><NavLink className={styles.LinkClosed} activeClassName={styles.ActiveLink} to='/creative'>&#128396; &nbsp;</NavLink></li>
                    <li><NavLink className={styles.LinkClosed} activeClassName={styles.ActiveLink} to='/home1'>&#128396; &nbsp;</NavLink></li>
                    <li><NavLink className={styles.LinkClosed} activeClassName={styles.ActiveLink} to='/home2'>&#128396; &nbsp;</NavLink></li>
                </div>
            </div>
        }
        return (
            <Aux>
               {nav}
            </Aux>
        )
    }
}

export default Sidenav;
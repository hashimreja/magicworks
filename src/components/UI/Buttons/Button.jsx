import styles from './Button.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';

const Button = (props) => {
    return(
        <Aux>
        <button className={styles.Button} {...props}>{props.children}</button>
        </Aux>
    )
}

export default Button;
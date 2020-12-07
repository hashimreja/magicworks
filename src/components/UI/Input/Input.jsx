import styles from './Input.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';

const Input = (props) => {
    return(
        <Aux>
            <input className={styles.Input} {...props}/>
        </Aux>
    )
}

export default Input;
import styles from './Tools.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import ImageMinifier from '../ImageMinifier/ImageMinifier';

const Tools = () => {
    return(
        <Aux>
            <div className={styles.Tools}>
                <ImageMinifier/>
            </div>
        </Aux>
    )
}

export default Tools;
import styles from './Tools.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import ImageMinifier from '../ImageMinifier/ImageMinifier';
import WordToPdf from '../WordToPdf/WordToPdf';
const Tools = () => {
    return(
        <Aux>
            <div className={styles.Tools}>
                <ImageMinifier/>
                <WordToPdf/>
            </div>
        </Aux>
    )
}

export default Tools;
import React from 'react';
import styles from './WordToPdf.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import Button from '../UI/Buttons/Button';
import Input from '../UI/Input/Input';



class WordToPdf extends React.Component {

    state = {
        file: null
    }
    handleFileUpload = (event) => {
        this.setState({ file: event.target.files[0] })
    }
    submitHandler =  () => {
        console.log('hereee')
    }
    render() {
        console.log(this.state.file)
        return (
            <Aux>
                <div className={styles.Container}>
                    <Input type="file" name="upload" accept="application/pdf,application/vnd.ms-excel" onChange={this.handleFileUpload} />
                    <Button onClick={this.submitHandler}>submit</Button>
                </div>
            </Aux>
        )
    }
}

export default WordToPdf;
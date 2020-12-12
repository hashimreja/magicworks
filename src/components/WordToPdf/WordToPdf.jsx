import React from 'react';
import styles from './WordToPdf.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import Button from '../UI/Buttons/Button';
import Input from '../UI/Input/Input';
import axios from 'axios';

class WordToPdf extends React.Component {

    state = {
        file: null,
        html: null,
        buttonName : 'copy HTML'
    }
    uploadImageHandler = () => {
        if (this.state.file) {
            const formdata = new FormData();
            formdata.append('Document', this.state.file)
            axios.post('/convert/html', formdata, { headers: { "Content-type": "multipart/form-data" } })
                .then(res => {
                    this.setState({ html: res.data.data });
                    document.execCommand()
                })
                .catch(error => {
                    console.log(error, 'error')
                })

        }
    }
    handleFileUpload = (event) => {
        this.setState({ file: event.target.files[0] })
    }
    copyToClipboard =  () => {

    var textField = document.createElement('textarea')
    textField.innerText = this.state.html
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    this.setState({buttonName : 'Copied!!'})
  }
    render() {
        let download = null;
        if (this.state.html) {
            download = <Button onClick={this.copyToClipboard}>{this.state.buttonName}</Button>
        }
        return (
            <Aux>
                <div className={styles.Container}>
                    <span>word to html &#128457;</span>
                    <Input type="file" name="upload" accept=".doc,.docx" onChange={this.handleFileUpload} />
                    <Button onClick={this.uploadImageHandler}>Get Html &#128388;</Button>
                    {download}
                </div>
            </Aux>
        )
    }
}

export default WordToPdf;
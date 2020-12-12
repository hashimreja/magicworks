import React from 'react';
import styles from './WordToPdf.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import Button from '../UI/Buttons/Button';
import Input from '../UI/Input/Input';
import axios from 'axios';

class WordToPdf extends React.Component {

    state = {
        file: null,
        html: null
    }
    uploadImageHandler = () => {
        if (this.state.file) {
            const formdata = new FormData();
            formdata.append('Document', this.state.file)
            axios.post('/convert/html', formdata, { headers: { "Content-type": "multipart/form-data" } })
                .then(res => {
                    this.setState({ html: res.data });
                })
                .catch(error => {
                    console.log(error, 'error')
                })

        }
    }
    handleFileUpload = (event) => {
        this.setState({ file: event.target.files[0] })
    }
    render() {
        let download = null;
        if (this.state.html) {
            download = <a className={styles.DownloadLink} href={this.state.html} download={'html_' + this.state.file.name}>Download File &#128462;</a>
        }
        return (
            <Aux>
                <div className={styles.Container}>
                    <span>Convert word to html &#128240;</span>
                    <Input type="file" name="upload" accept=".doc,.docx" onChange={this.handleFileUpload} />
                    <Button onClick={this.uploadImageHandler}>Get Html</Button>
                    {download}
                </div>
            </Aux>
        )
    }
}

export default WordToPdf;
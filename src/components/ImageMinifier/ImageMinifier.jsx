import React from 'react';
import styles from './ImageMinifier.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import imageCompression from 'browser-image-compression';
import Button from '../UI/Buttons/Button';
import Input from '../UI/Input/Input';

class ImageMinifier extends React.Component {
    state = {
        base64: null,
        targetFile : null,
    }

    handleImageUpload = (event) => {
        console.log(event, 'file eventtt')
        this.setState({targetFile : event.target.files[0]});
    }

    imageCompressHandler = (event) => {
        var imageFile = event;
        var options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }
        imageCompression(imageFile, options)
            .then(compressedFile => {
                var reader = new FileReader();
                reader.readAsDataURL(compressedFile);
                reader.onloadend = () => {
                    var base64data = reader.result;
                    this.setState({ base64: JSON.stringify(base64data) })
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    render() {
        let download = null;
        if (this.state.base64 != null) {
            download = <a className={styles.DownloadLink} href={JSON.parse(this.state.base64)} download={'compressed_' + this.state.targetFile.name}>Download File &#128462;</a>
        }
        return (
            <Aux>
                <div className={styles.ImageMinifier}>
                <span>Compress your images &#128240;</span>
                <Input type="file" accept="image/*" onChange={this.handleImageUpload}  />
                <Button  onClick={() => this.imageCompressHandler(this.state.targetFile)}>Compress &#128497;</Button>
                {download}
                </div>
            </Aux>
        )
    }
}

export default ImageMinifier;
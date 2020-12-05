import React from 'react';
// import styles from './ImageMinifier.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import imageCompression from 'browser-image-compression';


class ImageMinifier extends React.Component {
    state = {
        base64: null,
        targetFile : null,
    }

    handleImageUpload = (event) => {
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
            download = <a href={JSON.parse(this.state.base64)} download='compressedfile.jpeg'>Download File</a>
        }
        return (
            <Aux>
                <input type="file" accept="image/*" onChange={this.handleImageUpload} />
                <button onClick={() => this.imageCompressHandler(this.state.targetFile)}>Compress</button>
                {download}
            </Aux>
        )
    }
}

export default ImageMinifier;
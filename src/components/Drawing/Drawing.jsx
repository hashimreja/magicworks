import React from 'react';
import styles from './Drawing.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';

class Drawing extends React.Component {
    state = {
        value : null
    }
    componentWillMount = () => {
        window.addEventListener('load', () => {
            //selecting the element
            const canvas = document.querySelector("#canvas");
            const ctx = canvas.getContext("2d")
            //resizing
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            let painting = false;
            function startPainting() {
                painting = true;
            };
            function stopPainting() {
                painting = false;
                ctx.beginPath();
            }
            
            const paint = (e) => {
                if (!painting) return;
                var rect = canvas.getBoundingClientRect();
                var x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
                var y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
                ctx.lineWidth = "7";
                ctx.lineCap = "round";
                ctx.strokeStyle = this.state.value;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y)
            }
            canvas.addEventListener("mousedown", startPainting);
            canvas.addEventListener("mouseup", stopPainting);
            canvas.addEventListener("mousemove", paint);
        })
    }
    colorHandler = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    render() {
        return (
            <Aux>
                <div>
                    <div className={styles.Color}>
                    <h2>&nbsp;Unleash your Imagination</h2>  
                    <input type="color" onInput={this.colorHandler}/>          
                    </div>
                    <canvas id="canvas" className={styles.Canvas}></canvas>
                </div>

            </Aux>
        )
    }
}

export default Drawing;
import React from 'react';
import styles from './Drawing.module.css';
import Aux from '../../hoc/Auxillary/Auxillary';

class Drawing extends React.Component {
    state = {
        value : null,
        pen : false
    }
    componentDidMount = () => {
            //selecting the element
            console.log('loading')
            const canvas = this.refs.canvas;
            const ctx = canvas.getContext("2d");
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
                if(this.state.pen){
                ctx.globalCompositeOperation="source-over";
                ctx.lineWidth = "7";
                ctx.lineCap = "round";
                ctx.strokeStyle = this.state.value;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y)
                }else{
                    ctx.globalCompositeOperation="destination-out";
                    ctx.arc(x,y,8,0,Math.PI*2,false);
                    ctx.fill();
                }
            }
            canvas.addEventListener("mousedown", startPainting);
            canvas.addEventListener("mouseup", stopPainting);
            canvas.addEventListener("mousemove", paint);
    }
    colorHandler = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    eraserHandler = () => {
        this.setState({pen : !this.state.pen})
    }
    render() {
        return (
            <Aux>
                <div>
                    <div className={styles.Color}>
                    <h2>&nbsp;Unleash your Imagination</h2>  
                    <input type="color" onInput={this.colorHandler} onClick={this.eraserHandler}/>
                    <h2 className={styles.Eraser} onClick={this.eraserHandler}>Eraser</h2>        
                    </div>
                    <canvas ref="canvas"width={1920} height={1920} className={styles.Canvas}></canvas>
                </div>
            </Aux>
        )
    }
}

export default Drawing;
import React, {Component} from 'react';
import "./memoryBox.css";

const numBoxes = 16;

//stateless functional component
const Box = (props) => {  //destructure because we only have one prop, take color out of props object
    //return JSX
    const style = {
        width: '150px',
        height: '150px',
        backgroundColor: props.color //going to use a color passed in from a prop
    }
    return <div style={style}></div>
};

class MemoryBox extends Component {
    constructor(props) {
        super(props);
        const initialColor = Array(numBoxes/2).fill().map((box, index) => { return {color: this.generateColor(), id: index, show: false}})// didnt want a hard coded 32 boxes
        const boxes = this.shuffle([...initialColor.concat(initialColor)]);
        this.state = {boxes};
    }
    generateColor() {
        let randomColor = "#" +Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log(array)
        return array;
    }

    render () {
        const boxes = this.state.boxes.map((box, index) => (
            <Box 
            key={index}
            color={box.color}
            id={box.id}
            show={box.show}
            />
        ));
        return (
                <div className="memory-boxes">
                    {boxes}
                 </div>
        )

    }
}

export default MemoryBox;
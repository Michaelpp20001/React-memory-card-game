import React, {Component} from 'react';
import "./memoryBox.css";

const numBoxes = 16;

//stateless functional component
const Box = ({color}) => {  //destructure because we only have one prop, take color out of props object
    //return JSX
    const style = {
        width: '150px',
        height: '150px',
        backgroundColor: color //going to use a color passed in from a prop
    }
    return <div style={style}></div>
};

class MemoryBox extends Component {
    constructor(props) {
        super(props);
        const colors = Array(numBoxes/2).fill().map(this.generateColor, this);// didnt want a hard coded 32 boxes
        const boxes = this.shuffle([...colors.concat(colors)]);
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
        return array;
    }

    render () {
        const boxes = this.state.boxes.map((color, index) => (
            <Box 
            key={index}
            color={color}
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
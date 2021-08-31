import React, { useState } from 'react';
import './ColorBox.scss'
ColorBox.propTypes = {
};
const getRandomColor = () => {
    const COLOR_LIST = ['blue', 'red', 'violet', 'yellow', 'brown'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}
function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'green';
        console.log(initColor);
        return initColor;
    });

    const handleChangedBackgound = () => {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box-color', newColor);
    }
    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleChangedBackgound}
        >
        </div>

    );
}

export default ColorBox;
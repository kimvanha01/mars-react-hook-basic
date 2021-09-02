import { useEffect, useRef, useState } from "react";

const getRandomColor = (currentColor) => {
    const COLOR_LIST = ['blue', 'red', 'violet', 'yellow', 'brown'];
    //random 0 -> 4

    const currentIndex = COLOR_LIST.indexOf(currentColor);

    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 5);
    }


    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');

    const colorRef = useRef(color);

    // Change color every 1 second

    useEffect(() => {
        const colorInterval = setInterval(() => {
            //change color
            const newColor = getRandomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            //clean up
            clearInterval(colorInterval);
        }
    }, [])
    return color;
}

export default useMagicColor;
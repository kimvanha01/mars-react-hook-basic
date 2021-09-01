import React, { useEffect, useState } from 'react';
import './Clock.scss';
Clock.propTypes = {

};
const formatDate = (date) => {
    if (!date) return;

    const hours = `0${date.getHours()}`.slice(-2);
    const mins = `0${date.getMinutes()}`.slice(-2);
    const secs = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${mins}:${secs}`;
}
function Clock(props) {

    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            //HH:mm:ss

            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            //clean up
            console.log('Clean up');
            clearInterval(clockInterval);
        }
    }, [])

    return (
        <div className="clock">
            <p >{timeString}</p>
        </div>
    );
}

export default Clock;
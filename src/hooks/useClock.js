import { useEffect, useState } from 'react'; // khong render jsx nen khong can import React

const formatDate = (date) => {
    if (!date) return;

    const hours = `0${date.getHours()}`.slice(-2);
    const mins = `0${date.getMinutes()}`.slice(-2);
    const secs = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${mins}:${secs}`;
}
function useClock() {

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
    }, []);


    return { timeString }; // return du lieu
}

export default useClock;
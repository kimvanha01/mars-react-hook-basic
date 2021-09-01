import React from 'react';
import useClock from '../../hooks/useClock';

import './Clock.scss';
Clock.propTypes = {

};

function Clock() {

    const { timeString } = useClock();

    return (
        <div className="clock">
            <p >{timeString}</p>
        </div>
    );
}

export default Clock;
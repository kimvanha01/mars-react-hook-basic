import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name: PropTypes.string,
};
Hero.defaultProps = {
    name: ''
}

function Hero(props) {
    const { name } = props;
    console.log("Hero render:", name);
    return (
        <div>
            Hero's name : {name}
        </div>
    );
}

export default React.memo(Hero); // khong render lai sau moi lan app render lai
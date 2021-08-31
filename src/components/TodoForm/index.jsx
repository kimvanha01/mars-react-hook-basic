import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null
}
function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        //Prevent reloading browser
        e.preventDefault(); // ngăn browser reload khi submit

        if (!onSubmit) return;

        const formValues = {
            title: value,
            //...
        };
        onSubmit(formValues);

        //reset form
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleChangeValue}
            />
        </form>
    );
}

export default TodoForm;
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {

    const { onSubmit } = props;
    const [searchTerm, setSeacrchTerm] = useState('');

    //ky thuat debounce
    const typingTimeoutRef = useRef(null); // gia tri khoi tao = null, tao ra 1 object, gia tri khong thay doi sau moi lan render

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSeacrchTerm(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) { // xoa timeout trc do' sau moi lan go 
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value // lay gia tri moi
                //...
            };
            onSubmit(formValues);
        }, 300);


    }
    // const handleSubmit = (e) => {
    //     //Prevent reloading browser
    //     e.preventDefault(); // ngăn browser reload khi submit



    //     //reset form
    //     setValue('');
    // }
    return (

        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
            Search
        </form>
    );
}

export default PostFilterForm;
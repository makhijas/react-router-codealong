import React from 'react';

const Contacts = (props) => {
    return (
        <div>
            <h1>Swati Makhija AKA {props.dentist}</h1>
            <p>Location: Seattle</p>
            <p>Number: 888-888-8888</p>
        </div>
    );
}

export default Contacts;

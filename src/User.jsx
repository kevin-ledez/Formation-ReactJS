import React from 'react';

function User(props) {
    return (
        <>
            <h1>Mon nom est {props.name}</h1>
            <p>Je suis {props.expertise}</p>
        </>
    )
}

export default User;
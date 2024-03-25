import React from 'react';

function ButtonSecondary({text, onClick, className = ""}) {
    return (
        <button onClick={onClick} className={`button-secondary ${className}`}>{text}</button>
    );
}

export default ButtonSecondary;
import React from 'react';

function ButtonPrimary({text, onClick, className = ""}) {
    return (
        <button onClick={onClick} className={`button-primary ${className}`}>{text}</button>
    );
}

export default ButtonPrimary;
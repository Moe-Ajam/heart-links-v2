import React from 'react';

function Spinner({color, size}) {
    return (
        <div className="flex justify-center items-center">
            <div className={`animate-spin rounded-full h-${size || '3'} w-${size || '3'} border-b-2 ml-2 border-${color || 'white'}`}></div>
        </div>
    );
}

export default Spinner;
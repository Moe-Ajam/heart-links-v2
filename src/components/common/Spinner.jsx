import React from 'react';

function Spinner(props) {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 ml-2 border-white"></div>
        </div>
    );
}

export default Spinner;
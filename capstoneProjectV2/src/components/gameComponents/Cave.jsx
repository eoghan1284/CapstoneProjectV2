import React from 'react';
import './styles/Cave.css'; 

const handleCaveClick = () => {
    console.log("cave clicked");
};


const Cave = () => {
    return (
        <div id='caveContainer'onClick={() => handleCaveClick()}>
            <div>
                CAVE
            </div>
        </div>
    );
};

export default Cave;


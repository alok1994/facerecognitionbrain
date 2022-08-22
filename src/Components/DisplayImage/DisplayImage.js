import React from "react";


const DisplayImage = ({ imageUrl }) => {
    return (
        <div>
            <img alt='' src={ imageUrl}/>
        </div>
    );
}

export default DisplayImage;

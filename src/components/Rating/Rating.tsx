import React from "react";

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log('Star rendering')
    return <span><b>star </b></span>
}

export default Rating;
import React from "react";

function Menuitems( {image, name, price}) {

    return (

        <div className="menuitems">
            <div>
                sytle = {{backgroundImage : `url (${Image})`}}
            </div>

            <h1> {name}</h1>
            <p> ${price}</p>
        </div>
    )
}

export default Menuitems;

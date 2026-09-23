import React from "react";

import "./Avatar.css";


function Avatar({
                    initials
                }){


    return (

        <div className="avatar">

            {initials}

        </div>

    );


}


export default Avatar;
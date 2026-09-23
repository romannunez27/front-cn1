import React from "react";

import "./Card.css";


function Card({
                  children,
                  title
              }){


    return (

        <div className="card-custom">


            {
                title &&
                <div className="card-title">

                    {title}

                </div>
            }


            <div className="card-body">

                {children}

            </div>


        </div>


    );


}


export default Card;
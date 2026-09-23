import React from "react";

import "./Input.css";


function Input({

                   label,

                   name,

                   type="text",

                   value,

                   onChange,

                   placeholder,

                   required=false

               }){


    return (

        <div className="input-container">


            <label
                htmlFor={name}
                className="input-label"
            >

                {label}

            </label>



            <input

                id={name}

                name={name}

                type={type}

                value={value}

                onChange={onChange}

                placeholder={placeholder}

                required={required}

                className="form-control"

            />


        </div>


    );


}


export default Input;
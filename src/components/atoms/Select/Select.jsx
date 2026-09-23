import React from "react";

import "./Select.css";


function Select({

                    label,

                    name,

                    value,

                    onChange,

                    options=[],

                    placeholder="Seleccione..."

                }){


    return (

        <div className="select-container">


            <label

                htmlFor={name}

                className="select-label"

            >

                {label}

            </label>



            <select

                id={name}

                name={name}

                value={value}

                onChange={onChange}

                className="form-select"

            >


                <option value="">

                    {placeholder}

                </option>



                {

                    options.map(option => (


                        <option

                            key={option.id}

                            value={option.id}

                        >

                            {option.nombre}

                        </option>


                    ))

                }


            </select>


        </div>


    );


}


export default Select;
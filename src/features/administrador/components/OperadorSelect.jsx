import React from "react";

import Select
    from "../../../components/atoms/Select/Select";


function OperadorSelect({

                            operadores=[],

                            value,

                            onChange

                        }){


    return (

        <Select

            label="Asignar operador"

            name="operador"

            value={value}

            onChange={onChange}

            options={operadores}

        />

    );


}


export default OperadorSelect;
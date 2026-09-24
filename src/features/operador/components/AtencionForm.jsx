import React from "react";


import Button
    from "../../../components/atoms/Button/Button";


function AtencionForm({

                          detalle,

                          onChange,

                          onSubmit,

                          onCancel

                      }){


    return (

        <form onSubmit={onSubmit}>


            <div className="mb-3">


                <label className="form-label">

                    Detalle de atención

                </label>



                <textarea

                    className="form-control"

                    rows="4"

                    value={detalle}

                    onChange={onChange}

                    placeholder="Ingrese la atención realizada"

                    required

                />


            </div>



            <Button

                type="submit"

            >

                Guardar atención

            </Button>



            <Button

                variant="secondary"

                onClick={onCancel}

            >

                Cancelar

            </Button>


        </form>

    );


}


export default AtencionForm;
import React from "react";


import Card from "../../../components/atoms/Card/Card";

import Input from "../../../components/atoms/Input/Input";

import Select from "../../../components/atoms/Select/Select";

import Button from "../../../components/atoms/Button/Button";



function SolicitudForm({

                           formData,

                           onChange,

                           onSubmit,

                           categorias,

                           prioridades

                       }){


    return (

        <Card

            title="Nueva solicitud"

        >


            <form onSubmit={onSubmit}>


                <Input

                    label="Título"

                    name="titulo"

                    value={formData.titulo}

                    onChange={onChange}

                    placeholder="Ingrese el título"

                    required

                />



                <Input

                    label="Descripción"

                    name="descripcion"

                    value={formData.descripcion}

                    onChange={onChange}

                    placeholder="Describa la solicitud"

                    required

                />



                <Select

                    label="Categoría"

                    name="categoriaId"

                    value={formData.categoriaId}

                    onChange={onChange}

                    options={categorias}

                />



                <Select

                    label="Prioridad"

                    name="prioridadId"

                    value={formData.prioridadId}

                    onChange={onChange}

                    options={prioridades}

                />



                <Button

                    type="submit"

                >

                    Crear solicitud

                </Button>


            </form>


        </Card>


    );


}


export default SolicitudForm;
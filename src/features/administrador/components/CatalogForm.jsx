import React from "react";

import Card
    from "../../../components/atoms/Card/Card";

import Input
    from "../../../components/atoms/Input/Input";

import Button
    from "../../../components/atoms/Button/Button";

function CatalogForm({

                         titulo,

                         formData,

                         onChange,

                         onSubmit,

                         onCancel

                     }){

    return (

        <Card title={titulo}>

            <form onSubmit={onSubmit}>

                <Input

                    label="Nombre"

                    name="nombre"

                    value={formData.nombre}

                    onChange={onChange}

                    required

                />
                <Input

                    label="Descripción"

                    name="descripcion"

                    value={formData.descripcion}

                    onChange={onChange}

                    required

                />

                <div className="form-check mb-3">
                    <input

                        className="form-check-input"

                        type="checkbox"

                        name="activo"

                        checked={formData.activo}

                        onChange={onChange}

                    />
                    <label className="form-check-label">
                        Activo
                    </label>

                </div>

                <Button
                    type="submit"
                >
                    Guardar

                </Button>

                {
                    onCancel && (
                        <Button
                            variant="secondary"
                            onClick={onCancel}
                        >
                            Cancelar
                        </Button>
                    )
                }
            </form>

        </Card>
    );
}
export default CatalogForm;
import React from "react";
function EstadoSelector({
                            value,
                            onChange
                        }){
    return (
        <select
            className="form-select"
            value={value}
            onChange={onChange}
        >
            <option value="">
                Seleccionar estado
            </option>

            <option value="EN_PROCESO">
                En proceso
            </option>
            <option value="RESUELTA">
                Resuelta
            </option>
            <option value="CERRADA">
                Cerrada
            </option>
        </select>
    );
}
export default EstadoSelector;
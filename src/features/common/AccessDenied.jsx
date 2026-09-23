function AccessDenied(){


    return (
        <div className="alert alert-danger">

            <h3>
                Acceso restringido
            </h3>
            <p>
                No tienes permisos para acceder a esta sección.
            </p>
        </div>
    );
}
export default AccessDenied;
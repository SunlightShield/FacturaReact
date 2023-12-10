export const CompanyView = ({company}) => {
    return (

        <>
            <h3>Datos Empresa</h3>
            <ul className="list-group">
                <li className="list-group-item">Nombre de la Empresa: {company.name} </li>
                <li className="list-group-item">Rut de la Empresa: {company.RutEmpresa} </li>
            </ul>
        </>
    )

}
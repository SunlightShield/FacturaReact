



export const ClientView = ({cliente }) => {
    const{name: name, lastname, address} = cliente
    const{country, city, street, number} = address


    return (

        <>

            <ul className="list-group">
                <li className="list-group-item">Nombre del Cliente: {name} </li>
                <li className="list-group-item">Apellido del Cliente: {lastname}</li>
                <li className="list-group-item">Direccion del Cliente: {country}</li>
                <li className="list-group-item">Direccion del Cliente: {city}</li>
                <li className="list-group-item">Direccion del Cliente: {street}</li>
                <li className="list-group-item">Direccion del Cliente: {number}</li>
            </ul>

        </>



    )
}

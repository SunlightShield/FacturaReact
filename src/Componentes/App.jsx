import { Getdata } from "../Servicios/Getdata";
export const App = () => {

    const { id, name, cliente, company, items } = Getdata();
    return (
        <>

            <ul>
                <li>Id: {id} </li>
                <li>Cliente: {name}</li>
            </ul>

            <h3>Datos Cliente</h3>

            <ul>
                <li>Nombre del Cliente: {cliente.name} </li>
                <li>Apellido del Cliente: {cliente.lastname}</li>
                <li>Direccion del Cliente: {cliente.address.country}</li>
                <li>Direccion del Cliente: {cliente.address.city}</li>
                <li>Direccion del Cliente: {cliente.address.street}</li>
                <li>Direccion del Cliente: {cliente.address.number}</li>
            </ul>

            <h3>Datos Empresa</h3>

            <ul>
                <li>Nombre de la Empresa: {company.name} </li>
                <li>Rut de la Empresa: {company.RutEmpresa} </li>
            </ul>

            <h4>Productos</h4>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({id, product, price, quantity}) => {
                        return (
                            <tr key={id}>
                                <td>{product}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )

}
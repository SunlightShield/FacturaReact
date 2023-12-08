import { Getdata } from "../Servicios/Getdata";
import { ClientView } from "./ClientView";
import { InvoiceView } from "./InvoiceView";


export const App = () => {

    const { id, name, cliente, company, items } = Getdata();
    return (
        <>


            <div className="container">

                <div className="card my-3">

                
                    
                    <div className="card-header">
                        Factura Dinamica
                    </div> 

                    <div className="card-body">
                    <InvoiceView id={id} name={name}/>

                    <div className="row my-4">

                        <div className="col">
                            <h3>Datos Cliente</h3>

                        <ClientView cliente={cliente}/>
                        </div>

                        <div className="col">
                            <h3>Datos Empresa</h3>

                            <ul className="list-group">
                                <li className="list-group-item">Nombre de la Empresa: {company.name} </li>
                                <li className="list-group-item">Rut de la Empresa: {company.RutEmpresa} </li>
                            </ul>
                        </div>

                    </div>

                    <h4 className="mt-2">Productos</h4>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map(({ id, product, price, quantity }) => {
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
                    </div>
                </div>
            </div>
        </>

    )

}
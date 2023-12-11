import { Getdata } from "./Servicios/Getdata";
import { ClientView } from "./Componentes/ClientView";
import { CompanyView } from "./Componentes/CompanyView";
import { InvoiceView } from "./Componentes/InvoiceView";
import { TableView } from "./Componentes/TableView";
import { TotalView } from "./Componentes/TotalView";


export const App = () => {

    const { totalFactura, id, name, cliente, company, items } = Getdata();
    return (
        <>


            <div className="container">

                <div className="card my-3">
                    <div className="card-header">
                        Factura Dinamica
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} /> 
                        <div className="row my-4">
                            <div className="col">
                                <h3>Datos Cliente</h3>
                                <ClientView cliente={cliente} />
                            </div>

                            <div className="col">
                                <CompanyView company={company} />
                            </div>
                        </div>

                        <TableView items={items} />
                        <TotalView totalFactura={totalFactura} />
                    </div>
                </div>
            </div>
        </>

    )

}
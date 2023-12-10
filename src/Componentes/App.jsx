import { Getdata } from "../Servicios/Getdata";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { TableView } from "./TableView";


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
                            <CompanyView company={company}/>
                        </div>
                    </div>

                    <TableView items={items}/>

                    </div>
                </div>
            </div>
        </>

    )

}
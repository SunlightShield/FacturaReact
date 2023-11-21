import {Getdata} from "../Servicios/Getdata";
export const App = () => {

const invoice = Getdata();
return( 
<>
<h1>asdf</h1>
    <ul>
        <li>Id: {invoice.id} </li>
        <li>Cliente: {invoice.name}</li>
    </ul>
</>

)

}
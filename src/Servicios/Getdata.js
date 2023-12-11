import {invoice} from "../data/invoice"

// aca vamos a calcular el total
export const Getdata = () =>{

    // let totalFactura = 0
    // invoice.items.forEach(item =>{
    //     totalFactura = totalFactura + item.price * item.quantity;
    // })


    const totalFactura = invoice.items.map(items=>items.price * items.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    return {...invoice, totalFactura};
    

}


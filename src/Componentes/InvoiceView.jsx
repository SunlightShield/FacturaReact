



export const InvoiceView = ({ id, name }) => {
    return (

        <>

            <ul className="list-group">
                <li className="list-group-item">Id: {id} </li>
                <li className="list-group-item">Cliente: {name}</li>
            </ul>

        </>



    )
}

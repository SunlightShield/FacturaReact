export const RowView = ({ product, price, quantity }) => {

    return (

        <>

            <tr>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>

        </>

    )

}
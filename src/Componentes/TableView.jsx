import { RowView } from "./RowView"

export const TableView = ({items}) => {
    return (
        <>
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
                            <RowView key={id} product={product} price={price} quantity={quantity}/>
                        )
                    })}
                </tbody>
            </table>

        </>


    )
}
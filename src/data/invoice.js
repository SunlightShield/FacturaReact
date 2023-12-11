
export const invoice = {
    id: 10,
    name: 'Generico',
    client: {
        name: 'anon',
        lastName: 'anon',
        address: {
            country: 'Chile',
            city: 'Santiago',
            street: 'CalleFalsa',
            number: 123
        }
    },
    company: {
        name: 'Nombre Generico',
        fiscalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'Mesa',
            price: 123,
            quantity: 1,
        },
        {   id: 2,
            product: 'Producto Random',
            price: 321,
            quantity: 2,
        },
        {
            id: 3,
            product: 'Monitor',
            price: 345,
            quantity: 1,
        },
    ]
}
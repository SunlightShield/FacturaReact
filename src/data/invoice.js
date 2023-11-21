export const invoice = {

    id: 1,
    name: "productos",
    cliente: {
        name: "seba",
        lastname: "anon",
        address: {
            country: "Chile",
            city: "Santiago",
            street: "calleFalsa",
            number: "123"
        }
    },
    company: {
        name: "generico",
        RutEmpresa: 123456,
    },
    items: [
        {
            product: "producto1",
            price: 1000,
            quantity: 1,
        },
        {
            product: "producto2",
            price: 2000,
            quantity: 1,
        },
        {
            product: "producto3",
            price: 3000,
            quantity: 1,
        }
    ]

}
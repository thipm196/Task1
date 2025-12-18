export interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    isPrescription: boolean,
}

export interface CartItem extends Product{
    qty: number,
}
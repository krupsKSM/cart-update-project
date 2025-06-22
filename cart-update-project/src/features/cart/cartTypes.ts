export interface CartItem  {
    id: string,
    name: string,
    price: number,
    quantity: number,
}

// Define the entire cart state structure
export interface CartState {
    items: CartItem[],
}
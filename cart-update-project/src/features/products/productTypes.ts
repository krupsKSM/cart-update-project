export interface Product{
    id: string
    name: string
    price: number
    image?: string
}

// Redux state: list of products + loading/error flags
export interface ProductState{
    products : Product[]
    loading: boolean
    error: string | null
}
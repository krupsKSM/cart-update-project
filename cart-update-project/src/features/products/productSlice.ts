import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product, ProductState } from "./productTypes";
import axios from "axios";

// initial product state    
const initialState: ProductState = {
    products: [],
    loading: false ,
    error: null,
}

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async() => {
        const res = await axios.get<ApiProduct[]>('https://fakestoreapi.com/products')

        return res.data.map((item: any)=>({
            id: item.id.toString,
            name: item.title,
            price: item.price,
            image: item.image,

        }))
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}, // No sync reducers for now

    // extraReducers: handles async thunk actions
    extraReducers: builder =>{
        builder
        .addCase(fetchProducts.pending, (state) =>{
            state.loading = true
            state.error = null
        })

        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message || "Failed to fetch Products"
        })
    },
})

export default productSlice.reducer
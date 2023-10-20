import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(baseUrl)
  return response.data
})

const initialState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
  }
})

export default productsSlice.reducer

export const selectAllProducts = state => state.products.products

export const selectProductById = (state, productId) => state.products.products.find(product => (product.id).toString() === productId)

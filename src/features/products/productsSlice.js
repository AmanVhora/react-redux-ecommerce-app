import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(baseUrl)
  return response.data
})

export const addNewProduct = createAsyncThunk('products/addNewProducts', async initialProduct => {
  const response = await axios.post(baseUrl, initialProduct)
  return response.data
})

export const editProduct = createAsyncThunk('products/editProducts', async initialProduct => {
  const { id } = initialProduct
  const response = await axios.put(`${baseUrl}/${id}`, initialProduct)
  return response.data
})

export const deleteProduct = createAsyncThunk('products/deleteProducts', async initialProduct => {
  const { id } = initialProduct
  const response = await axios.delete(`${baseUrl}/${id}`)
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
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const { id, title, price, category, description, image } = action.payload
        const product = state.products.find(p => p.id === id)

        if (product) {
          product.title = title
          product.price = price
          product.category = category
          product.description = description
          product.image = image
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { id } = action.payload
        state.products = state.products.filter(p => p.id !== id)
      })
  }
})

export default productsSlice.reducer

export const selectAllProducts = state => state.products.products

export const selectProductById = (state, productId) => state.products.products.find(product => (product.id).toString() === productId)

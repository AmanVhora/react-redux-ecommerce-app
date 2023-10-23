import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://fakestoreapi.com'

export const userLogin = createAsyncThunk("users/userLogin", async (loginData) => {
  const response = await axios.post(`${baseUrl}/auth/login`, loginData)
  return response.data
})

export const userRegister = createAsyncThunk("users/userRegister", async (userData) => {
  const response = await axios.post(`${baseUrl}/users`, userData)
  return response.data
})

const initialState = {
  user: null,
  isAuthenticated: false
}

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userLogout(state) {
      state.user = null
      state.isAuthenticated = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
  }
})

export default UsersSlice.reducer
export const { userLogout } = UsersSlice.actions

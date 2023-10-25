import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://fakestoreapi.com'

export const userLogin = createAsyncThunk("users/userLogin", async (loginData) => {
  const response = await axios.post(`${baseUrl}/auth/login`, loginData)
  return response.data
})

export const userRegister = createAsyncThunk("users/userRegister", async (data) => {
  const response = await axios.post(`${baseUrl}/users`, data)
  return response.data
})

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get(`${baseUrl}/users`)
  return response.data
})

const initialState = {
  users: [],
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
      .addCase(userRegister.fulfilled, (state, action) => {
        state.users.push(action.payload)
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
  }
})

export default UsersSlice.reducer
export const { userLogout } = UsersSlice.actions

export const userLoggedIn = (state) => state.users.user !== null
export const currentUser = (state) => state.users.users.find(user => userLoggedIn)

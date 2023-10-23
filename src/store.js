import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './features/products/productsSlice'
import UsersReducer from './features/users/usersSlice'
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: UsersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})

export default store

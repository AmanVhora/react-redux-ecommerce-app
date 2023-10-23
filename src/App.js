import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsList } from './features/products/productsList';
import { SingleProduct } from './features/products/singleProduct';
import { AddProductForm } from './features/products/addProduct';
import { EditProductForm } from './features/products/editProduct';
import { LoginPage } from './features/users/loginPage';
import Navbar from './navbar';
import { SignupPage } from './features/users/signupPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className='container mt-3'>
            <Routes>
              <Route exact path='/' Component={ProductsList} />
              <Route exact path='/products/:productId' Component={SingleProduct} />
              <Route exact path='/products/new' Component={AddProductForm} />
              <Route exact path='/products/:productId/edit' Component={EditProductForm} />
              <Route exact path='/login' Component={LoginPage} />
              <Route exact path='/signup' Component={SignupPage} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

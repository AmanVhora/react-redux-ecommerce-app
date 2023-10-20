import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsList } from './features/products/productsList';
import { SingleProduct } from './features/products/singleProduct';
import { AddProductForm } from './features/products/addProduct';
import { EditProductForm } from './features/products/editProduct';

function App() {
  return (
    <div className='container mt-3'>
      <Router>
        <Routes>
          <Route exact path='/' Component={ProductsList} />
          <Route exact path='/products/:productId' Component={SingleProduct} />
          <Route exact path='/products/new' Component={AddProductForm} />
          <Route exact path='/products/:productId/edit' Component={EditProductForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

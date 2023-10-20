import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsList } from './features/products/productsList';
import { SingleProduct } from './features/products/singleProduct';

function App() {
  return (
    <div className='container mt-3'>
      <Router>
        <Routes>
          <Route exact path='/' Component={ProductsList} />
          <Route exact path='/products/:productId' Component={SingleProduct} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

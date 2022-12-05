import React from 'react';
import Navigation from './components/Navigation';  
 
import Footer from './components/Footer';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './pages_crud/Products';
import ProductsContainer from './pages_crud/Products';
 
import MainProductsPage from './pages/productsPage';
import MainProductsDetails from './pages/productDetails';
 

import Crud from './pages_crud/Crud';
import MainHomePage from './pages/homePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 

          <Route path='/' element={<MainHomePage/>}/>
          <Route path='/products' element={<MainProductsPage/>}/>
          <Route path='/products/details/:id' element={<MainProductsDetails/>}/> 
          <Route path='/crud' element={<Crud/>}/> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Route path='/add' element={<Add/>}/>
<Route path='/update' element={<Update/>}/>
<Route path='/delete' element={<Delete/>}/>  */}
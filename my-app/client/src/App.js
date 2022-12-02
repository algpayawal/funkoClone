import React from 'react';
import Navigation from './components/Navigation';  
import ProjectPage from './pages/projectpage';
import Footer from './components/Footer';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Add from './pages_crud/Add';
import Products from './pages_crud/Products';
import Update from './pages_crud/Update';
import ProductsContainer from './pages_crud/Products';


function App() {
  return (
    <div className="App">
      {/* <Navigation/>
      <ProjectPage/>
      <Footer/> */}

      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<ProductsContainer/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react'
import {
  Routes,
  Route
}
  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './pages/ProductList';
import Add from './pages/ProductAdd';
import Footer from './components/footer'

import './sass/App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Product />} />
          <Route path="/Add" element={<Add />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

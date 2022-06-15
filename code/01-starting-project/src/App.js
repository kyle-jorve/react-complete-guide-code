import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<h2>You must be new here</h2>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

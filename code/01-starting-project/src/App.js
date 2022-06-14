import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>
          
          <Route path="/products" exact>
            <Products />
          </Route>
          
          <Route path="/products/:productID">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

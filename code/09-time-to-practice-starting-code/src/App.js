import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AddQuote = React.lazy(() => {
  return import('./pages/AddQuote');
});
const QuoteDetail = React.lazy(() => {
  return import('./pages/QuoteDetail');
});
const NotFound = React.lazy(() => {
  return import('./pages/NotFound');
});

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"/>
          </Route>
          
          <Route path="/quotes" exact>
            <AllQuotes/>
          </Route>

          <Route path="/quotes/:quoteID">
            <QuoteDetail/>
          </Route>

          <Route path="/new-quote">
            <AddQuote/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

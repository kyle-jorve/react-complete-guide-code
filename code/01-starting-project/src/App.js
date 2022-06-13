import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const authenticated = useSelector(state => state.auth.authenticated);

  return (
    <React.Fragment>
      <Header/>
      {
        authenticated ?
        <UserProfile /> :
        <Auth />
      }
      <Counter />
    </React.Fragment>
  );
}

export default App;

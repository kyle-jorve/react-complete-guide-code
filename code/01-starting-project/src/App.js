import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './store';

let initialLoad = true;

function App() {
  const showCart = useSelector(state => state.shown);
  const cart = useSelector(state => ({items: state.items, changed: state.changed}));
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;

      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart.items));
    }
  }, [cart.items, cart.changed, dispatch]);

  return (
    <Fragment>
      {
        notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {
          showCart &&
          <Cart />
        }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = useSelector(state => state.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {
        cartItems.length > 0 &&
        <ul>
          {
            cartItems.map(c => {
              return (
                <CartItem key={c.id} item={{
                  id: c.id,                  
                  title: c.title,
                  quantity: c.amount,
                  total: c.amount * c.price,
                  price: c.price
                }} />
              )
            })
          }
        </ul>
      }
    </Card>
  );
};

export default Cart;

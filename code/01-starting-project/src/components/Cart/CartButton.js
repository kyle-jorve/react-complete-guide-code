import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const numberOfItems = items.reduce((prev, cur) => {
    return prev + cur.amount;
  }, 0);

  function toggleCartHandler() {
    dispatch(cartActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;

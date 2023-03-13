import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price } = props.item;
  const plusHandler = ()=>{
    dispatch(cartActions.addItem({
      title : title,
      price : price
    }))
  }
  const minusHandler = ()=>{
    dispatch(cartActions.removeItem(title))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

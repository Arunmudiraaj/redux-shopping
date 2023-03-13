import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)
  const cartNumber = useSelector(state=> state.cart.items.length)
  const cartHandler = ()=>{
    dispatch(cartActions.toggleCart())
   
  }
  return (
    <button  onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default CartButton;

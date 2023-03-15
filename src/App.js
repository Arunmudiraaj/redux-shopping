import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { notificationAction } from './Store/notification';
import { cartActions } from './Store/cart';

let isInitial = true
function App() {
  const showCart = useSelector(state=> state.cart.showCart)
  const cart = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const initializeCart = async ()=>{
    const res = await axios.get('https://cart-redux-toolkit-default-rtdb.firebaseio.com/cart.json')
    console.log(res.data)
    
    dispatch(cartActions.initializeCart(res.data))
  }
  useEffect(()=>{
    initializeCart()
  },[])
  useEffect(()=>{
    if (isInitial){
      isInitial = false
      return

    }
    dispatch(notificationAction.updateNotification('sending'))
    try{
      axios.put('https://cart-redux-toolkit-default-rtdb.firebaseio.com/cart.json', cart)
      dispatch(notificationAction.updateNotification('sent'))
    }
    catch(err){
      console.log(err)
      dispatch(notificationAction.updateNotification('error'))
    }
   
  },[cart, dispatch])
  return (  
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

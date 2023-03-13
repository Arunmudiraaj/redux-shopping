import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import store from './Store/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector(state=> state.cart.showCart)
  return (  
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector } from 'react-redux';
const MainHeader = (props) => {
const status = useSelector(state=> state.notification.current)

  return (
    <>{status==='sending' && <h2>Sending...</h2>}
    {status==='sent' && <h2>Sent Successfully!</h2>}
    {status==='error' && <h2>Error!! Request Failed</h2>}
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton/>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default MainHeader;

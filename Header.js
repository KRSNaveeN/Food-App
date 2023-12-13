import classes from './Header.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react';
const Header = ({value,cart})=>{ 
//    const [value,setValue] = useState(value);
let showCartHandler=()=>{
   cart(true);
}
    return<>
     <div  className={classes.mainimage}>
    <header className={classes.header}>
    <h2>React Meals</h2>
    <button className={classes.btn} onClick={showCartHandler}> Your Cart <span className={classes.val}>{value}</span></button>
    {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
   
  </header>
 
  <img src="/meals.jpg" alt="images" />
  </div>
 
  </>
}

export default Header;
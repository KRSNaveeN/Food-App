import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react';
const Header = ()=>{ 
   const [value,setValue] = useState(0);
    return<>
     <div  className={classes.mainimage}>
    <header className={classes.header}>
    <h2>React Meals</h2>
    <button> Your Cart <span>({value})</span></button>
    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
   
  </header>
 
  <img src="/meals.jpg" alt="images" />
  </div>
 
  </>
}

export default Header;
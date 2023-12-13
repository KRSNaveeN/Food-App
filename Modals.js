import { useEffect, useState } from "react";
import DUMMY_MEALS from "../Layout/dummeymeals";
import classes from './Modals.module.css';
import styles from '../Modal/Modal.module.css';
import Modal from "../Modal/Modal";
import ReactDOM from 'react-dom';

let Backdrop = ({cart})=>{
  return(  <div onClick={()=>cart(false)} className={styles.backdrop}></div>);
}

let     Cart = ({cart,cartvalue, data})=>{
    let {m1, m2,m3,m4} = data;
    console.log("inside cart");
    
   
    const [cartdata,setCartdata]=useState({m1:0,m2:0,m3:0,m4:0});
    useEffect(()=>{ setCartdata(data)},[data]);
   
    console.log(cartdata);


    let addHandler =(id)=>{
        
       setCartdata((pre)=>({...pre, [id]:+pre[id]+1}))
    };
    let decreaseHandler = (id)=>{
        setCartdata((pre)=>({...pre, [id]:pre[id]-1}))
    }
    let totalcartvalue=0;
    return <div>
      <div className={styles.modal}>
       {DUMMY_MEALS.map((eachitem)=>{
         let id = eachitem.id;
         totalcartvalue = totalcartvalue+(Number(cartdata[id])*(Number(eachitem.price)))
        return( (cartdata[id]>0) && <section className={classes['cart-item']}>
        <div>
           <h2>{eachitem.name}</h2>
           <p className={classes.summary}> <span className={classes.price}>${eachitem.price} </span>   <span className={classes.amount}> x {cartdata[id]}</span></p>
           
        </div>
        <div className={classes.actions}>
           
            <button onClick={()=>{decreaseHandler(id)}}>-</button>
            <button onClick={()=>{addHandler(id)}}>+</button>

        </div>
    </section>)
    })}
 
     { (cartvalue>0) ? <section className={classes['cart-item']}>
        <h1>Total Amount</h1>
        <div >
         <h1>${totalcartvalue}</h1>
        <div>
            <button onClick={()=>{cart(false)}}>Close</button>
            <button>Order</button>
        </div>
        </div>
        </section> : <h1C>Cart is Empty</h1C>}
        </div>
    </div>
}
const Modals =({data,cartvalue,cart})=>{

    
    return <Modal>
        {ReactDOM.createPortal(<Backdrop cart={cart}/>, document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<Cart data={data} cartvalue={cartvalue} cart={cart}/>, document.getElementById('modal'))}
       
        </Modal>
        
    
}

export default Modals;
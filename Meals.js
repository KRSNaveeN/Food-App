import { useEffect, useState } from "react"
import DUMMY_MEALS from "./dummeymeals"
import classes from './Meals.module.css';


const Meals = (props)=>{
   let [data,setData] = useState({
    ['m1']: 0,
    ['m2']: 0,
   ['m3']: 0,
    ['m4']: 0
   });

//    let [cartdata,setCartdata] = useState();

   

    const addHandler = (id,item)=>{
        
        // if(item)
        if(id === 'm1'){
        setData((pre)=>({...pre, m1 : pre.m1+1 }));
        }
        if(id === 'm2'){
            setData((pre)=>({...pre, m2 : pre.m2+1 }));
            }
           else if(id === 'm3'){
                setData((pre)=>({...pre, m3 : pre.m3+1 }));
                }
                else if(id === 'm4'){
                    setData((pre)=>({...pre, m4 : pre.m4+1}))
                }
    }

    const subHandler = (id,item)=>{
        
        if(id === 'm1'){
        setData((pre)=>{
            if(pre.m1 == 0){
                return pre;
            }
            return {...pre, m1 : pre.m1-1 }});
        }
        if(id === 'm2'){
            setData((pre)=>{
                if(pre.m2 == 0){
                    return pre;
                }
               return {...pre, m2 : pre.m2-1 }});
            }
           else if(id === 'm3'){
                setData((pre)=>{
                    if(pre.m3 == 0){
                        return pre;
                    }
                    return {...pre, m3 : pre.m3-1 }});
                }
                else if(id === 'm4'){
                    setData((pre)=>{
                        if(pre.m4 == 0){
                            return pre;
                        }
                        return{...pre, m4 : pre.m4-1}})
                }
    }

    

    useEffect(()=>{ props.data(data,tally)},[data])
    let total = Object.values(data);
    let tally = total.reduce((x,y)=>{return x+y},0);
    console.log(tally);
    return <div className={classes.card}>
    {
        DUMMY_MEALS.map((item)=>{
            let id = item.id;
            return <div key={Math.random()} className={classes.meal}>
               
                <div className={classes.side}>
                    <h3>{item.name}</h3>
                    <div className={classes.description}> {item.description}</div>
                    <div className={classes.price}>${item.price}</div>
                </div>

                <div>
                   <h3>Amount </h3>

                
                   
                   <div className={classes.input}>
                    <button onClick={()=>addHandler(item.id, item)}>+</button>
                    {data[id]}
                    <button onClick={()=>subHandler(item.id, item)}>-</button>
                   </div>
                   
                </div>
            </div>
        })
    }
    </div>
}
export default Meals
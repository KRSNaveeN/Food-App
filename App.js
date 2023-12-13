// import {image} from meals.jpg;
import { useState } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Layout/MealSummary";
import Meals from "./Components/Layout/Meals";
import Modals from "./Components/Cart/Modals";
function App() {
  const [cartdata,setCartdata] =useState({m1:0,m2:0,m3:0,m4:0});
  const [cartvalue, setCartvalue]  =useState(0);
  const [showcart,setShowcart] = useState(false);
  function formdata(value,total){
    setCartdata(value);
    setCartvalue(total)
  }
  function cart(x){
    setShowcart(x)
  }
  return (
    <div>
       <Header  cart={cart} value={cartvalue}/>
       <MealsSummary/>
       <Meals data={formdata} />
      {showcart && <Modals cartvalue={cartvalue} data={cartdata} cart={cart}/>}
    </div>
  );
}

export default App;

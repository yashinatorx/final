import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Delivery from "./pages/Delivery";
import Summary from "./pages/Summary";
import Payment from "./pages/Payment";





const App = () => {
  const location = useLocation();
  const[isLoggedIn , setIsLoggedIn] = useState(false);

  return (<div>
    <div>
    {
    location.pathname !== '/delivery' && location.pathname !== '/summary' &&  location.pathname !== '/payment' && 
     <div className="bg-slate-400">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={isLoggedIn}/>
      </div>
    }
    
    </div>
    {/* <div>
    {
    location.pathname !== '/Payment' &&
     <div className="bg-slate-400">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={isLoggedIn}/>
      </div>
    }
    </div> */}



      {/* <div className="bg-slate-500">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={isLoggedIn}  />
      </div> */}
         
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/delivery" element={<Delivery setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/summary" element={<Summary setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/payment" element={<Payment setIsLoggedIn={setIsLoggedIn}/>}/>
    
   
        </Routes>
  </div>
  )
};

export default App;


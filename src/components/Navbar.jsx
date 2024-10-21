import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";;


const Navbar = (props) => {

  const {cart} = useSelector((state) => state);
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  


  return (
    <div className="flex justify-between items-center h-20  mx-auto" >


        <NavLink to="/">
          <div className="ml-5">
          <img src="../Assest/logo1.png" className="h-14  "/>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          {isLoggedIn &&
                  <div className="relative -left-[280px] flex">
                     <input type="text" placeholder="   Search..." className=" rounded-full p-1 text-black"/>
                     <FaSearch className="relative -left-6 top-2 cursor-pointer text-black"/>
                     <div>
                     </div>
                    
                    </div>
          }
          { !isLoggedIn &&
            <NavLink to="/login">
            <p className="text-black font-semibold">Login</p>
            </NavLink>
          }
          {!isLoggedIn && 
           <NavLink to="/signup">
           <p className="text-black font-semibold">Signup</p>
           </NavLink>
          }
          { isLoggedIn &&
          <NavLink to="/cart">
          <div className="relative">
              <FaShoppingCart className="text-2xl text-black"/>
              {
                cart.length > 0 &&
                <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                justify-center items-center animate-bounce rounded-full text-white" 
                >{cart.length}</span>
              }
              
          </div>
         </NavLink>
          }
         
        </div>
    </div>
  )
};

export default Navbar;

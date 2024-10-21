import React, {useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    // making state variable

    const [formData , setFormData] = useState({
        email:"",password:""
    });

    const [showPassword,setShowPassword] = useState(false);
    
    function changeHandler(event){
        // print peevious data and value of new data
        setFormData((prev)=> (
            {
            ...prev,
             [event.target.name]:event.target.value
             }
        ))
    }

    function submitHandler(event) {
        
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged in");
        console.log("Printing the formData");
        console.log(formData);
        navigate("/");
    }

    return(
        <div className="w-[400px] h-[400px]  relative left-[90px] top-[80px] ">
            <div>
                <p className="relative text-white font-semibold left-[155px] top-[20px] text-[25px]
                font-serif">Login</p>
            </div>
            <form onSubmit={submitHandler} className="mt-10 flex flex-col gap-4 " >
               <label>
               <p className="text-white text-md font-semibold ml-2 ">Email Address
                   <sup className="text-yellow-500  text-md">*</sup>
                </p>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="  Email Address"
                  name="email"
                  className="w-[370px] ml-2 rounded-full p-2 text-black"
               />
               </label>
               <label  >
               <p className="text-white text-md font-semibold ml-2" >Password
                   <sup  className="text-yellow-500  text-md">*</sup>
                </p>
               <input
                 required
                 type={showPassword? ("text") : ("password")}
                 value={formData.password}
                 onChange={changeHandler}
                 placeholder="  Password"
                 name="password"
                  className="w-[370px] ml-2 rounded-full p-2 text-black"
               />

               <span className="relative left-[340px] -top-[30px]"
                 onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
               </label>

               <Link to="#">
                <p className="relative left-[235px] -top-[35px] text-sm font-semibold text-white">
                     Forgot Password?
                 </p>
                 </Link>

               <button className="rounded-full bg-green-500 text-black w-[330px] ml-7 p-2 -mt-6 text-lg font-bold  ">
             Login
            </button>
           <div className="flex relative left-[90px] ">
           <p className=" text-sm font-semibold text-white">Don't have account?</p>
           <Link to="/signup">
           <p className="text-sm font-semibold ml-2 cursor-pointer text-white">Signup</p>
           </Link>
           </div>
            </form>
         </div>
    
    )
    
    }
    export default LoginForm

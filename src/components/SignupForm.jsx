 import React, {useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {  useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    // making state variable

    const [formData , setFormData] = useState({
        email:"",password:"",firstname:"",lastname:"",code:"",number:""
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
        toast.success("Signed in");
        console.log("Printing the formData");
        console.log(formData);
        navigate("/");
    }

    return(
        <div className="w-[400px] h-[400px]  relative left-[90px] top-[30px] ">
            <div>
                <p className="relative text-black font-semibold left-[155px] top-[20px] text-[25px]
                font-serif ">Signup</p>
            </div>
            <form onSubmit={submitHandler} className="mt-10 flex flex-col gap-4 " >
           <div className="flex gap-5 ">
           <label>
               <p className="text-black text-md font-semibold ml-2  ">First name
                   <sup className="text-yellow-500  text-md">*</sup>
                </p>
                <input 
                  required
                  type="text"
                  value={formData.firstname}
                  onChange={changeHandler}
                  placeholder=" First name"
                  name="firstname"
                  className="rounded-full p-2 border-black border-2  ml-2 text-black w-[170px]"
               />
               </label>
               <label>
               <p className="text-black text-md font-semibold ml-2 ">Last name
                   <sup className="text-yellow-500  text-md">*</sup>
                </p>
                <input 
                  required
                  type="text"
                  value={formData.lastname}
                  onChange={changeHandler}
                  placeholder=" Last name"
                  name="lastname"
                  className="  rounded-full p-2 border-black border-2 ml-2 text-black w-[170px]"
               />
               </label>
           </div>
   <div className="flex gap-x-4">
   <label>
        <p className="text-black text-md font-semibold ml-2" >Code</p>
    <select
    name="code"
    onChange={changeHandler}
    value={formData.code}
    placeholder="+91--India "
    className="w-[100px] ml-2 rounded-full p-2 border-black border-2 text-black overflow-y-scroll "
    >
      <option>+91--India</option>
      <option>+54--Argentine</option>
      <option>+61--Australia</option>
      <option>+880--Bangladesh</option>
      <option>+55--Brazil </option>
      <option>+1--Canada</option>
      <option>+56--Chile</option>
      <option>+57--Colombia</option>
      <option>+385--Croatia</option>
      <option>+33--France</option>
      <option>+995--Georgia</option>
      <option>+977--Nepal</option>
      <option>+64--New Zealand</option>
      <option>+92--Pakisthan</option>
      <option>+7--Russia</option>
      <option>+966--Saudi Arabia</option>
      <option>+65--Singapore</option>
      <option>+27--South Africa</option>
      <option>+82--South Korea</option>
      <option>+94--SriLanka</option>
      <option>+1--United State</option>
      <option>+44--United Kingdom</option>
      <option>+263--Zimbabwe</option>
    </select>
    </label>
    <label>
               <p className="text-black text-md font-semibold ml-2 ">Phone Number
                   <sup className="text-yellow-500  text-md">*</sup>
                </p>
                <input 
                  required
                  type="number"
                  value={formData.number}
                  onChange={changeHandler}
                  placeholder="  Phone Number"
                  name="number"
                  className="w-[245px] ml-2 border-black border-2 rounded-full p-2 text-black"
               />
               </label>
   </div>
               <label>
               <p className="text-black text-md font-semibold ml-2 ">Email Address
                   <sup className="text-yellow-500  text-md">*</sup>
                </p>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="  Email Address"
                  name="email"
                  className="w-[370px] ml-2 rounded-full p-2 text-black border-black border-2"
               />
               </label>
               <label  >
               <p className="text-black text-md font-semibold ml-2" >Password
                   <sup  className="text-yellow-500  text-md">*</sup>
                </p>
               <input
                 required
                 type={showPassword? ("text") : ("password")}
                 value={formData.password}
                 onChange={changeHandler}
                 placeholder="  Password"
                 name="password"
                  className="w-[370px] ml-2 rounded-full p-2 border-black border-2 text-black"
               />

               <span className="relative left-[340px] -top-[33px]"
                 onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
               </label>


               <button className="rounded-full bg-green-500  text-black w-[330px] ml-7 p-2 -mt-4 text-lg font-bold  ">
             Signup
            </button>
         
            </form>
         </div>
    
    )
    
    }
    export default SignupForm



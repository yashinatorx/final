import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





const DeliveryAddress = ({setIsLoggedIn}) => {

    const {cart} = useSelector((state) => state);
    console.log("Printing Cart");
    console.log(cart);
    setIsLoggedIn(true);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect( () => {
        setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
      }, [cart])



    const navigate = useNavigate();

const [formData , setFormData] = useState({
    fullname:"",phonenumber:"",pincode:"",state:"",city:"",
    housenumber:"",roadname:"",landmark:""
})

    
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
        toast.success("Address Added");
        console.log("Printing the formData");
        console.log(formData);
        navigate("/summary")
    }

  return (
    <div className='relative top-[150px]'>
      <form onSubmit={submitHandler} className="flex flex-col gap-4 ">
        <label>
           <div className='flex bg-white'> <p  className=" text-md font-semibold ml-10">Full Name(Required)</p>
           <sub className=" text-lg -mt-3" >*</sub></div>
            <input
           required
           type="text"
           value={formData.fullname}
           onChange={changeHandler}
           placeholder="  Full Name"
           name="fullname"
           className="w-[900px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        <label>
           <div className='flex bg-white'> <p className=" text-md font-semibold ml-10" >Phone Number(Required)</p>
           <sub className=" text-lg -mt-3">*</sub></div>
            <input
           required
           type="Number"
           value={formData.number}
           onChange={changeHandler}
           placeholder="  Phone number"
           name="fullname"
           className="w-[900px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        <div>
        <label>
           <div  className='flex bg-white'> <p className=" text-md font-semibold ml-10">Pin Code (Required)</p>
           <sub className=" text-lg -mt-3">*</sub></div>
            <input
           required
           type="Number"
           value={formData.pincode}
           onChange={changeHandler}
           placeholder="  code"
           name="pincode"
           className="w-[170px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        </div>
        <div className='flex '>
        <label>
            <div className='flex bg-white'><p className=" text-md font-semibold ml-10">State (Required)</p>
            <sub className=" text-lg -mt-3">*</sub></div>
            <input
           required
           type="text"
           value={formData.state}
           onChange={changeHandler}
           placeholder="  --State--"
           name="state"
           className="w-[170px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        <label>
        <div className='flex bg-white'><p className=" text-md font-semibold ml-10">City (Required)</p>
        <sub className=" text-lg -mt-3">*</sub></div>
            <input
           required
           type="text"
           value={formData.city}
           onChange={changeHandler}
           placeholder="   --City--"
           name="city"
           className="w-[170px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        </div>
        <label>
        <div className='flex bg-white'>    <p  className=" text-md font-semibold ml-10">House No.,Building Name (Required)</p>
        <sub className=" text-lg -mt-3">*</sub></div>
            <input
           required
           type="text"
           value={formData.housenumber}
           onChange={changeHandler}
           placeholder="XYZ"
           name="housenumber"
           className="w-[900px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        <label>
            <div className='flex bg-white'><p className=" text-md font-semibold ml-10">Road Name,Area,Colony (Required)</p>
            <sub className=" text-lg -mt-3" >*</sub></div>
            <input
           required
           type="text"
           value={formData.roadname}
           onChange={changeHandler}
           placeholder="XYZ"
           name="roadname"
           className="w-[900px] ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
        <label>
            <div className='flex bg-white'><p className=" text-md font-semibold ml-10 max-w-[370px]">Add Nearby Famous Shop/Mall/Landmark (Required)</p>
            </div>
            <input
           required
           type="text"
           value={formData.landmark}
           onChange={changeHandler}
           placeholder="XYZ"
           name="landmark"
           className="w-[900px] mt-1 ml-7 rounded-lg p-2 text-black border-black border-2">
           </input>
        </label>
       <div className='w-full h-[60px] relative border-black border-2 bg-white flex mt-5 justify-between items-center  '>
       <p  className="flex flex-row text-sm font-bold ml-5 ">Total Amount: ${totalAmount}</p>
       <button className="rounded-full bg-green-500 text-black w-[300px] p-2 relative mr-5  text-lg font-bold  ">
             Continue
        </button>
       </div>
      </form>
    </div>
  )
};

export default DeliveryAddress

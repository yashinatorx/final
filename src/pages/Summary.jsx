import React, { useEffect, useState } from 'react'
import SummaryPage from '../components/SummaryPage'
import { useSelector } from 'react-redux';
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';



const Summary = ({setIsLoggedIn}) => {

    const {cart} = useSelector((state) => state);
    console.log("Printing Cart");
    console.log(cart);
    const [totalAmount, setTotalAmount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);
    const [deliveryCharges , setDeliveryCharges] = useState(0);
      
    useEffect( () => {
      const calculated = cart.reduce( (acc, curr) => acc + curr.price,0) ;
      setTotalAmount(calculated);
      
      if(calculated<500){
        setDeliveryCharges(10);
      }
      else{
        setDeliveryCharges(0);
      }
      const newFinalAmount = calculated + (calculated < 500 ? 10 : 0) + 2;
      setFinalAmount(newFinalAmount);
    }, [cart]);

    const [formData , setFormData] = useState({
      email:""
  });

  const navigate = useNavigate();

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
    toast.success("Confirmed");
    console.log("Printing the formData");
    console.log(formData);
    navigate("/payment");
}



    

    

  return (
    <div className='scroll-auto'>

<div >  <div className='h-[100px] w-full absolute bg-white shadow-lg	'>
            <nav className='flex items-center justify-center'>
              <div className='mt-5 relative -left-[50px]'> 
              <div>
              <span
                className="absolute mt-3  text-xs w-5 h-5 flex 
                justify-center items-center rounded-full border-[1px] bg-blue-400 text-white" 
                >1</span>
                <TiTick className='relative top-[13px] left-[1px] text-lg'/>
              </div>
                <p className='relative top-[18px] -left-[23px]'>Address</p>
              </div>

              <hr className='w-[200px] border-3  border-black relative -left-[50px] top-[15px] '/>

              <div className='mt-5 relative left-[30px]'>
              <span
                className="absolute  bg-blue-400 text-xs w-5 h-5 flex 
                justify-center items-center rounded-full text-white" 
                >2</span>
                <p className='relative top-[25px] -left-[50px]' >Order Summary</p>
               </div>

               <hr className='w-[200px] border-3  border-black relative left-[10px] top-[15px] '/>

               <div className='mt-5 relative left-[70px]'>
                <span
                className="absolute  border-[1px] border-blue-400 text-blue-400 text-xs w-5 h-5 flex 
                justify-center items-center rounded-full" 
                >3</span>
                <p className='relative top-[25px] -left-[23px]'>Payment</p>
               </div>
            </nav>
        </div>
        </div>

        
      

      <div className='relative top-[120px]'>
      {
    cart.length > 0  ? 
    (<div className=" flex gap-5 ">
        

      <div className=" w-[750px] ml-8 shadow-black shadow-md  " >
        <div className='bg-blue-500 text-white max-w-[750px]   h-[40px] border-black border-[1px]'><p className='justify-center items-center ml-3 mt-1 font-bold  text-lg'>Order Summary</p>
          </div>
        {
          cart.map( (item,index) => {
            return <SummaryPage key={item.id} item={item} itemIndex={index} 
             setIsLoggedIn={setIsLoggedIn}/>
          } )
        }
      </div>

     <div className='w-[400px]'>
     <div className="">
         <div className='p-3 w-[350px] shadow-black shadow-sm mr-3' >
       
            <div className='border-[1px] border-black'>
                  <div className=" h-[30px] border-black border-y-[1px]  ">
                  <p className='ml-3 font-bold text-lg '>Price Details</p>
                  </div>

                  <div className=" m-4 gap-y-5 flex flex-col">
                    
                        <p className="flex justify-between ">
                          <span className="">Total Items: </span>
                          <span>{cart.length}</span>
                        </p>

                        <div className='flex flex-row justify-between'>
                          <p className="">Price: </p>
                          <p>${totalAmount}</p>
                        </div>

                        <div className='flex justify-between'>
                          <p>Delivery Charges</p>
                          <p>${deliveryCharges}</p>
                        </div>

                        <div className='flex flex-row justify-between'>
                          <p>Platform fees  </p>
                            <p>$2</p>
                        </div>
                  </div>

                  <div  className=' border-black border-y-[1px]'>
                  <div className='m-2 flex justify-between'> 
                  <p  className=" font-bold text-md  ">Total Payable :</p>
                  <p className='font-bold text-md'> ${finalAmount}</p>
                  </div>
                  </div>
            </div>

          </div>
      </div>
      <form onSubmit={submitHandler}  className='w-[350px] h-[50px]  mt-10  shadow-md shadow-black  '>
<div className='m-1 flex justify-between '>
<div className='mt-1'>
 <input 
                  required
                  type="text"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder=" Email"
                  name="email"
                  className="rounded-lg p-2 border-black border-2  ml-2 text-black w-[170px]"
   />
 </div>
 
  <button className='bg-yellow-400 rounded-full m-1 p-1 px-2 mt-2'>
    Continue
  </button>
</div>
 

  </form>
     </div>

    </div>) : 
    (<div>
    <Spinner/>
    </div>)
  }
  </div>
  

    </div>
  )
}

export default Summary


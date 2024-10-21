import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from 'react-redux';
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineCreditCard } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { BsBank } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";




const PaymentPage = ({setIsLoggedIn}) => {


  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  setIsLoggedIn(true);

  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [deliveryCharges , setDeliveryCharges] = useState(0);
  const [showAmountForm , setShowAmountForm] = useState(false);
  const [showCardForm , setShowCardForm] = useState(false);
  const [showEmiForm , setShowEmiForm] = useState(false);
  const [showNetBankingForm , setNetBankingForm] = useState(false);
  const [showWalletForm , setWalletForm] = useState(false);
  const [showUpiForm , setUpiForm] = useState(false);
  const [showCODForm , setCODForm] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const navigate = useNavigate();
  
    
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

  const showDetail = () => {
    setShowAmountForm(!showAmountForm);
  };

  const showCardDetail = () => {
    setShowCardForm(!showCardForm);
    setShowEmiForm(false);
    setNetBankingForm(false);
    setWalletForm(false);
    setUpiForm(false);
    setCODForm(false);
    
  }
  const showEmiDetail = () => {
    setShowEmiForm(!showEmiForm);
    setShowCardForm(false);
    setNetBankingForm(false);
    setWalletForm(false);
    setUpiForm(false);
    setCODForm(false);
  }
  const showNetBankingDetail = () => {
    setNetBankingForm(!showNetBankingForm);
    setShowCardForm(false);
    setShowEmiForm(false);
    setWalletForm(false);
    setUpiForm(false);
    setCODForm(false);
  }
  const showWalletDetail = () => {
    setWalletForm(!showWalletForm);
    setShowCardForm(false);
    setShowEmiForm(false);
    setNetBankingForm(false);
    setUpiForm(false);
    setCODForm(false);
  }
  const showUpiDetail = () => {
    setUpiForm(!showUpiForm);
    setShowCardForm(false);
    setShowEmiForm(false);
    setNetBankingForm(false);
    setWalletForm(false);
    setCODForm(false);
  }
  const showCODDetail = () => {
    setCODForm(!showCODForm);
    setShowCardForm(false);
    setShowEmiForm(false);
    setNetBankingForm(false);
    setWalletForm(false);
    setUpiForm(false);
  }

  const [formData , setFormData] = useState({
    cardNumber:"",expiryDate:"",cvv:""
});


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
  toast.success("Payment Done");
  console.log("Printing the formData");
  console.log(formData);
  setIsLoggedIn(true);
  navigate("/");
  
}

const handleCheckboxChange = (bankId) => {
  setSelectedBank(selectedBank === bankId ? null : bankId);
};

const doneHandler = () => {
  toast.success("Payment done");
  setIsLoggedIn(true);
  navigate('/');
}





  return (
    <div className='relative top-[150px] ml-10 mr-10 shadow-sm shadow-black'>
      <div className='border-black border-y-[1px] h-[40px]'>
        <p className='text-lg font-bold ml-7 mt-1'>Payment</p>
      </div>
     
      <div className='mt-2 border-black border-[1px] ml-8 mr-8 rounded-lg bg-green-200 ' >
         
      {
        cart.length>0 ? (
          <div>
          {
            showAmountForm && ( 
            <div className='ml-20 mr-20 '>
              <div className='flex justify-between'>
                <p>Total Items</p>
                <p>{cart.length}</p>
              </div>
              <div className='flex justify-between'>
                <p>Total Amount</p>
                <p>${totalAmount}</p>
              </div>
              <div className='flex justify-between'>
                <p>Delivery Charges</p>
                <p>${deliveryCharges}</p>
              </div>
              <div className='flex justify-between'>
                <p>Platform fee</p>
                <p>$2</p>
              </div>
          </div>
      )
      }
      </div>
        ) : (<div></div>)
      }
   <div className='flex justify-between m-3'>
            <p>Total amount:</p>
           <div className='flex'>
           <p>${finalAmount}</p>
           <span onClick={showDetail} className='text-black justify-center items-center cursor-pointer' >{showAmountForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
           </div>
          </div>
      </div>

     <div className=' border-black border-[2px] m-3 mt-10' >
     <div className='flex justify-between p-3 '>
        <div className='flex items-center justify-center gap-x-3 ml-2'>
          <p className='text-4xl'><AiOutlineCreditCard/></p>
          <p className='font-bold text-md'>Credit / Debit / ATM Card</p>
        </div>
        <span onClick={showCardDetail} className='text-black justify-center items-center cursor-pointer' >{showCardForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
      </div>
      { showCardForm && (
          <form onSubmit={submitHandler} className='shadow-black shadow-sm ml-14 mt-3 mr-14 mb-10 pl-7 pr-7 pt-3 pb-4  '>
          <div className='flex flex-col gap-y-2 '>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={changeHandler}
              placeholder="     XXXX XXXX XXXX XXXX"
              className='border-[1px] pl-2  '
            />
          </div>
         <div className='mt-4 flex justify-between'>
         <div className='flex flex-col gap-y-2 '>
            <label>Valid Thru</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={changeHandler}
              placeholder="MM / YY"
              className='border-[1px] pl-2'
            />
          </div>
          <div className='flex flex-col gap-y-2 '>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={changeHandler}
              placeholder="CVV"
              className='border-[1px] pl-2'
            />
          </div>
         </div>
         <button className=' bg-yellow-300 mt-8 p-2 rounded-lg w-full '>
          <div className='justify-center items-center flex '>
          <p>Pay</p><p className='ml-3'>${finalAmount}</p>
          </div>
         </button>
        </form>
        )
      }
     </div>
     

     <div className=' border-black border-[2px] m-3 mt-10' >
     <div className='flex justify-between p-3 '>
        <div className='flex items-center justify-center gap-x-3 ml-2'>
          <p className='text-4xl'><FaRegCalendarCheck  /></p>
          <p className='font-bold text-md'>Emi</p>
        </div>
        <span onClick={showEmiDetail} className='text-black justify-center items-center cursor-pointer' >{showEmiForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
      </div>
      { showEmiForm && (
         <div className=' border-black border-[2px] ml-10 mr-10 mb-7 mt-3'>
          <div className=' p-3 border-[1px] m-1 '>
            <p className='font-bold text-md '>Get EMI in 3 easy steps</p>
            <div className='flex ml-9 '>
              <div className='flex flex-col'>
                <span className='bg-gray-300 relative mt-3  text-xs w-8 h-8 flex 
                justify-center items-center rounded-full border-[1px] text-black left-16'><AiOutlineCreditCard className='text-lg '/></span>
                <p className='relative left-8'>Choose Bank</p>
              </div>
              <div className='w-[200px] border-3  border-black relative top-4 -left-2'>---------------------</div>
              <div>
              <span  className='bg-gray-300 relative mt-3  text-xs w-8 h-8 flex 
                justify-center items-center rounded-full border-[1px] text-black -left-5'><FaRegCalendarCheck className='text-lg '/></span>
                <p className='relative -left-14'>Choose Plan</p>
                </div>
                <div className='w-[200px] border-3  border-black relative top-4 -left-[85px]'>---------------------</div>
                <div>
                <span  className='bg-gray-300 relative mt-3  text-xs w-8 h-8 flex 
                justify-center items-center rounded-full border-[1px] text-black -left-[97px]'><TiTick className='text-lg '/></span>
                  
                  <p className='relative -left-[130px]' >Confirm & Pay</p>
                </div>
            </div>
          </div>
          <div className=' p-3 border-[1px] m-1 '>
          <div className='flex gap-x-4' >
            <input
            type='checkbox'
            className='rounded-full'
            checked={selectedBank === 1}
            onChange={() => handleCheckboxChange(1)}
            >
            </input>
           <div className='flex justify-between w-full '>
           <div >
            <p className='text-lg font-bold'>Axis Bank</p>
            <p className='text-sm ml-4'>EMI $5/m</p>
            </div>
            <img src="../Assest/AxisLogo.png" alt="#" className='w-5 h-5 mr-4 mt-3 justify-center items-center' />
           </div>
           </div>
           <button className='w-full rounded-sm p-1 mt-2 bg-yellow-300'>See all plans</button>
          </div>
          <div className=' p-3 border-[1px] m-1 '>
          <div className='flex gap-x-4' >
            <input
            type='checkbox'
            className='rounded-full'
            checked={selectedBank === 2}
            onChange={() => handleCheckboxChange(2)}
            >
            </input>
           <div className='flex justify-between w-full '>
           <div >
            <p className='text-lg font-bold'>HDFC Bank</p>
            <p className='text-sm ml-4'>EMI $10/m</p>
            </div>
            <img src="../Assest/Hdfc.png" alt="#" className='w-5 h-5 mr-4 mt-3 justify-center items-center' />
           </div>
           </div>
           <button className='w-full rounded-sm p-1 mt-2 bg-yellow-300'>See all plans</button>
          </div>
         </div>
        )
      }
     </div>


     <div className=' border-black border-[2px] m-3 mt-10' >
     <div className='flex justify-between p-3 '>
        <div className='flex items-center justify-center gap-x-3 ml-2'>
          <p className='text-4xl'><BsBank/></p>
          <p className='font-bold text-md'>Net Banking</p>
        </div>
        <span onClick={showNetBankingDetail} className='text-black justify-center items-center cursor-pointer' >{showNetBankingForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
      </div>
      
      { showNetBankingForm && (
        <div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 1}
            onChange={() => handleCheckboxChange(1)}>
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg font-bold'>Axis Bank</p>
         <img src="../Assest/AxisLogo.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center'onClick={doneHandler}><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 2}
         onChange={() => handleCheckboxChange(2)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg font-bold'>HDFC Bank</p>
         <img src="../Assest/Hdfc.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 3}
         onChange={() => handleCheckboxChange(3)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg font-bold'>State bank of india Bank</p>
         <img src="../Assest/SBI.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 4}
         onChange={() => handleCheckboxChange(4)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg font-bold'>ICICI Bank</p>
         <img src="../Assest/ICICI.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       </div>
      )}
</div>


<div className=' border-black border-[2px] m-3 mt-10' >
     <div className='flex justify-between p-3 '>
        <div className='flex items-center justify-center gap-x-3 ml-2'>
          <p className='text-4xl'><CiWallet /></p>
          <p className='font-bold text-md'>Wallet</p>
        </div>
        <span onClick={showWalletDetail} className='text-black justify-center items-center cursor-pointer' >{showWalletForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
      </div>
      
      { showWalletForm && (
        <div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 1}
         onChange={() => handleCheckboxChange(1)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg font-bold'>Phonepe Wallet</p>
         <img src="../Assest/phonepe.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <div className='ml-8 mr-5' >
          <label>
            <p>Phonepe linked mobile number</p>
            <div className='flex justify-between gap-x-3'>
            <input
            required
             type="number" 
             className='w-full border-[1px] '
            />
            <button className='bg-blue-600 text-white rounded-sm pl-3 pt-1 pb-1 border-[1px] border-black pr-3' >Link</button>
            </div>
          </label>
          <button className=' w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold  relative bg-yellow-300 items-center justify-center' onClick={doneHandler}><p>Pay</p><p>${finalAmount}</p></button>
        </div>
       </div>
       </div>
      )}
</div>

<div className=' border-black border-[2px] m-3 mt-10' >
     <div className='flex justify-between p-3 '>
        <div className='flex items-center justify-center gap-x-3 ml-2'>
          <p className='text-4xl'><IoIosPhonePortrait /></p>
          <p className='font-bold text-md'>Upi</p>
        </div>
        <span onClick={showUpiDetail} className='text-black justify-center items-center cursor-pointer' >{showUpiForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
      </div>
      
      { showUpiForm && (
        <div className=' m-5'>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 1}
         onChange={() => handleCheckboxChange(1)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg'>Google pay</p>
         <img src="../Assest/Gpay.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 2}
         onChange={() => handleCheckboxChange(2)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg '>BHIM UPI</p>
         <img src="../Assest/Bhim.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 3}
         onChange={() => handleCheckboxChange(3)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg '>Paytm</p>
         <img src="../Assest/Paytm.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 4}
         onChange={() => handleCheckboxChange(4)}
         >
         </input>
        <div className='flex justify-between w-full '>
         <p className='text-lg '>PhonePe</p>
         <img src="../Assest/phonepe.png" alt="#" className='w-5 h-5 mr-4 mt-1 justify-center items-center' />
        </div>
        </div>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} ><p>Pay</p><p>${finalAmount}</p></button>
       </div>
       <div className=' p-3 border-[1px] m-1 '>
       <div className='flex gap-x-4' >
         <input
         type='checkbox'
         className='rounded-full'
         checked={selectedBank === 5}
         onChange={() => handleCheckboxChange(5)}
         >
         </input>
         <p className='text-lg '>Aded new UPI ID</p>
        </div>
       </div>
       </div>
      )}
</div>


<div className=' border-black border-[2px] m-3 mt-10' >
     <div className='flex justify-between p-3 '>
        <div className='flex items-center justify-center gap-x-3 ml-2'>
          <p className='text-4xl'><CiDeliveryTruck /></p>
          <p className='font-bold text-md'>Cash on Delivery</p>
        </div>
        <span onClick={showCODDetail} className='text-black justify-center items-center cursor-pointer' >{showCODForm ?  <IoIosArrowUp/>  : <MdKeyboardArrowDown/>  }</span>
      </div>
      
      { showCODForm && (
        <div className=' m-5'>
       <div className=' p-3 border-[1px] m-1 '>
       <p>Due to handling costs, a nominal fee of $5 will be Charged</p>
        <button className='w-full flex rounded-sm p-1 mt-2  gap-x-2 font-bold bg-yellow-300 items-center justify-center' onClick={doneHandler} >Place Order</button>
       </div>
       </div>
      )}
</div>



    </div>



  )
}

export default PaymentPage

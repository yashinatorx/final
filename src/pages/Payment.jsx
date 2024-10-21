import React from 'react'

import { TiTick } from "react-icons/ti";
import PaymentPage from '../components/PaymentPage';


const Payment = ({setIsLoggedIn}) => {
  return (
    <div>
      <div>
      <div className='h-[100px] w-full absolute bg-white shadow-lg	'>
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
              <div>
              <span
                className="absolute mt-3  text-xs w-5 h-5 flex 
                justify-center items-center rounded-full border-[1px] bg-blue-400 text-white" 
                >2</span>
                <TiTick className='relative top-[13px] left-[1px] text-lg'/>
              </div>
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

          <PaymentPage setIsLoggedIn={setIsLoggedIn} />    



    </div>
  )
}

export default Payment

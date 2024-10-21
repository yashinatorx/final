import React from 'react'
import DeliveryAddress from '../components/DeliveryAddress'

const Delivery = ({setIsLoggedIn}) => {
  return (
    <div>
        <div className='h-[100px] w-full absolute bg-white shadow-lg	'>
            <nav className='flex items-center justify-center'>
              <div className='mt-5 relative -left-[50px]'> 
                <span
                className="absolute  bg-blue-400 text-xs w-5 h-5 flex 
                justify-center items-center rounded-full text-white" 
                >1</span>
                <p className='relative top-[25px] -left-[23px]'>Address</p>
              </div>

              <hr className='w-[200px] border-3  border-black relative -left-[50px] top-[15px] '/>

              <div className='mt-5 relative left-[30px]'>
                <span
                className="absolute  text-xs w-5 h-5 flex 
                justify-center items-center rounded-full border-[1px] border-blue-400 text-blue-400" 
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
      <DeliveryAddress setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default Delivery

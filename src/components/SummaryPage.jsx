import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";




const SummaryPage = ({item, itemIndex , setIsLoggedIn}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  const count = useSelector((state) => state.counter.value);
  setIsLoggedIn(true);
 

  return (
    <div  >
     
      
<div className="w-[750px] py-2 justify-between border-y-[1px] border-black flex">
<div className="w-[140px] m-h-[140px] mt-5 ml-5 " >
  <img  src={item.image}  />
  <div className='flex gap-2 ml-5 mt-5'>
     <button onClick={() => dispatch(decrement())} className='w-8 h-8 bg-gray-400 rounded-full p-1'>
                -
            </button>
            <div className='w-8 h-8 bg-gray-400 p-1'> <p className='ml-[7px] mt-[1px] '>{count}</p></div>
            <button  onClick={() => dispatch(increment())} className='w-8 h-8  bg-gray-400 rounded-full p-1'>
               +
            </button>
        </div>
</div>
<div className=" w-[300px] flex flex-col gap-y-4  gap-x-0 relative   mt-8"  >
  <h1 className="">{item.title}</h1>
  <h1 className="">
                {item.description.length >100 ? 
                (item.description.substr(0,81)) + "..." :
                (item.description)}
                </h1>
  <div className="">
    <p className="">${item.price}</p>
    <div className="rounded-full w-7 h-7  py-[6px] px-[6px] bg-pink-400 cursor-pointer mt-3"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
  </div>
</div>

<div className='items-center justify-center  w-[200px]'>
  <p className='top-[120px] relative'>Delivery </p>
</div>

</div>




    </div>
  )
}

export default SummaryPage

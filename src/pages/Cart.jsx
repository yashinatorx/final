import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";






const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-full h-full">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row gap-10 justify-center w-[600px] ml-[190px] ">


      <div className="w-[400px]" >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="w-[200px] h-full flex flex-col">

        <div className="mt-[50px]">
          <div className="font-bold text-sm uppercase text-green-600">Your Cart</div>
          <div className="font-bold text-[25px] uppercase text-green-600 mt-[-8px]">Summary</div>
          <p className="flex flex-row">
            <span className="text-sm font-bold mt-3 ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="bottom-0 absolute">
          <p  className="flex flex-row text-sm font-bold ">Total Amount: ${totalAmount}</p>
          <Link to="/delivery">
          <button  className="w-[250px] bg-green-600 px-4 py-2 text-white rounded-md hover:bg-white border border-green-600 hover:text-black font-bold ">
            CheckOut Now
          </button>
          </Link>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center mt-[200px]">
      <h1> Your Cart Is Empty!</h1>
      <Link to={"/"}>
        <button className="bg-green-600 px-4 py-2 text-white rounded-md hover:bg-white border border-green-600 hover:text-black font-bold">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;

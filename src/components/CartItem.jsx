
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="w-full ">

      <div className="flex flex-row px-5 py-5 w-[400px] gap-x-[25px]">

        <div className="w-[145px]" >
          <img  src={item.image}  />
        </div>
        <div className="w-[245px]"  >
          <h1 className="text-sm font-bold ">{item.title}</h1>
          <h1 className="text-[11px] mt-3  ">
                        {item.description.length >100 ? 
                        (item.description.substr(0,81)) + "..." :
                        (item.description)}
                        </h1>
          <div className="flex mt-4 justify-between">
            <p className="text-xs text-green-500 font-bold">${item.price}</p>
            <div className="rounded-full w-7 h-7 py-[6px] px-[6px] bg-pink-400 cursor-pointer mt-[-4px]"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[1px] bg-black"></div>

    </div>
  );
};

export default CartItem;

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const CDN_ALT = "swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
const ItemList = ({items})=>{

   const dispatch = useDispatch();
   const handleAddItem = (item) => {
    dispatch(addItem(item))
   }
    return(
        <div>{items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 justify-between">
                <div className="text-left py-2" >
                    <span className="tracking-wide">{item.card.info.name}</span>
                    <span> -Rs.{item.card.info.price/100}</span>
                   { item.card.info.imageId && <img src={CDN_URL + `${String(item.card.info.imageId).includes('/') ? CDN_ALT : ""}` + item.card.info.imageId} className="w-14 right-0.5"/>}
                    <span className="border border-black p-2 flex bg-white"
                    onClick={() => handleAddItem(item)}>
                        Add ﹢</span>

                </div>

                <p className="text-xs text-left">{item.card.info.description}</p>

            </div>
        ))} 
        </div>
    );
};
export default ItemList;

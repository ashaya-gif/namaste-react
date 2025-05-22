import { useEffect, useState } from "react";
import { Shimmer } from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);  
    const [showIndex, setShowIndex] = useState(null);      

   // alert(resInfo)
    if(resInfo === null) return  <Shimmer />;

    const {name,city,avgRatingString,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    let itemCardsprev = [];
    const groupedCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log("Grouped Cards Structure:", groupedCards);
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach(element => {
        let itemInfo  = element?.card?.card
        let itemtype = itemInfo['@type'].split('.').slice(-1)[0]
        console.log(itemInfo?.itemCards, itemtype, "itemInfooooo")
        if(itemInfo?.itemCards?.length && itemtype == "ItemCategory"){
            itemCardsprev.push(...itemInfo?.itemCards);
        }
        
    });;
    console.log(itemCardsprev, "itemCardsprev");

    const categories1 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("thisis my main task", categories1);

    

    return (
        <div className="text-center">
             <h1 className="font-bold my-6 text-xl">{name}</h1>
                <h4 className="font-bold text-lg">{cuisines.join(", ")}</h4>
            {categories1.map((category, index)=> <RestaurantCategory key={index} data={category?.card?.card} 
            showItems={index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}/>)}
        </div>
    );
};

export default RestaurantMenu;


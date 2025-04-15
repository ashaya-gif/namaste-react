import { useEffect, useState } from "react";
import { Shimmer } from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);        

   // alert(resInfo)
    if(resInfo === null) return  <Shimmer />;

    const {name,city,avgRatingString,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    let itemCardsprev = [];
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach(element => {
        let itemInfo  = element?.card?.card
        let itemtype = itemInfo['@type'].split('.').slice(-1)[0]
        console.log(itemInfo?.itemCards, itemtype, "itemInfooooo")
        if(itemInfo?.itemCards?.length && itemtype == "ItemCategory"){
            console.log("inif");
            itemCardsprev.push(...itemInfo?.itemCards);
        }
        
    });;

    
    console.log(itemCardsprev, "itemCardsprev");

    return (
        <div className="menu">
             <h1>{name}</h1>
            <h2>{city}</h2>
            <h3>{avgRatingString}</h3>
            <h4>{costForTwoMessage}</h4>
            <h4>{cuisines.join(", ")}</h4>
            { <ul>
                {itemCardsprev.map((item, index) => <li key={index}>{item.card.info.name}- {" Rs."}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
                 
                
            </ul> }
        </div>
    );
};

export default RestaurantMenu;


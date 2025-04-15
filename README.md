# namaste react

// const fetchData = async () => {
    //     try {
    //         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7912052&lng=84.9973546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    //         const json = await response.json();
    //         console.log("API Response:", json); // Debugging
    
    //         // Update this according to the new API structure
    //         const restaurants = json?.data?.cards?.find(card => card?.card?.card?.gridElements)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    //         // Transform data to match your existing format
    //         const updatedRestaurants = restaurants.map((item) => ({
    //             data: {
    //                 id: item.info.id,
    //                 name: item.info.name,
    //                 img: `https://media-assets.swiggy.com/${item.info.cloudinaryImageId}`,
    //                 cuisimes: item.info.cuisines.join(", "),
    //                 costforTwo: item.info.costForTwo,
    //                 deliveryTime: item.info.sla.deliveryTime,
    //                 avgRating: item.info.avgRating,
    //             }
    //         }));
    
    //         setlistOfRestaurants(prevRestaurants => [...prevRestaurants, ...updatedRestaurants]);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };



    body.js
    

// 
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"



const Body = () =>{
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating
                        );
                        setListOfRestaurant(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                    </div>
                    <div className="res-container">
                        {listOfRestaurants.map((restaurant)=> (
                            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                        ))}
                        </div>
                    </div>
    );
};

export default Body;




git link
https://api.github.com/users/USERNAME   































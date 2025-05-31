import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
     try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7912052&lng=84.9973546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();
      console.log("API Response:", json); // Debugging
    
      const restaurants = json?.data?.cards
        ?.map(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        .filter((res) => res !== undefined)
        .flat(); // Flatten the array to avoid nested arrays

      console.log("Restaurants:", restaurants); // Log extracted data
      
      const updatedRestaurants = restaurants.map((item) => ({
        data: {
          id: `${item.info.id}`,
          name: item.info.name,
          img: `https://media-assets.swiggy.com/${item.info.cloudinaryImageId}`,
          cuisimes: item.info.cuisines.join(", "),
          costforTwo: item.info.costForTwo,
          deliveryTime: item.info.sla.deliveryTime,
          avgRating: item.info.avgRating,
        },
      }));
      //console.log("Final Processed Restaurants:", updatedRestaurants);

      setlistOfRestaurants(updatedRestaurants);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus === false) return ( <h1>Looks like some internet connection issue!!
    Please check your connection.</h1>);

  const {loggedInUser, setUserName} = useContext(userContext);


  return listOfRestaurants.length=== 0 ? (<Shimmer />) :(
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-3 p-3">
            <input type="text" data-testid = "searchInput" className="border text-xl border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value);}} />
            <button 
              className="px-2 py-0.01 m-2 bg-pink-100 rounded-xl" 
              onClick={() =>{console.log(searchText)
                //const filteredRestaurant = listOfRestaurants.filter((res) => res.data.name.include(searchText)); 
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.data.name?.toLowerCase().includes(searchText.toLowerCase())
                  );
                  
                setlistOfRestaurants(filteredRestaurant);
                //console.log("filteredRestaurant1111",filteredRestaurant);
            //console.log("listOfRestaurants2222",listOfRestaurants);
            }}><span className="text-3xl">Search</span></button>
        </div>
        <div className="m-3 p-3">
        <button
          className=" px-5 py-1.5 m-2 bg-pink-100 rounded-xl"
          onClick={() => {  
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.3
            );
            setlistOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="m-3 p-3">
          <label>User Name:</label>
          <input 
            className=" border border-black p-2" 
            value={loggedInUser}
            onChange={(e)=> setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {listOfRestaurants.length === 0 ? (
          <h3>No Restaurants Found</h3>
        ) : (
          listOfRestaurants.map((restaurant, index) => (
            <Link key={index} to={"/restaurants/"+restaurant.data.id}><RestaurantCard  resData={restaurant} /> </Link>// ✅ No `.data`
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

const RestaurantCard = ({resData}) => {
    if (!resData || !resData.data) {
        console.warn("Missing restaurant data:", resData);
        return null; // Prevent crashing
    }
    const { id, name, img, cuisimes, deliveryTime, avgRating } = resData.data;
    //console.log('for testinggg',resData);
    //console.log("Rendering RestaurantCard for:", name); // Debugging
    return (
      <div data-testid= "resCard"  className="m-1 p-5 w-56 rounded-xl bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-xl"
          alt={name}
          src={img}
        />
        <h3 className=" p-1 font-bold">{name}</h3>
        <h4>{cuisimes}</h4>
        <h5>{deliveryTime} minutes</h5> 
        <h5>⭐ {avgRating}</h5> 
      </div>
    );
  };

  export default RestaurantCard;
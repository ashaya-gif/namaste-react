const RestaurantCard = ({resData}) => {
    if (!resData || !resData.data) {
        console.warn("Missing restaurant data:", resData);
        return null; // Prevent crashing
    }
    const { id, name, img, cuisimes, deliveryTime, avgRating } = resData.data;

    console.log("Rendering RestaurantCard for:", name); // Debugging
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt={name}
          src={img}
        />
        <h3>{name}</h3>
        <h4>{cuisimes}</h4>
        <h5>{deliveryTime} minutes</h5> 
        <h5>⭐ {avgRating}</h5> 
      </div>
    );
  };

  export default RestaurantCard;
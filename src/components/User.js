import { useEffect, useState } from "react";



const User = ({name}) => {
    const [count] = useState(2);
    const [count2] = useState(3);

    useEffect(()=>{

    }, []);
    // return(
    //     <div className="user-card">
    //         <h1>Count: {count}</h1>
    //         <h2>Count: {count2}</h2>
    //         <h2>Name: {name}</h2>
    //         <h3>Location: Delhi</h3>

    //     </div>
    // );
};

export default User;
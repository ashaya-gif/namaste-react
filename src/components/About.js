import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props);
    }

    
    render(){
    return(
        <div>
            <h1>About</h1>
            <div>
                loggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <User />
            <UserClass name = {"Ashaya class"} location = {"Delhi Class"} />
        </div>
    );

}}





export default About;
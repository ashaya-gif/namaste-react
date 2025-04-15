import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
    }

    
    render(){
    return(
        <div>
            <h1>About</h1>
            <User />
            <UserClass name = {"Ashaya class"} location = {"Delhi Class"} />
        </div>
    );

}}





export default About;
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        

        this.state = {userInfo: {
            name: "dummy",
            location: "default",
            avatar_url: "http// demmypic",
        },};
    }

    async componentDidMount() {
       // console.log("Child component did mount");
       const data = await fetch("https://api.github.com/users/ashaya-gif");
       const json = await data.json();
       console.log(json);

       this.setState({
        userInfo: json,
       });
    }
    render() {
        const {name, location, 
            avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src ={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
    
            </div>
        );
    }
}

export default UserClass;
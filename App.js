    const parent = React.createElement(
        "div", {id: "parent"}, 
        [React.createElement(
            "div", {id: "child"},
            [React.createElement("h1", {}, "this is a h1 tag"), 
            React.createElement("h2", {}, "this is a h2 tag"), ]
        ),
        React.createElement(
            "div", {id: "child"},
            [React.createElement("h1", {}, "this is a h1 tag"), 
            React.createElement("h2", {}, "this is a h2 tag"), ]
        )]
    );
    
    
    
    // const heading = React.createElement(
    //     "h1", {id:"heading", xyz:"abc"}, "Hellow world from react!"
    // );
    console.log(parent)
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
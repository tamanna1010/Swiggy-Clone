{/* <div id="parent">
    <div id="child">
        <h1>Testing child</h1>
    </div>
</div> */}

const heading = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div", 
        {id:"child"}, 
        [
        React.createElement(
            "h1", 
            {}, 
            "Testing child"
            ),
        React.createElement(
            "h2", 
            {}, 
            "Testing siblings"
            )  
        ]
        )
    );
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
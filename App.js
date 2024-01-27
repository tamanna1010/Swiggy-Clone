import React from "react";
import ReactDOM from "react-dom/client";

const heading = <div>I'm Heading element</div>

const HeadingComponent = () => {
    return (
        <>
            <div>I'm Heading component</div>
            
        </>
    )
}

const MainComponent = () => {
    return (
        <>
        <div>I'm main component</div>
        <HeadingComponent/>
        {heading}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent/>);
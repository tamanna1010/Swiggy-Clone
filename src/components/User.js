import { useState } from "react";
const User = (props) => {
    const [count1, setCount1] = useState(0);
    return (
        <>
            <div className="user-card">
                <h2>Count: {count1}</h2>
                <h2>Name: {props.name}</h2>
                <h2>City: Dehradun</h2>
                <h2>Contact: akshaysaini12@gmail.com</h2>
            </div>
        </>
    )
}

export default User;
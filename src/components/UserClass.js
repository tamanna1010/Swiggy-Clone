import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count1: 1,
            count2: 2
        }
        
    }
    async componentDidMount(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
    }
    render() {
        const {name} = this.props;
        const {count1, count2} = this.state;
        return (
            <>
            <div className="user-card">
                <h2>Count: {count1}</h2>
                <button onClick={()=>{
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h2>City: Dehradun</h2>
                <h2>Contact: akshaysaini12@gmail.com</h2>
            </div>
        </>
        )
    }
}

export default UserClass
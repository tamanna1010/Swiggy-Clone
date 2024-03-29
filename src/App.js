import React, {lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Suspense } from "react";
const About = lazy(()=>import("./components/About"))
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
    const [username, setUserName] = useState("");
    useEffect(()=>{
        const data={
            name: "Diksha Saini"
        }
        setUserName(data.name);
    },[]);
    return (
        <>
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser: username, setUserName}}>
            <div className="app">
            <userContext.Provider value={{loggedInUser: "Diksha", setUserName}}>
                <Header/>
                </userContext.Provider>
                <Outlet/>
            </div>
            </userContext.Provider>
            </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {path: "/", element: <AppLayout/>,
    children: [
        {path: "/", element: <Body/>},
        {path: "/about", element: 
        <Suspense fallback={<h1>Loading ...</h1>}><About/></Suspense>
    },
        {path: "/contact", element: <Contact/>},
        {path: "/restaurants/:resId", element: <RestaurantMenu/>},
        {path: "/cart", element: <Cart/>}
    ],
     errorElement: <Error/>},
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
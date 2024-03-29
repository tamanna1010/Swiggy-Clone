import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems= useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleclearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-md" onClick={()=>handleclearCart()}>Clear Cart</button>
                {cartItems.length===0 && <div>Cart is empty. Please add items!!</div>}
                <ItemList items={cartItems}/>
            </div>
        </div>
        </>
    )
}
export default Cart;
import { Outlet } from "react-router-dom";
import './../App.scss';
import { useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";


function Root({cartItems,onDeleteFromCart}) {

    const [cartOpened, setCartOpened] = useState(false);
    return (
        <>
            <div className="app_wrapper">
                {cartOpened && <Cart items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onDeleteFromCart} />} {/* <---- Условный рендеринг */} {/* && - тернарный оператор, если слевастоящий аругмент будет TRUE, тогда выполняется правая часть , если же FALSE, тогда правая часть не выполняется!!! */}
                <Header onClickOpen={() => setCartOpened(true)} />
                <div className="outlet_routes">
                    <Outlet />
                </div>
            </div>
        </>
    )
}


export default Root;
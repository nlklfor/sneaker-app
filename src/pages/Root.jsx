import { Outlet } from "react-router-dom";
import './../App.scss';
import Header from "../components/Header";
import Cart from "../components/Cart";
import Modal from "../components/Modal";


function Root({ cartItems, onDeleteFromCart, onMakeAnOrder, cartOpened, setCartOpened, modalOpened, setModalOpened}) {

    return (
        <>
            <div className="app_wrapper">
                {cartOpened && <Cart items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onDeleteFromCart} onMakeAnOrder={(obj) => onMakeAnOrder(obj)} />} {/* <---- Условный рендеринг */} {/* && - тернарный оператор, если слевастоящий аругмент будет TRUE, тогда выполняется правая часть , если же FALSE, тогда правая часть не выполняется!!! */}
                <Header onClickOpen={() => setCartOpened(true)} />
                {modalOpened && <Modal setModalOpened={setModalOpened}/>}
                <div className="outlet_routes">
                    <Outlet />
                </div>
            </div>
        </>
    )
}


export default Root;
function Cart({ onClickClose, onRemove, items = [] }) {
    return (

        <div className='cart_wrapper'>
            <div className='cart'>
                <h3 className='cart_title'>
                    My Cart
                    <img onClick={onClickClose} src='/img/cross.svg' alt='btn-remove'></img>
                </h3>
                {items.length > 0 ?
                    <div className="cart_ordered">
                        <div className='items'>
                            {items.map((obj) => (
                                <div className='cart_item'>
                                    <img src={obj.img} alt='Nike' width={133} height={112} />
                                    <div className='card_info'>
                                        <p className='card_desc'>
                                            Men shoes <br />
                                            {obj.name}
                                        </p>
                                        <p className='item_price'>{obj.price}</p>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                                </div>
                            ))}
                        </div>
                        <div className='cart_block'>
                            <ul className='cart_total'>
                                <li className='cart_total-item'>
                                    <span>Total</span>
                                    <div></div>
                                    <b>160 $</b>
                                </li>
                                <li className='cart_total-item'>
                                    <span>Taxes 5%:</span>
                                    <div></div>
                                    <b>7.5 $</b>
                                </li>
                                <div className='cart_total-button'>
                                    <button>
                                        Make an order
                                        <img src='/img/arrow.svg' alt='arrow'></img>
                                    </button>

                                </div>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="cart_empty-wrapper">
                        <img className="cart_empty-image" src="/img/emptyCart.png" alt="empty"></img>
                        <h2 className="cart_empty-title"> Your cart is empty</h2>
                        <p className="cart_empty-desc">Add at least one pair of shoes to your cart</p>
                        <button className="cart_empty-btn"> <img src='/img/back-arrow.svg' alt='arrow'></img> Back</button>
                    </div>
                }

                {/* <---- Условный рендеринг */} {/* && - тернарный оператор, если слевастоящий аругмент будет TRUE, тогда выполняется правая часть , если же FALSE, тогда правая часть не выполняется!!! */}

            </div>
        </div>
    )
}
export default Cart;
function Cart() {
    return (
        <div style={{ display: "none" }} className='cart_wrapper'>
            <div className='cart'>
                <h3 className='cart_title'>
                    My purchases
                    <img src='/img/cross.svg' alt='btn-remove'></img>
                </h3>
                <div className='items'>
                    <div className='cart_item'>
                        <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                Nike Kyrie 7
                            </p>
                            <p className='item_price'>160$</p>
                        </div>
                        <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                    </div>
                    <div className='cart_item'>
                        <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                Nike Kyrie 7
                            </p>
                            <p className='item_price'>160$</p>
                        </div>
                        <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                    </div>
                    <div className='cart_item'>
                        <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                Nike Kyrie 7
                            </p>
                            <p className='item_price'>160$</p>
                        </div>
                        <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                    </div>
                    <div className='cart_item'>
                        <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                Nike Kyrie 7
                            </p>
                            <p className='item_price'>160$</p>
                        </div>
                        <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                    </div>
                    <div className='cart_item'>
                        <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                Nike Kyrie 7
                            </p>
                            <p className='item_price'>160$</p>
                        </div>
                        <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                    </div>
                    <div className='cart_item'>
                        <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                Nike Kyrie 7
                            </p>
                            <p className='item_price'>160$</p>
                        </div>
                        <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                    </div>
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
        </div>
    )
}
export default Cart;
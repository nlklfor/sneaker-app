

function Cart({onClickClose, items = []}, onMinus, name , img , price) {
    const onRemoveCart = (props) => {
        onMinus({name, img, price});
        props.setIsAdded(!props.isAdded);
    }
    return (
        <div className='cart_wrapper'>
            <div className='cart'>
                <h3 className='cart_title'>
                    My purchases
                    <img onClick={onClickClose} src='/img/cross.svg' alt='btn-remove'></img>
                </h3>
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
                            <img onClick={onRemoveCart} alt="remove" src='/img/cross.svg' className='btn-remove'></img>
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
        </div>
    )
}
export default Cart;
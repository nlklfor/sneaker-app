function Orders({orderedItems}) {
    console.log(orderedItems);
    return (
        <div className="order_wrapper">
            <div className="my-orders">
                <h1 className="orders_title">My orders</h1>
                {orderedItems.length > 0 ?
                    <div className="cart_ordered">
                        <div className='items'>
                            {orderedItems.map((obj) => (
                                <div className='cart_item'>
                                    <img src={obj.img} alt='Nike' width={133} height={112} />
                                    <div className='card_info'>
                                        <p className='card_desc'>
                                            Men shoes <br />
                                            {obj.name}
                                        </p>
                                        <p className='item_price'>{obj.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className="orders_empty-wrapper">
                        <img className="orders_empty-image" src="/img/no_purchases.png" alt="empty"></img>
                        <h2 className="orders_empty-title"> You don't make any purchases yet</h2>
                        <p className="orders_empty-desc">Make at least one purchase to see your ordered shoes</p>
                        <button className="orders_empty-btn"> <img src='/img/back-arrow.svg' alt='arrow'></img> Back to main</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Orders;
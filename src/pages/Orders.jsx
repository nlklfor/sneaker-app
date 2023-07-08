function Orders({ orderedItems = [] }) {
    return (
        <div className="order_wrapper">
            <div className="my-orders">
                <h1 className="orders_title">My orders</h1>
                {orderedItems.map((obj) => (
                    <div className='cart_item'>
                        <img src={obj.img} alt='shoes-pctr' width={133} height={112} />
                        <div className='card_info'>
                            <p className='card_desc'>
                                Men shoes <br />
                                {obj.name}
                            </p>
                            <p className='item_price'>{obj.price}</p>
                        </div>
                        <img alt="done" src='/img/checked.svg' className='order_done'></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders;
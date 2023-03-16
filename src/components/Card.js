
function Card(props) {
    const added = () => {
        alert("You succesfully added " + props.name + " to your cart");
    }
    return (
        <div className='card'>
            <div className='favourite'>
                <img src='/img/heart-unactive.svg' alt='Unactive' />
            </div>
            <img src={props.img} alt='Nike' width={133} height={112} />
            <p className='card_desc'>
                Men shoes <br />
                {props.name}
            </p>
            <div className='card_bottom'>
                <div className='card_info'>
                    <span className='card_info-price'>
                        PRICE:
                        {props.price}
                    </span>
                </div>
                <button className='card_button' type="submit" onClick={() => added()}>
                    <img alt="Add" src='/img/plus.svg'></img>
                </button>
            </div>
        </div>
    )
}

export default Card;
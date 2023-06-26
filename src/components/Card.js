import { useState } from "react";

function Card({ name, img, price, onPlus }) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFav, setIsFav] = useState(false)

    const onAddCart = () => {
        onPlus({ name, img, price });
        setIsAdded(!isAdded); /*! означает что переменная может быть инвертирована т.е при нажатии менять своё внутреннее значение в противоположном направлении*/ 
    }
    const onAddFav = () => {
        alert("You succesfully added " + name + " to your favourite list");
        setIsFav(!isFav);
    }
    // useEffect(() => {
    //     console.log("Переменная изменилась!")
    // },[unChecked])
    return (
        <div className='card'>
            <img className="favourite" onClick={onAddFav} src={isFav ? "/img/heart-active.svg" : "/img/heart-unactive.svg"} alt='Unactive' />
            <img src={img} alt='Nike' width={133} height={112} />
            <p className='card_desc'>
                Men shoes <br />
                {name}
            </p>
            <div className='card_bottom'>
                <div className='card_info'>
                    <span className='card_info-price'>
                        PRICE:
                        {price}
                    </span>
                </div>
                <img className="btn_add" onClick={onAddCart} alt="Add" src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}></img>  {/*  ? = IF TRUE...   : = IF FALSE... */}
            </div>
        </div>
    )
}

export default Card;
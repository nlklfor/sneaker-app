import { useState } from "react";

function Card({id, name, img, price, onPlus, onFav, Favourite = false }) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFav, setIsFav] = useState(Favourite)

    const onAddCart = () => {
        onPlus({ name, img, price });
        setIsAdded(!isAdded); /*! означает что переменная может быть инвертирована т.е при нажатии менять своё внутреннее значение в противоположном направлении*/ 
    }
    const onAddFav = () => {
        onFav({id, name , img , price});
        setIsFav(!isFav);
    }
    // useEffect(() => {
    //     console.log("Переменная изменилась!")
    // },[unChecked])
    return (
        
        <div className='card'>
            <img className="favourite" onClick={onAddFav} src={isFav ? "/img/heart-active.svg" : "/img/heart-unactive.svg"} alt='Favoutire' />
            <img src={img} alt='shoe' width={133} height={112} />
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
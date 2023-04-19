import { useEffect, useState } from "react";

function Card(props) {
    const [checked, setChecked] = useState(false)
    
    const unChecked = () => {
        setChecked(!checked);   {/*! означает что переменная может быть инвертирована т.е при нажатии менять своё внутреннее значение в противоположном направлении*/}
    }
    // const onAddCart = () => {
    //     alert("You succesfully added " + props.name + " to your cart");
    // }
    const onAddFav = () => {
        alert("You succesfully added " + props.name + " to your favourite list");
    }
    // useEffect(() => {
    //     console.log("Переменная изменилась!")
    // },[unChecked])
    return (
        <div className='card'>
            <img className="favourite" onClick={onAddFav} src='/img/heart-unactive.svg' alt='Unactive' />
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
                <img className="btn_add" onClick={unChecked} alt="Add" src={checked ? "/img/checked.svg" : "/img/plus.svg"}></img>  {/*  ? = IF TRUE...   : = IF FALSE... */}
            </div>
        </div>
    )
}

export default Card;
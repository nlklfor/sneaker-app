import { useState } from "react";
import ContentLoader from "react-content-loader";

function Card({ id, name, img, price, onPlus, onFav, Favourite = false, added = false, loading }) {
    const [isAdded, setIsAdded] = useState(added)
    const [isFav, setIsFav] = useState(Favourite)

    const onAddCart = () => {
        onPlus({ name, img, price });
        setIsAdded(!isAdded); /*! означает что переменная может быть инвертирована т.е при нажатии менять своё внутреннее значение в противоположном направлении*/
    }
    const onAddFav = () => {
        onFav({ id, name, img, price });
        setIsFav(!isFav);
    }
    // useEffect(() => {
    //     console.log("Переменная изменилась!")
    // },[unChecked])
    return (
        <>
            {loading
                ? <ContentLoader
                    speed={2}
                    width={200}
                    height={300}
                    viewBox="0 0 200 300"
                    backgroundColor="#c7c7c7"
                    foregroundColor="#ffffff"
                >
                    <rect x="532" y="564" rx="3" ry="3" width="88" height="6" />
                    <rect x="555" y="572" rx="3" ry="3" width="52" height="6" />
                    <rect x="523" y="576" rx="3" ry="3" width="410" height="6" />
                    <rect x="557" y="569" rx="3" ry="3" width="87" height="1" />
                    <rect x="510" y="571" rx="3" ry="3" width="91" height="3" />
                    <rect x="0" y="0" rx="5" ry="5" width="150" height="115" />
                    <rect x="571" y="562" rx="0" ry="0" width="14" height="11" />
                    <rect x="571" y="577" rx="0" ry="0" width="23" height="3" />
                    <rect x="555" y="574" rx="0" ry="0" width="124" height="2" />
                    <circle cx="575" cy="573" r="7" />
                    <rect x="0" y="178" rx="4" ry="4" width="120" height="15" />
                    <rect x="0" y="151" rx="4" ry="4" width="150" height="15" />
                    <circle cx="157" cy="244" r="13" />
                    <rect x="0" y="235" rx="4" ry="4" width="120" height="18" />
                </ContentLoader>
                : <div className='card'>
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
                                {price}$
                            </span>
                        </div>
                        <img className="btn_add" onClick={onAddCart} alt="Add" src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}></img>  {/*  ? = IF TRUE...   : = IF FALSE... */}
                    </div>

                </div>}
        </>


    )
}

export default Card;
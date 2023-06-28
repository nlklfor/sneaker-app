import { useState } from "react";
function Favourite({searchItem, onChangeInputValue, onClickClear}) {
    // const [favouriteItems, setFavouriteItems] = useState([]);
    return (
        <div className="fav_wrapper">
            <h1 className="fav_title">
                {searchItem ? `Searhing for: "${searchItem}"` : "Favourite shoes"}
            </h1>
            <div className='search-block'>
                <img width={12} height={12} alt="search" src='/img/search.svg'></img>
                <input onChange={onChangeInputValue} value={searchItem} placeholder='Search...'></input>
                <img onClick={onClickClear} className="clear" src='/img/cross.svg' alt='btn-remove'></img>
            </div>
        </div>
    )
}

export default Favourite;
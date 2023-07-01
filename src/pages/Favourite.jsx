
import Card from "../components/Card";
function Favourite({ onAddToFav, items = [], }) {
    return (
        <div className="fav_wrapper">
          <h1 className="fav_title">My favourite shoes</h1>
            <div className="fav_items">
                {items.length > 0 ?
                    <>
                        {items.map((obj, index) => (

                            <Card name={obj.name} price={obj.price + '$'} img={obj.imageURL} id={obj.id} key={index} onFav={onAddToFav} Favourite={true} />
                            // <img onClick={() => onDeleteFromFav(obj.id)} alt="remove" src='/img/cross.svg' className='btn-remove'></img>
                        ))}
                    </>
                    :
                    <div className="fav_empty-wrapper">
                        <img className="fav_empty-image" src="/img/favEmpty.png" alt="empty"></img>
                        <h2 className="fav_empty-title"> Your favourite list is empty</h2>
                        <p className="fav_empty-desc">Add at least one pair of shoes to your favourite list</p>
                        <button className="fav_empty-btn"> <img src='/img/back-arrow.svg' alt='arrow'></img>Back to shopping</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favourite;
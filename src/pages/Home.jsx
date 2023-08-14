import './../App.scss';
import Card from "../components/Card"
import Search from '../components/Search';

function Home({ items, searchItem, setSearchItem, onChangeInputValue, onClickClear, onAddToCart, onAddToFav, cartItems, isLoading }) {
    const renterItems = () => {

        return (
            isLoading ? [...Array(10)] : items.filter((item) => item.name.toLowerCase().includes(searchItem)).map((item) => (
                <Card loading={isLoading} added={cartItems.some(obj => obj.name === item.name)} name={item.name} price={item.price} img={item.imageURL} onPlus={(obj) => onAddToCart(obj)} id={item.id} key={item.id} onFav={(obj) => onAddToFav(obj)} />
            )
            ))

    }
    return (
        <div className="content">
            <Search searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear} />
            <div className='sneaker_list'>
                {renterItems()}
            </div>
        </div>
    )
}

export default Home;
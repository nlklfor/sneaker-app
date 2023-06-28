import './../App.scss';
import Card from "../components/Card"
import Search from '../components/Search';

function Home({items , searchItem, setSearchItem, onChangeInputValue, onClickClear, onAddToCart}) {
    return (        
            <div className="content">
                <Search searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear} />
                <div className='sneaker_list'>
                    {items.filter((obj) => obj.name.toLowerCase().includes(searchItem)).map((obj) => {
                        return (
                            <Card name={obj.name} price={obj.price + '$'} img={obj.imageURL} onPlus={(obj) => onAddToCart(obj)} key={obj.name} />
                        )
                    })}
                </div>
            </div>
    )
}

export default Home;
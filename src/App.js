import './App.scss';
import Card from "./components/Card"
import Cart from "./components/Cart"
import Header from './components/Header';
import Search from './components/Search';
const cardItem = [
  { name: 'Nike Lebron', price: 120 , imageURL: '/img/sneakers/shoe1.png'},
  { name: 'Nike Kyrie', price: 140 , imageURL: '/img/sneakers/shoe2.png'},
  { name: 'Under Armour', price: 120, imageURL: '/img/sneakers/shoe3.png' },
  { name: 'Nike Air Jordan', price: 120 , imageURL: '/img/sneakers/shoe4.png'}
];
function App(props) {

  return (
    <div className="app_wrapper">
      <Cart />
      <Header />
      <div className="content">
        <Search />
        <div className='sneaker_list'>
          {cardItem.map((obj) => {
            return(
              <Card name={obj.name} price={obj.price + '$'} img={obj.imageURL} />
            )
          })}
            {/* <Card name='Nike Lebron' price='120$' img='/img/sneakers/shoe1.png'/>
            <Card name='Nike Kyrie Flytrap' price='110$' img='/img/sneakers/shoe2.png'/>
            <Card name='Under Armour' price='100$' img='/img/sneakers/shoe3.png'/>
            <Card name='Nike Air Jordan' price='105$' img='/img/sneakers/shoe4.png'/> */}
        </div>
      </div>
    </div>
  );
}

export default App;

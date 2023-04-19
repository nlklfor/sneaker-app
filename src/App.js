import { useEffect, useState } from 'react';
import './App.scss';
import Card from "./components/Card"
import Cart from "./components/Cart"
import Header from './components/Header';
import Search from './components/Search';
function App(props) {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://6426e372556bad2a5b5a9478.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, [])
  return (
    <div className="app_wrapper">
      {cartOpened && <Cart onClickClose={() => setCartOpened(false)} />} {/* <---- Условный рендеринг */} {/* && - тернарный оператор, если слевастоящий аругмент будет TRUE, тогда выполняется правая часть , если же FALSE, тогда правая часть не выполняется!!! */}
      <Header onClickOpen={() => setCartOpened(true)} />
      <div className="content">
        <Search />
        <div className='sneaker_list'>
          {items.map((obj) => {
            return (
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

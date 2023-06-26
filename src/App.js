import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import Card from "./components/Card"
import Cart from "./components/Cart"
import Header from './components/Header';
import Search from './components/Search';

function App(props) {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchItem, setSearchItem] = useState('')
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch('https://6426e372556bad2a5b5a9478.mockapi.io/items').then((res) => {
    //   return res.json();
    // }).then(json => {
    //   setItems(json);
    // })
    axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6426e372556bad2a5b5a9478.mockapi.io/cart', obj)
    setCartItems([...cartItems, obj]);
  };

  const onDeleteFromCart = (id) => {
    axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/cart/${id}`)
    setCartItems(cartItems.filter(obj => obj.id !== id))
  }

  const onChangeInputValue = (event) => {
    setSearchItem(event.target.value);
  }
  const onClickClear = () => {
    setSearchItem('');
  }

  return (
    <div className="app_wrapper">
      {cartOpened && <Cart items={cartItems} onClickClose={() => setCartOpened(false)} onRemove={onDeleteFromCart} />} {/* <---- Условный рендеринг */} {/* && - тернарный оператор, если слевастоящий аругмент будет TRUE, тогда выполняется правая часть , если же FALSE, тогда правая часть не выполняется!!! */}
      <Header onClickOpen={() => setCartOpened(true)} />
      <div className="content">
        <Search searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear} />
        <div className='sneaker_list'>
          {items.filter((obj) => obj.name.toLowerCase().includes(searchItem)).map((obj) => {
            return (
              <Card name={obj.name} price={obj.price + '$'} img={obj.imageURL} onPlus={(obj) => onAddToCart(obj)} key={obj.name} />
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

import './App.scss';
import Favourite from './pages/Favourite';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Root from './pages/Root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
    
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

  // const onAddToFav = (id) => {
  //     axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/cart/${id}`)
  //     setCartItems(cartItems.filter(obj => obj.id !== id))
  // }

  // const onDeleteFromFav = (id) => {
  //     axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/cart/${id}`)
  //     setCartItems(cartItems.filter(obj => obj.id !== id))
  // }

  const onChangeInputValue = (event) => {
    setSearchItem(event.target.value);
  }
  const onClickClear = () => {
    setSearchItem('');
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root cartItems={cartItems} onDeleteFromCart={onDeleteFromCart} />} >
        <Route index element={<Home items={items} searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear} onAddToCart={onAddToCart} />} />
        <Route path='/fav-list' element={<Favourite searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear}/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;

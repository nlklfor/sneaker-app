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
  const [favItems , setFavItems] = useState([]);
    
  useEffect(() => {
      axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/items').then(res => {
          setItems(res.data);
      })
      axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/cart').then(res => {
          setCartItems(res.data);
      })
      // axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/favourites').then(res => {
      //     setFavItems(res.data);
      // })
  }, [])

  const onAddToCart = (obj) => {
      axios.post('https://6426e372556bad2a5b5a9478.mockapi.io/cart', obj)
      setCartItems([...cartItems, obj]);
  };

  const onDeleteFromCart = (id) => {
      axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/cart/${id}`)
      setCartItems(cartItems.filter(obj => obj.id !== id))
  }

  const onAddToFav = (obj) => {
    if (favItems.find((favObj) => favObj.id === obj.id)) {
      // axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/favourite/${obj.id}`)
      setFavItems(favItems.filter((item) => item.id !== obj.id));
    } else {
      // axios.post(`https://6426e372556bad2a5b5a9478.mockapi.io/favourite/`, obj);
      setFavItems([...favItems, obj]);
    }
  }
  const onChangeInputValue = (event) => {
    setSearchItem(event.target.value);
  }
  const onClickClear = () => {
    setSearchItem('');
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root cartItems={cartItems} onDeleteFromCart={onDeleteFromCart} />} >
        <Route index element={<Home items={items} searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear} onAddToCart={onAddToCart} onAddToFav={onAddToFav} />} />
        <Route path='/fav-list' element={<Favourite key={items.name} items={favItems} onAddToFav={onAddToFav}/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;

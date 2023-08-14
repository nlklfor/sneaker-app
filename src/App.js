import './App.scss';
import Favourite from './pages/Favourite';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Root from './pages/Root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Orders from './pages/Orders';

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpened, setModalOpened] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const fetchItems = await axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/items')
      const fetchCart = await axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/cart')
      //const fetchFavourite axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/favourites').then(res => {
      //     setFavItems(res.data);
      // })

      setIsLoading(false);
      setCartItems(fetchCart.data);
      setItems(fetchItems.data);
    }
    fetchData();
  }, [])
  useEffect(() => {
      console.log('Modal was opened')
    return () => {
        console.log('Modal was closed')
    }
  }, [modalOpened])

  const onAddToCart = (obj, name) => {
    if (cartItems.find((cartObj) => cartObj.name === obj.name)) {
      axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/cart/${name}`)
    } else {
      axios.post('https://6426e372556bad2a5b5a9478.mockapi.io/cart', obj).then(() => axios.get('https://6426e372556bad2a5b5a9478.mockapi.io/cart').then(res => {
        setCartItems(res.data);
      }))
    }

    // setCartItems([...cartItems, obj]);
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
  const onClose = () => {
    setCartOpened()
  }
  const onClearCart = () => {
    axios.delete(`https://6426e372556bad2a5b5a9478.mockapi.io/cart/`);
  }
  const onMakeAnOrder = () => {
    // axios.post(`https://6426e372556bad2a5b5a9478.mockapi.io/ordered/`, obj);
    setOrderedItems(cartItems);
    onClose();
    onClearCart();
    setModalOpened(true)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root cartOpened={cartOpened} modalOpened={modalOpened} setModalOpened={setModalOpened} setCartOpened={setCartOpened} cartItems={cartItems} onDeleteFromCart={onDeleteFromCart} onMakeAnOrder={onMakeAnOrder} setOrderedItems={setOrderedItems} />} >
        <Route index element={<Home isLoading={isLoading} cartItems={cartItems} items={items} searchItem={searchItem} setSearchItem={setSearchItem} onChangeInputValue={onChangeInputValue} onClickClear={onClickClear} onAddToCart={onAddToCart} onAddToFav={onAddToFav} />} />
        <Route path='/fav-list' element={<Favourite key={items.name} items={favItems} onAddToFav={onAddToFav} />} />
        <Route path='/orders' element={<Orders orderedItems={orderedItems} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;

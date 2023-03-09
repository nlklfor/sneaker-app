import './App.scss';
import Card from "./components/Card"
import Cart from "./components/Cart"
import Header from './components/Header';
import Search from './components/Search';
const cardItem = [
  { name: 'Nike Top Krossi', amount: 120 },
  { name: 'Nike Govno Krossi', amount: 140 },
  { name: 'Nike Top Krossi', amount: 120 },
  { name: 'Nike Top Krossi', amount: 120 }
];
function App(props) {

  return (
    <div className="app_wrapper">
      <Cart />
      <Header />
      <div className="content">
        <Search />
        <div className='sneaker_list'>
            <Card name='Nike' price='140$'/>
            <Card name='Nike Air' price='150$'/>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.scss';
function App() {
  return (
    <div className="app_wrapper">
      <div className='cart_wrapper'>
        <div className='cart'>
          <h3 className='cart_title'>
            My purchases
            <img src='/img/cross.svg' alt='btn-remove'></img>
          </h3>
          <div className='items'>
            <div className='cart_item'>
              <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
              <div className='card_info'>
                <p className='card_desc'>
                  Men shoes <br />
                  Nike Kyrie 7
                </p>
                <p className='item_price'>160$</p>
              </div>
              <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
            </div>
            <div className='cart_item'>
              <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
              <div className='card_info'>
                <p className='card_desc'>
                  Men shoes <br />
                  Nike Kyrie 7
                </p>
                <p className='item_price'>160$</p>
              </div>
              <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
            </div>
            <div className='cart_item'>
              <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
              <div className='card_info'>
                <p className='card_desc'>
                  Men shoes <br />
                  Nike Kyrie 7
                </p>
                <p className='item_price'>160$</p>
              </div>
              <img alt="remove" src='/img/cross.svg' className='btn-remove'></img>
            </div>
            
          </div>
          <div className='cart_block'>
            <ul className='cart_total'>
              <li className='cart_total-item'>
                <span>Total</span>
                <div></div>
                <b>160 $</b>
              </li>
              <li className='cart_total-item'>
                <span>Taxes 5%:</span>
                <div></div>
                <b>7.5 $</b>
              </li>
              <div className='cart_total-button'>
                <button>
                  Make an order
                  <img src='/img/arrow.svg' alt='arrow'></img>
                </button>

              </div>
            </ul>
          </div>
        </div>
      </div>
      <header>
        <div className="header_info">
          <img src="/img/logo.png" alt="Logo" className="header_info-logo" width={50} height={50} />
          <div className="header">
            <h3 className="header_title">
              REACT SNEAKERS
            </h3>
            <p className="header_subtitle">
              Beast sneaker shop
            </p>
          </div>
        </div>
        <ul className="header_profile">
          <li className="header_profile-cart">
            <img src="/img/cart.svg" alt="Cart" width={20} height={20} />
            <span> 200$</span>
          </li>
          <li className="header_profile-fav">
            <img src="/img/favourite.svg" alt="Profile" width={20} height={20} />
          </li>
          <li className="header_profile-acc">
            <img src="/img/profile.svg" alt="Profile" width={20} height={20} />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className='top_block'>
          <h1 className="content_title">
            All shoes
          </h1>
          <div className='search-block'>
            <img width={12} height={12} alt="search" src='/img/search.svg'></img>
            <input placeholder='Search...'></input>
          </div>
        </div>
        <div className='sneaker_list'>
          <div className='card'>
            <div className='favourite'>
              <img src='/img/heart-unactive.svg' alt='Unactive' />
            </div>
            <img src='/img/sneakers/shoe1.png' alt='Nike' width={133} height={112} />
            <p className='card_desc'>
              Men shoes <br />
              Nike Kyrie 7
            </p>
            <div className='card_bottom'>
              <div className='card_info'>
                <span className='card_info-price'>
                  PRICE:
                  <b> 160$</b>
                </span>
              </div>
              <button className='card_button'>
                <img alt="Add" src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='favourite'>
              <img src='/img/heart-unactive.svg' alt='Unactive' />
            </div>
            <img src='/img/sneakers/shoe2.png' alt='Nike' width={133} height={112} />
            <p className='card_desc'>
              Men shoes <br />
              Nike Blazer Mid Suede
            </p>
            <div className='card_bottom'>
              <div className='card_info'>
                <span className='card_info-price'>
                  PRICE:
                  <b> 110$</b>
                </span>
              </div>
              <button className='card_button'>
                <img alt="Add" src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

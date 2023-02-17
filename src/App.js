import './App.scss';
function App() {
  return (
    <div className="app_wrapper">
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
            <img src="/img/cart.svg" alt="Cart" width={30} height={30} />
            <span> 120$</span>
          </li>
          <li className="header_profile-acc">
            <img src="/img/profile.svg" alt="Profile" width={30} height={30} />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="content_title">
          All shoes
        </h1>
        <div className='sneaker_list'>
          <div className='card'>
            <img src='/img/sneakers/2.png' alt='Nike' width={150} height={150} />
            <p className='card_desc'>
              Men shoes <br />
              Nike Air Force 1 '07
            </p>
            <div className='card_bottom'>
              <div className='card_info'>
                <span className='card_info-price'>
                  Price:
                  <b> 120$</b>
                </span>
              </div>
              <button className='card_button'>
                <img width={20} height={20} alt="Add" src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
          <div className='card'>
            <img src='/img/sneakers/2.png' alt='Nike' width={150} height={150} />
            <p className='card_desc'>
              Men shoes <br />
              Nike Air Force 1 '07
            </p>
            <div className='card_bottom'>
              <div className='card_info'>
                <span className='card_info-price'>
                  Price:
                  <b> 120$</b>
                </span>
              </div>
              <button className='card_button'>
                <img width={20} height={20} alt="Add" src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
          <div className='card'>
            <img src='/img/sneakers/2.png' alt='Nike' width={150} height={150} />
            <p className='card_desc'>
              Men shoes <br />
              Nike Air Force 1 '07
            </p>
            <div className='card_bottom'>
              <div className='card_info'>
                <span className='card_info-price'>
                  Price:
                  <b> 120$</b>
                </span>
              </div>
              <button className='card_button'>
                <img width={20} height={20} alt="Add" src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
          <div className='card'>
            <img src='/img/sneakers/2.png' alt='Nike' width={150} height={150} />
            <p className='card_desc'>
              Men shoes <br />
              Nike Air Force 1 '07
            </p>
            <div className='card_bottom'>
              <div className='card_info'>
                <span className='card_info-price'>
                  Price:
                  <b> 120$</b>
                </span>
              </div>
              <button className='card_button'>
                <img width={20} height={20} alt="Add" src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './../App.scss';
import { Link } from "react-router-dom";
function Header(props) {
    return (
        <header>

            <div className="header_info">
                <Link to="/">
                    <img src="/img/logo.png" alt="Logo" className="header_info-logo" width={50} height={50} />
                </Link>
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
                    <img onClick={props.onClickOpen} src="/img/cart.svg" alt="Cart" width={20} height={20} />
                    <span> 200$</span>
                </li>
                <li className="header_profile-fav">
                    <Link to="/fav-list"><img src="/img/favourite.svg" alt="Profile" width={20} height={20} /></Link>

                </li>
                <li className="header_profile-acc">
                    <Link to="/orders"><img src="/img/profile.svg" alt="Profile" width={20} height={20} /></Link>
                </li>
            </ul>
        </header>

    )
}
export default Header;
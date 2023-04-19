function Header(props) {
    return (
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
                    <img onClick={props.onClickOpen} src="/img/cart.svg" alt="Cart" width={20} height={20} />
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
    )
}
export default Header;
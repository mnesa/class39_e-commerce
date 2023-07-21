import "./Header.css";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-flex">
            <div>
              <h1>Ema-John</h1>
              <img src={logo} alt="" />
            </div>
            <nav>
              <a href="/shop">Shop</a>
              <a href="/order">Order</a>
              <a href="/Order-Review">Order Review</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

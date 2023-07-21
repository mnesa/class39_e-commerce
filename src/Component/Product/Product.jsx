import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratting } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price:{price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Ratting:{ratting}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        Add To Cart
        <FontAwesomeIcon className="f-icon" icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;

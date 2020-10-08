import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import reducer from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, img, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket --> dispatch action type REMOVE_FROM_BASKET
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={img} alt="" />
      <div className="checkoutProduct__info">
        <h2>{title}</h2>
        <p className="checkoutProduct__title">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

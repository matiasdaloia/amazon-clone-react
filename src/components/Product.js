import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../context/StateProvider";

function Product({ title, price, rating, img, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch an action to the dataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={img} alt="product_image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

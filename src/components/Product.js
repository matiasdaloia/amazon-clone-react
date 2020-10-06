import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, price, rating, img, id }) {
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
      <button type="submit">Add to Basket</button>
    </div>
  );
}

export default Product;

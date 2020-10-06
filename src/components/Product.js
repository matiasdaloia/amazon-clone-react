import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, price, rating, img }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
        alt="product_image"
      />
      <button type="submit">Add to Basket</button>
    </div>
  );
}

export default Product;

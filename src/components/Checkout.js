import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__product"></div>
      </div>
      <div className="checkout__right">
        <div className="checkout__rightCart">
          <h2>
            Subtotal (2 items) : <strong>$250.96</strong>
            <p>This order contains a gift</p>
            <button>Proceed to checkout</button>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

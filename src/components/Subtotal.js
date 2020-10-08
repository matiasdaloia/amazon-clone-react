import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  // State for the subtotal
  const [subtotal, setSubtotal] = useState();

  // Function to get the subtotal
  const getSubtotal = (basket) => {
    setSubtotal(basket?.reduce((amount, item) => item.price + amount, 0));
  };

  // Each time basket changes, it re renders the subtotal
  useEffect(() => {
    getSubtotal(basket);
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

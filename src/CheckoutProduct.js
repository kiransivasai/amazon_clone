import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckOutProduct({ id, image, title, price, rating, quantity }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="Checkout" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong> {price} </strong>
        </p>
        <p className="checkoutProduct__quantity">Quantity: {quantity}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="" aria-labelledby="">
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;

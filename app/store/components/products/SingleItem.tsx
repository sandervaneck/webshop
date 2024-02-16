import React from "react";
import { Cart, MyProduct } from "@/app/components/constants/types";
import { addToCart } from "../cart/functions";

const SingleProduct = ({
  item,
  setProduct,
  setCart,
  cart
}: {
  cart: Cart;
  setCart: (c: Cart) => void;
  item: MyProduct;
  setProduct: (a: MyProduct | null) => void;
}) => {
  const { price, img, name } = item;

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Check if the click occurred on the cart button
    if ((e.target as HTMLElement).classList.contains('add-to-cart')) {
      return; // Do nothing if the click is on the cart button
    }
    setProduct(item);
  };

  return (
    <div className="product-container" onClick={handleContainerClick} style={{ cursor: 'pointer' }}>
      <img
        className="product-image"
        src={img[0]}
        alt={name}
      />
      <div className="product-details">
        <h4 className="product-name">{name.substring(0, 20)}...</h4>
        <p className="product-price">€{price}</p>
      </div>
      <button className="add-to-cart" onClick={() => addToCart(setCart, cart, item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;


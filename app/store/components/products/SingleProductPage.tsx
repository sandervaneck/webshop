import React from "react";
import { Cart, MyProduct } from "@/app/components/constants/types";
import { addToCart } from "../cart/functions";
import ImageSlider from "../slider/Image";

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
  const { price, name, category, description } = item;

  const handleClick = () => {
    addToCart(setCart, cart, item);
  };

  return (
    <div className="containerSingleProduct">
      <div className="back-button">
        <button onClick={() => setProduct(null)}>&lt; Back</button>
      </div>
      <div className="product-info">
        <div className="image-container">
          <ImageSlider item={item} />
        </div>
        <div className="product-details">
          <h2>{name}</h2>
          <span className="category">{category}</span>
          <p className="description">{description}</p>
          <p className="price">€{price}</p>
          <button className="add-to-cart" onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

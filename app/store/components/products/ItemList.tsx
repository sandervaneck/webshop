import React from "react";
import { Cart, MyProduct } from "@/app/components/constants/types";
import SingleProduct from "./SingleItem";
import { sneakers, running, products } from "@/app/components/constants/Products";

const mapThroughItems = (cart: Cart, items: MyProduct[], setCart: (c: Cart) => void, setProduct: (a: MyProduct | null) => void) => {
  return items.map((item: any, idx) => {
    return <SingleProduct key={idx} item={item} setProduct={setProduct} cart={cart} setCart={setCart} />;
  });
};

const ItemList = ({
  category,
  setProduct,
  setCart,
  cart
}: {
  cart: Cart,
  setCart: (c: Cart) => void,
  category: string,
  setProduct: (a: MyProduct | null) => void
}) => {
  const items = returnCategory(category);
  const pending = false; // Assuming this value is set somewhere else in your code

  return (
    <>
      {!pending && items.length > 0 ? (
        <div className="containerItemList">
          {mapThroughItems(cart, items, setCart, setProduct)}
        </div>
      ) : !pending && items.length === 0 ? (
        <div className="container empty-list">
          <h4>No Items Found</h4>
          <button className="btn-primary">Back to home</button>
        </div>
      ) : (
        <div className="containerItemList">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default ItemList;

const returnCategory = (category: string) => {
  let result: MyProduct[];
  switch (true) {
    case category === 'Sneakers':
      result = sneakers;
      break;
    case category === 'Running':
      result = running;
      break;
    default:
      result = products;
  }
  return result;
};

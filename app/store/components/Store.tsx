
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: `Store | ${ShopName}`,
 };
 
 import React, { useState } from "react";
 import Categories from "./products/Categories";
 import ItemList from "./products/ItemList";
 import ScrollBtn from "./products/ScrlBtn";
 import SingleProductPage from "./products/SingleProductPage";
 import { Cart, MyProduct } from "@/app/components/constants/types";
 import AppAppBar from "@/app/components/appBar";
 import { categories } from "@/app/components/constants/Products";
import { ShopName } from "@/app/components/constants/Texts";
 
 const ProductStore = ({
   openCart,
   setOpenCart,
   cart,
   setCart,
   numberOfItems
 }: {
   openCart: boolean;
   numberOfItems: number;
   setOpenCart: (b: boolean) => void;
   cart: Cart;
   setCart: (c: Cart) => void;
 }) => {
   const [category, setCategory] = useState(categories[0]);
   const [product, setProduct] = useState<MyProduct | null>(null);
 
   return (
     <div className="container">
       <AppAppBar
         numberOfItems={numberOfItems}
         openCart={openCart}
         setOpenCart={setOpenCart}
       />
       <div className="content">
         <Categories
           categories={categories}
           category={category}
           setCategory={setCategory}
           setProduct={setProduct}
         />
         {product === null && (
           <ItemList cart={cart} setCart={setCart} category={category} setProduct={setProduct} />
         )}
         {product && (
           <SingleProductPage cart={cart} setCart={setCart} item={product} setProduct={setProduct} />
         )}
         <ScrollBtn />
       </div>
     </div>
   );
 };
 
 export default ProductStore;
 
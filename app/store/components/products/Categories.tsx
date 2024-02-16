import React from "react";
import { MyProduct } from "@/app/components/constants/types";

const Categories = ({
  category,
  setCategory,
  categories,
  setProduct
}: {
  setProduct: (a: MyProduct | null) => void;
  categories: string[];
  category: string;
  setCategory: (a: string) => void;
}) => {
  return (
    <div className="containerCategories" style={{ justifyContent: "center", marginTop: "2rem" }}>
      {categories.map((cat, idx) => (
        <div key={idx} className="padding">
          <button
            className={`button ${cat === category ? "outlined" : "contained"}`}
            onClick={() => {
              setProduct(null);
              setCategory(cat);
            }}
            style={{ letterSpacing: "3px" }}
          >
            {cat}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;

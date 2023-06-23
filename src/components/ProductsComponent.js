import { getProducts } from "../services/product.service";
import { useState, useEffect } from "react";
import ProductComponent from "./ProductComponent";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(products)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts]);

  return (
    <div className="w-full min-h-screen flex justify-center items-end gap-customGap py-10 flex-wrap md:flex-nowrap">
      {products.map((product) => (
        <ProductComponent
          product={product}
          name={product.name}
          info={product.info}
          price={product.price}
          id={product._id}
          img={product.image}
          key={product._id}
          count={1}
        />
      ))}
    </div>
  );
};

export default ProductsComponent;

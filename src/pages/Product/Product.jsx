import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RealatedProducts from "../../components/RealatedProducts/RealatedProducts";

const Product = () => {
  const { all_products } = useContext(shopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));  
  return (
    <div className="Product">
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RealatedProducts />
    </div>
  );
};

export default Product;

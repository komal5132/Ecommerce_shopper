import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RealatedProducts from "../../components/RealatedProducts/RealatedProducts";
import { useParams } from "react-router-dom";

const Product = () => {
  const {all_products ,url } = useContext(shopContext);
  const {productId}=useParams()
  console.log('productId',productId)
  const product =
    all_products.length > 0
      ? all_products.find((e) => e.productId === Number(productId))
      : null;
  if (!product) {
    return <div>Loading...</div>;
  }

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


// import React, { useContext } from "react";
// import { shopContext } from "../../context/ShopContext";
// import Breadcrums from "../../components/Breadcrums/Breadcrums";
// import { useParams } from "react-router-dom";
// import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
// import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
// import RealatedProducts from "../../components/RealatedProducts/RealatedProducts";

// const Product = () => {
//   const {all_products}=useContext(shopContext)
//   const {productId}=useParams()      
//   const product = all_products.find((e) => e.id === Number(productId)); 

//   return (
//     <div className="Product">
//       <Breadcrums product={product} />
//       <ProductDisplay product={product} />
//       <DescriptionBox />
//       <RealatedProducts />
//     </div>
//   );
// };

// export default Product;


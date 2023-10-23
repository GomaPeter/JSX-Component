import React from "react";
import { product } from "./ProductComponents";
const Image = () => {
    return (
        <div>
            <img src={product.Image} alt= {product.name}   style={{ width: "285px", height: "180px" }}/>
        </div>
    );
};
export default Image;

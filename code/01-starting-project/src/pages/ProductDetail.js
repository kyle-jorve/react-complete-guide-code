import React from "react";
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();



    return (
        <React.Fragment>
            <h1>Product Detail</h1>
            <p>{params.productID}</p>
        </React.Fragment>
    )
}

export default ProductDetail;
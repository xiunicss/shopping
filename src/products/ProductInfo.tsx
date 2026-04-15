import products from "../data/products.json"
import { useParams } from "react-router-dom"

import {imageMap} from "./ProductList"



const ProductInfo = () => {
    const { id } = useParams();

    // id로 상품 찾기
    const product = products.find((p:any) => p.id === Number(id))

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>
    }


    return(
        <div className="product-info">
            <h2>{product.name}</h2>
            <div className="product-details">
                <img 
                    src={imageMap[product.image]}
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <div className="product-content">
                <p>{product.description}</p>
                <p className="price">가격: {product.price}</p>

            </div>
        </div>
    )
}

export default ProductInfo
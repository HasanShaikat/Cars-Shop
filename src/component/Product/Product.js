import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, name, price, img}=props.product;
    
    return (
        <div className="product">
            <img src={img} alt=""/>
            <div className="card-body">
                <h3>Brands : {name}</h3>
                <p>Price : ${price}</p>
            </div>
            <button onClick={()=>props.addToCart(props.product)}>Add To Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;
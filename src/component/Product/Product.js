import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, name, price, img}=props.product;

    const addToCart = () =>{
        console.log("addToCart")
    }
    return (
        <div className="product">
            <img src={img} alt=""/>
            <div className="card-body">
                <h3>Brands {name}</h3>
                <p>Price {price}</p>
            </div>
            <button onClick={addToCart}>Add To Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;
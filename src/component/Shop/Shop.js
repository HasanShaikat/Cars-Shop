import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, []);

    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div>
            <div className="head">
                <h1>CARS SHOP</h1>
                <p>Choice your dream car</p>
            </div>

            <div className="shop-container">
                
                <div className="product-container">
                    {
                        products.map(product=> <Product
                        key={product.id} 
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                    cart={cart}
                    ></Cart>
                </div>
            </div>
            <div className='asking-part'>
                <h2>Question Part</h2>
                <hr/>
                <div className="asking-body">
                    <div>
                        <label>Props VS State Diffrent &#63; </label>
                        <p> <span>PROPS &#58;</span> Props are read-only components. Props is Immutable components so we can't modify this component. Props can be accessed by the child component. <br/> <span>STATE &#58; </span>  
                        State changes can be asynchronous. State is mutable components so we can modify this component. State can't be accessed by the child component. Stateless components cannot have State.</p>
                    </div>
                    <hr/>
                    <div>
                        <label>How UseState works &#63; </label>
                        <p>
                        useState is a Hook (function) that allows you to have state variables in functional components. State generally refers to data or properties that need to be tracking in an application. If the setter of state is unused, you can avoid it the useState. If you use the same value as the current state to update the state, React won’t trigger a re-render. The update function doesn’t update the value right away
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
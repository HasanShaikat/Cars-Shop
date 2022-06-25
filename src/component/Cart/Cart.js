import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    const choice = ()=>{
        if(cart){
            alert("Please help. If click Choice 1 For Me button then how can i show One name")
        }
    }

    return (

        <div className="cart">
            <div className="ui-name-show">
                <ul>
                    <h3 >Cart List</h3>
                    {
                        cart.map(data=> <li key={data.name}>{data.name}</li> )
                    }
                </ul>
            </div>
            <div className="cartBtn">

                <button onClick={choice}>Choioce 1 for me</button>
            </div>
        </div>
    );
};

export default Cart;
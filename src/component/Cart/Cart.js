import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  

    return (
        <div className="cart">
           
            <div className="ui-name-show">
                <ul>
                    <h3 >Cart List</h3>
                    {
                        cart.map(data=> <li
                        >{data.name}</li> )
                    }
                </ul>
            </div>

            <button >Select One</button>
        </div>
    );
};

export default Cart;
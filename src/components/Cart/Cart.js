import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        total = total+ product.price;
    }
    let shipping= 0;

    if(total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.44;
    }
    const vat =(total/10).toFixed(2);
    const grandTotal =(total+shipping+Number(vat)).toFixed(2);
    console.log(cart);
    return (
        <div className='cart-area'>
            <h1>Order Summary</h1>
            <h3>Product Item: {cart.length}</h3>
            <h4>Item: {total}</h4>
            <h4>Shipping & Handling: {shipping}</h4>
            <h4>VAT+tax :{vat}</h4>
            <h4>subtotal:{grandTotal}</h4>
        </div>
    );
};
export default Cart;
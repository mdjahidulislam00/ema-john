import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const{stock,price,seller,img,name} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-detail'>
                <h3>{name}</h3>
                <p><small>by:{seller} </small></p>
                <br />
                <h3>${price}</h3>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className='add-button' onClick={ () => props.handelAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
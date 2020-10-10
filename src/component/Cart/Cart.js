import React from 'react';

const Cart = (props) => {

    let item = props.cart;
    
    let totalPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const course = props.cart[i];
        totalPrice = totalPrice + course.price;
        
    }

    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <h4>Item added : {item.length}</h4>
            <h4>Price : {totalPrice}</h4>
            <button className="enroll-btn">Place Order</button>
        </div>
    );
};

export default Cart;
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
            <h4>Course added : {item.length}</h4>
            <h4>Total price : $ {totalPrice}</h4>
            <button className="mt-3 enroll-btn btn btn-danger">Place Order</button>
        </div>
    );
};

export default Cart;
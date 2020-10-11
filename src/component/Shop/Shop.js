import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css'

const Shop = () => {

    const [course, setCourse] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.json-generator.com/api/json/get/cgusNUfIwO?indent=3')
            .then(res => res.json())
            .then(data => setCourse(data));

    }, [])

    let addHandler = (course) => {


        //console.log("course added" , course);
        let newCart = [...cart, course];
        setCart(newCart);
        //console.log(newCart);

    }




    return (
        <div className='shop-container'>
            <div className="course-container">

                {
                    course.map(coursess => <Course addHandler={addHandler} coursess={coursess} ></Course>)
                }


            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;
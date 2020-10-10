import React from 'react';
import './Course.css';

const Course = (props) => {

   const addItem= props.addHandler;
   

    return (
        <div className="courses">
            <h1 className = 'course-name'>{props.coursess.name}</h1>
            <h4 className = 'price'>Price: $ {props.coursess.price}</h4>
            <button onClick = {()=>addItem(props.coursess)} className="enroll-btn">Enroll now</button>

        </div>
    );
};

export default Course;
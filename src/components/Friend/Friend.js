import React from 'react';
import './Friend.css'
const Friend = (props) => {
    const {name, email, salary, image, phone} = props.friend;
    return (
        <div className="friend-container">
            <div className="img-container">
                <img src={image} alt=""/>
            </div>
            <div className="description">
                <h3>Name: {name}</h3>
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h5>Salary: {salary}</h5>
                <button>Add Friend</button>
            </div>
        </div>
    );
};

export default Friend;
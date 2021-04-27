import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const friend = props.friend;
    const salary = friend.reduce((sum, frnd) => sum + frnd.salary, 0);
    const newSalary = Math.round(salary);
    return (
        <div className="cart-container">
            <h4>Friends Added: {friend.length}</h4>
            <h5>Total Salary: {newSalary}</h5>
        </div>
    );
};

export default Cart;
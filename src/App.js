
import React, { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Friend from './components/Friend/Friend';
import data from './data/data.json';
import './App.css';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState([])
  useEffect(() => {
    setFriends(data);
  }, []);

  const handleCart = (addFriend) => {
    const newFriend = [...friend, addFriend];
    setFriend(newFriend);
  }
  return (
    <div className="container">
      <div className="friend">
        {
          friends.map((friend) => <Friend friend={friend} key={friend.id} handleCart={handleCart}></Friend>)
        }
      </div>
      <div className="cart">
        <Cart friend = {friend}></Cart>
      </div>
    </div>
  );
};

export default App;
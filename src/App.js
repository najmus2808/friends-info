
import React, { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Friend from './components/Friend/Friend';
import data from './data/data.json';
import './App.css';

const App = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    setFriends(data);
  }, []);
  return (
    <div className="container">
      <div className="friend">
        {
          friends.map((friend) => <Friend friend={friend} key={friend.id}></Friend>)
        }
      </div>
      <div className="cart">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default App;
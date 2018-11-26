import React from 'react';
import Friend from './Friend';

function FriendsBar() {
  const styles = {
    border: '2px solid #c6c6c6',
    padding: '10px',
    color: '#444'
  };
  return (
    <div style={styles}>
      <h5>Friends</h5>
      <Friend
        color="blue"
        name="Chan Ethan Lee"
      /><br/>
      <Friend
        color="green"
        name="Chris Crow"
      /><br/>
      <Friend
        color="red"
        name="Kenneth Du"
      />
    </div>
  );
}

export default FriendsBar;
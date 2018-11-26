import React from 'react';

function Friend(props) {
  const styles = {
    fontSize: '14px',
    display: 'block',
    margin: '5px 0',
    color: '#444'
  };
  const picStyles = {
    backgroundColor: props.color,
    width: '50px',
    height: '50px',
    margin: '10px',
    float: 'left'
  };
  return (
    <div style={styles}>
      <figure style={picStyles}>
        <img src="https://img.icons8.com/ios/50/000000/user-filled.png"/>
      </figure>
      <div>
        <p><strong>{props.name}</strong></p>
        <button className="btn-sm btn-primary">Add Friend</button>
      </div>
    </div>
  );
}

export default Friend;
import React from 'react';

function NavButtons() {
  const styles = {
    display: 'inline-block',
    border: '2px solid #c6c6c6',
    padding: '10px',
    marginLeft: '-2px',
    cursor: 'pointer',
    color: '#999'
  };
  const componentStyle = {
    display: 'inline-block'
  };
  return (
    <div style={componentStyle}>
      <ul>
        <li style={styles}>Home</li>
        <li style={styles}>Notifications</li>
        <li style={styles}>Messages</li>
      </ul>
    </div>
  );
}

export default NavButtons;
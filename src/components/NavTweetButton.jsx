import React from 'react';

function TweetButton () {
  const styles = {
    borderRadius: '30px',
    border: '3px solid #3c9dde',
    padding: '1px 15px',
    textAlign:'center',
    cursor: 'pointer',
    color: '#757575',
  };

  const compStyles = {
    float: 'right',
    marginTop: '10px',
    marginLeft: '15px'
  };

  return (
    <div style={compStyles}>
      <button style={styles}>Tweet</button>
    </div> 
  );
}

export default TweetButton;
import React from 'react';

function ProfileStats() {
  const styles = {
    textAlign: 'center',
    fontSize: '13px',
    margin: '25px 0',
    color: '#999'
  };
  return (
    <div style={styles}>
      <span>TWEETS</span>
      <span style={{margin: '0 15px'}}>FOLLOWING</span>
      <span>FOLLOWERS</span>
    </div>
  );
}

export default ProfileStats;
import React from 'react';

function NavSearch() {
  const styles = {
    borderRadius: '30px',
    border: '3px solid #3c9dde',
    paddingLeft: '10px'
  };
  const compStyles = {
    float: 'right',
    marginTop: '10px'
  };
  return (
    <div style={compStyles}>
      <input style={styles} type="text" placeholder="Search"/>
    </div>
  );
}

export default NavSearch;
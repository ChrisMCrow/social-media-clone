import React from 'react';
import NavButtons from './NavButtons';
import TweetButton from './NavTweetButton';
import NavSearch from './NavSearch';


function Navbar() {
  const styles = {
    margin: '20px 0',
    borderBottom: '2px solid #c6c6c6',
  };
  return (
    <div style={styles}>
      <NavButtons/>
      <TweetButton/>
      <NavSearch/>
    </div>
  );
}

export default Navbar;

import React from 'react';
import Profile from './Profile';
import ProfileDescription from './ProfileDescription';
import Feed from './Feed';
import FriendsBar from './FriendsBar';
import PropTypes from 'prop-types';

function Body(props) {
  const styles = {
    
  };
  
  const colStyle = {
    padding: '20px',
    margin: '0 -25px'
  };

  return (
    <div className="row">
      <div  className="col-4">
        <div style={colStyle}>
          <Profile 
            currentUser = {props.currentUser}/>
          <ProfileDescription userProfileDescription = {props.currentUser.userProfileDescription}/>
        </div>

      </div>
      <div className="col-5">
        <div style={colStyle}>
          <Feed 
            currentUser = {props.currentUser}
            onNewTweet = {props.onNewTweet}
            onLikeTweet = {props.onLikeTweet}
          />
        </div>
      </div>
      <div className="col-3">
        <div style={colStyle}>
          <FriendsBar/>
        </div>
      </div>
    </div>
  );
}

Body.propTypes = {
  currentUser: PropTypes.object,
  onNewTweet: PropTypes.func
}

export default Body;
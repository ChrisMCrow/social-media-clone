import React from 'react';
import ProfileCover from './ProfileCover';
import ProfilePic from './ProfilePic';
import ProfileContent from './ProfileContent';
import PropTypes from 'prop-types';

function Profile(props) {
  const styles = {

  };
  return (
    <div>
      <ProfileCover/>
      <ProfilePic currentUser = {props.currentUser}/>
      <ProfileContent currentUser = {props.currentUser}/>
    </div>
  );
}

Profile.propTypes = {
  currentUser: PropTypes.object
}

export default Profile;
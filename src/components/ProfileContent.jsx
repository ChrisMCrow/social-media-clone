import React from 'react';
import ProfileName from './ProfileName';
import ProfileStats from './ProfileStats';
import PropTypes from 'prop-types';

function ProfileContent(props) {
  const styles = {
    border: '2px solid #c6c6c6'
  };
  return (
    <div style={styles}>
      <ProfileName currentUser = {props.currentUser}/>
      <ProfileStats/>
    </div>
  );
}

ProfileContent.propTypes = {
  currentUser: PropTypes.object
}

export default ProfileContent;
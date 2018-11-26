import React from 'react';
import PropTypes from 'prop-types';

function ProfilePic(props) {
  const styles = {
    backgroundColor: '#3c9dde',
    borderRadius: '50%',
    border: '3px solid white',
    width: '90px',
    position: 'absolute',
    top: '90px',
    left: '40px'
  };

  const imgStyles = {
    width: '100%',
    borderRadius: '50%'
  }

  return (
    <div style={styles}>
      <img style={imgStyles} src={props.currentUser.userProfilePic} />
    </div>
  );
}

ProfilePic.propTypes = {
  currentUser: PropTypes.object
}

export default ProfilePic;
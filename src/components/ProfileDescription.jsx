import React from 'react';
import PropTypes from 'prop-types';

function ProfileDescription(props) {
  const styles = {
    border: '2px solid #c6c6c6',
    marginTop: '20px',
    color: '#999',
    padding: '20px',
  };
  return (
    <div style={styles}>
       {props.userProfileDescription}
    </div>
  );
}

ProfileDescription.propTypes = {
  userProfileDescription: PropTypes.string
}

export default ProfileDescription;
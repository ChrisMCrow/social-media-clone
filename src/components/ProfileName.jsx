import React from 'react';
import PropTypes from 'prop-types';

function ProfileName(props) {
  const styles = {
    textAlign: 'right',
    margin: '5px 10px 0 0'
  };
  return (
    <div style={styles}>
      <h4>{props.currentUser.userName}</h4>
    </div>
  );
}

ProfileName.propTypes = {
  currentUser: PropTypes.object
}

export default ProfileName;
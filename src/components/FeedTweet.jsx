import React from 'react';
import PropTypes from 'prop-types';

function FeedTweet (props) {
  const styles = {
    border: '2px solid #c6c6c6',
    marginTop: '-2px'
  };
  const picStyles = {
    width: '50px',
    height: '50px',
    margin: '25px',
    float: 'left',
    borderRadius: '50%'
  };

  const nameStyles = {
    fontWeight: '700',
    fontSize: '14px',
    color: '#999'
  };

  const statusStyles = {
    fontSize: '14px',
    color: '#999'
  };

  const innerDivStyles = {
    padding: '20px 0',
  };

  const imgStyles = {
    width: "100%",
    borderRadius: '50%'
  }


  return (
    <div style={styles}>
      <figure style={picStyles}>
        <img style={imgStyles} src={props.tweet.tweetOwnerPic}/>
      </figure>
      <div style={innerDivStyles}>
        <div style={nameStyles}>
          {props.tweet.tweetOwner}
        </div>
        <div style={statusStyles}>
          {props.tweet.tweetContent}
        </div>
      </div>
    </div>
  );
}

FeedTweet.propTypes = {
  color: PropTypes.string,
  tweet: PropTypes.object
};

export default FeedTweet;
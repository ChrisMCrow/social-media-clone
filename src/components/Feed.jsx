import React from 'react';
import FeedInput from './FeedInput';
import FeedTweetList from './FeedTweetList';
import PropTypes from 'prop-types';

function Feed(props) {
  const styles = {

  };
  return (
    <div>
      <FeedInput/>
      <FeedTweetList feedTweetList = {props.feedTweetList}/>
    </div>
  );
}

Feed.propTypes = {
  feedTweetList: PropTypes.array
}

export default Feed;
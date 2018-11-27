import React from 'react';
import FeedInput from './FeedInput';
import FeedTweetList from './FeedTweetList';
import PropTypes from 'prop-types';

function Feed(props) {
  const styles = {

  };
  return (
    <div>
      <FeedInput 
        onNewTweet = {props.onNewTweet}
        currentUser = {props.currentUser}
      />
      <FeedTweetList feedTweetList = {props.currentUser.masterFeedTweetList}
      onLikeTweet = {props.onLikeTweet}/>
    </div>
  );
}

Feed.propTypes = {
  currentUser: PropTypes.object,
  onNewTweet: PropTypes.func
}

export default Feed;
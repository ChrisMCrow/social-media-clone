import React from 'react';
import FeedTweet from './FeedTweet';
import PropTypes from 'prop-types';

function FeedTweetList(props) {
  const styles = {
    
  };
  return (
    <div>
      {props.feedTweetList.map((tweet, index) =>
        <FeedTweet 
          tweet = {tweet}
          index = {index}
          onLikeTweet = {props.onLikeTweet}
          key = {index} />
      )}
    </div>
  );
}

FeedTweetList.propTypes = {
  feedTweetList: PropTypes.array
}

export default FeedTweetList;
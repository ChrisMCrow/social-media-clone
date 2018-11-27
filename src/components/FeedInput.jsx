import React from 'react';
import PropTypes from 'prop-types';

function FeedInput(props) {
  const styles = {
    backgroundColor: 'lightblue',
    paddingBottom: '20px'
  };
  const spanStyle = {
    backgroundColor: 'brown', 
    height: '28px',
    width: '28px',
    display: 'inline-block',
    margin: '20px 10px 0px 30px'
  };
  const inputStyle = {
    width: '60%',
    color: '#3cbbde',
    padding: '5px 5px',
    border: '2px solid #3cbbde'
  };

  const hide = {
    display: 'none'
  }

  let _tweet = null;

  function handleFocusOff() {
    let tweetButton = document.getElementById('tweetButton');
    setTimeout(() => {
      tweetButton.classList.add('hide');
    }, 200);
  }

  function handleFocusOn() {
    let tweetButton = document.getElementById('tweetButton');
    tweetButton.classList.remove('hide');
  }

  function handleTweetSubmit(event) {
    event.preventDefault();
    props.onNewTweet(
      {
        tweetOwner: props.currentUser.userName, 
        tweetContent: _tweet.value, 
        tweetOwnerPic: props.currentUser.userProfilePic, 
        tweetLiked: false
      });
    _tweet.value = '';
  }

  return (
    <div style={styles}>
      <style jsx>{`
        .hide {
          display: none;
        }
        #tweetButton {
          margin-left: 10px;
        }
      `}</style>
      <form onSubmit={handleTweetSubmit}>
        <span style={spanStyle}></span>
        <input 
          style={inputStyle} 
          type="text" 
          placeholder="What's happening?" 
          onFocus={handleFocusOn} 
          onBlur={handleFocusOff}
          ref={(input) => {_tweet = input;}}
        />
        <button id='tweetButton' type='submit' className='btn btn-info hide'>Tweet</button>
      </form>
    </div>
  );
}

FeedInput.propTypes = {
  onNewTweet: PropTypes.func,
  currentUser: PropTypes.currentUser
}

export default FeedInput;
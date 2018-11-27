import React from 'react';
import PropTypes from 'prop-types';

class FeedTweet extends React.Component {

  constructor(props) {
    super(props);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  showLiked() {
      if (this.props.tweet.tweetLiked) {
        return 'https://img.icons8.com/material-rounded/50/000000/hearts.png';
      } else {
        return 'https://img.icons8.com/material-outlined/50/000000/hearts.png';
      }
  };

  handleLikeClick() {
    this.props.onLikeTweet(this.props.index);
  }

  render() {
    const styles = {
      border: '2px solid #c6c6c6',
      marginTop: '-2px'
    };
    const picStyles = {
      width: '50px',
      margin: '25px 0 0 25px',
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
      marginLeft: '100px',
      padding: '20px 0'
    };

    const imgStyles = {
      width: "100%",
      borderRadius: '50%'
    }

    const heartStyle = {
      width: '24px'
    }

    return (
      <div style={styles}>
        <figure style={picStyles}>
          <img style={imgStyles} src={this.props.tweet.tweetOwnerPic} />
        </figure>
        <div style={innerDivStyles}>
          <div style={nameStyles}>
            {this.props.tweet.tweetOwner}
          </div>
          <div style={statusStyles}>
            {this.props.tweet.tweetContent}
          </div>
          <div>
            <img style={heartStyle} src={this.showLiked()} onClick={this.handleLikeClick} />
          </div>
        </div>
      </div>
    );
  }
}

FeedTweet.propTypes = {
  tweet: PropTypes.object,
  onLikeTweet: PropTypes.func
};

export default FeedTweet;
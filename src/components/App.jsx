import React from 'react';
import Navbar from './Navbar';
import Body from './Body';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Lumber Jack',
      userProfilePic: 'https://pbs.twimg.com/profile_images/458637182375186432/x7gppEjU_400x400.jpeg',
      userProfileDescription: 'Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow Chris Crow',
      masterFeedTweetList: [
        {
          tweetOwner: 'Chris Crow',
          tweetContent: 'Hello, this is my awesome Twitter clone made in React.',
          tweetOwnerPic: "https://pbs.twimg.com/profile_images/458637182375186432/x7gppEjU_400x400.jpeg",
          tweetLiked: false
        }
      ]
    };
    this.handleNewTweet = this.handleNewTweet.bind(this);
    this.handleLikeTweet = this.handleLikeTweet.bind(this);
  }

  handleNewTweet(newTweet) {
    let newMasterFeedTweetList = this.state.masterFeedTweetList.slice();
    newMasterFeedTweetList.push(newTweet);
    this.setState({masterFeedTweetList: newMasterFeedTweetList});
  }

  handleLikeTweet(index) {
    let newMasterFeedTweetList = this.state.masterFeedTweetList.slice();
    let editedTweet = newMasterFeedTweetList[index];
    editedTweet.tweetLiked = !editedTweet.tweetLiked;
    this.setState({masterFeedTweetList: newMasterFeedTweetList})
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Body
          currentUser = {this.state}
          onNewTweet = {this.handleNewTweet}
          onLikeTweet = {this.handleLikeTweet}
        />
      </div>
    );
  }
}



export default App;

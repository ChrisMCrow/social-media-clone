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
          tweetOwnerPic: "https://pbs.twimg.com/profile_images/458637182375186432/x7gppEjU_400x400.jpeg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Body
          currentUser = {this.state} />
      </div>
    );
  }
}



export default App;

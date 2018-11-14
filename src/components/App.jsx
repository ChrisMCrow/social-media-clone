import React from "react";
import PropTypes from "prop-types";


//Navbar
function NavButtons() {
  const styles = {
    display: "inline-block",
    border: "2px solid #c6c6c6",
    padding: "10px",
    marginLeft: "-2px",
    cursor: "pointer",
    color: "#999"
  }
  const componentStyle = {
    display: "inline-block"
  }
  return (
    <div style={componentStyle}>
      <ul>
        <li style={styles}>Home</li>
        <li style={styles}>Notifications</li>
        <li style={styles}>Messages</li>
      </ul>
    </div>
  );
}

function NavSearch() {
  const styles = {
    borderRadius: "30px",
    border: "3px solid #3c9dde",
    paddingLeft: "10px"
  }
  const compStyles = {
    float: "right",
    marginTop: "10px"
  }
  return (
    <div style={compStyles}>
      <input style={styles} type="text" placeholder="Search"/>
    </div>
  );
}

function TweetButton () {
  const styles = {
    borderRadius: "30px",
    border: "3px solid #3c9dde",
    padding: "1px 15px",
    textAlign:"center",
    cursor: "pointer",
    color: "#757575",
  }

  const compStyles = {
    float: "right",
    marginTop: "10px",
    marginLeft: "15px"
  }

  return (
    <div style={compStyles}>
      <button style={styles}>Tweet</button>
    </div> 
  );
}

function Navbar() {
  const styles = {
    margin: "20px 0",
    borderBottom: "2px solid #c6c6c6",
  }
  return (
    <div style={styles}>
      <NavButtons/>
      <TweetButton/>
      <NavSearch/>
    </div>
  );
}


//Profile
function ProfileCover() {
  const styles = {
    backgroundColor: "#3c9dde",
    height: "120px"
  }
  return (
    <div style={styles}>
    </div>
  );
}

function ProfilePic() {
  const styles = {
    backgroundColor: "#3c9dde",
    borderRadius: "20px",
    border: "3px solid white",
    padding: "15px",
    width: "90px",
    position: "absolute",
    top: "90px",
    left: "40px"
  }
  return (
    <div style={styles}>
      <img src="https://img.icons8.com/cotton/50/000000/guest-male.png" />
    </div>
  );
}

function ProfileName() {
  const styles = {
    textAlign: "right",
    margin: "5px 10px 0 0"
  }
  return (
    <div style={styles}>
      <h4>Lumber Jack</h4>
    </div>
  );
}

function ProfileStats() {
  const styles = {
    textAlign: "center",
    fontSize: "13px",
    margin: "25px 0",
    color: "#999"
  }
  return (
    <div style={styles}>
      <span>TWEETS</span>
      <span style={{margin: '0 15px'}}>FOLLOWING</span>
      <span>FOLLOWERS</span>
    </div>
  );
}

function ProfileContent() {
  const styles = {
    border: "2px solid #c6c6c6"
  }
  return (
    <div style={styles}>
      <ProfileName/>
      <ProfileStats/>
    </div>
  );
}

function Profile() {
  const styles = {

  }
  return (
    <div>
      <ProfileCover/>
      <ProfilePic/>
      <ProfileContent/>
    </div>
  );
}

function SideBar() {
  const styles = {
    border: "2px solid #c6c6c6",
    marginTop: "20px",
    color: "#999",
    padding: "20px",
  }
  return (
    <div style={styles}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
}

//Feed
function FeedInput() {
  const styles = {
    backgroundColor: "lightblue",
    paddingBottom: "20px"
  }
  const spanStyle = {
    backgroundColor: 'brown', 
    height: '28px',
    width: '28px',
    display: 'inline-block',
    margin: '20px 10px 0px 30px'
  }
  const inputStyle = {
    width: "70%",
    color: "#3cbbde",
    padding: "5px 5px",
    border: "2px solid #3cbbde"
  }
  return (
    <div style={styles}>
      <span style={spanStyle}></span>
      <input style={inputStyle} type="text" value="What's happening?"/>
    </div>
  );
}

function FeedTweetList () {
  const styles = {
    
  }
  return (
    <div>
      <FeedTweet
      color="red"
      />
      <FeedTweet
      color="orange"
      />
      <FeedTweet
      color="yellow"
      />
      <FeedTweet
      color="green"
      />
      <FeedTweet
      color="blue"
      />
      <FeedTweet
      color="navy"
      />
      <FeedTweet
      color="purple"
      />
    </div>
  );
}

function FeedTweet (props) {
  const styles = {
    border: "2px solid #c6c6c6",
    marginTop: '-2px'
  }
  const picStyles = {
    backgroundColor: props.color,
    width: "50px",
    height: "50px",
    margin: "25px",
    float: "left"
  }

  const nameStyles = {
    fontWeight: "700",
    fontSize: "14px",
    color: "#999"
  }

  const statusStyles = {
    fontSize: "14px",
    color: "#999"
  }

  const innerDivStyles = {
    padding: "20px 0",
  }


  return (
    <div style={styles}>
      <figure style={picStyles}>
        <img src="https://img.icons8.com/ios/50/000000/user-filled.png"/>
      </figure>
      <div style={innerDivStyles}>
        <div style={nameStyles}>
          Lorem ipsum
        </div>
        <div style={statusStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
    </div>
  )
}

FeedTweet.propTypes = {
  color: PropTypes.string
};

function Feed() {
  const styles = {

  }
  return (
    <div>
      <FeedInput/>
      <FeedTweetList/>
    </div>
  )
}

function Friend(props) {
  const styles = {
    fontSize: "14px",
    display: "block",
    margin: "5px 0",
    color: "#444"
  }
  const picStyles = {
    backgroundColor: props.color,
    width: "50px",
    height: "50px",
    margin: "10px",
    float: "left"
  }
  return (
    <div style={styles}>
      <figure style={picStyles}>
        <img src="https://img.icons8.com/ios/50/000000/user-filled.png"/>
      </figure>
      <div>
        <p><strong>{props.name}</strong></p>
        <button className="btn-sm btn-primary">Add Friend</button>
      </div>
    </div>
  );
}

function FriendsBar() {
  const styles = {
    border: "2px solid #c6c6c6",
    padding: '10px',
    color: "#444"
  }
  return (
    <div style={styles}>
      <h5>Friends</h5>
      <Friend
        color="blue"
        name="Chan Ethan Lee"
      /><br/>
      <Friend
        color="green"
        name="Chris Crow"
      /><br/>
      <Friend
        color="red"
        name="Kenneth Du"
      />
    </div>
  );
}


function Body () {
  const styles = {
    
  }
  
  const colStyle = {
    padding: "20px",
    margin: "0 -25px"
  }

  return (
    <div className="row">
      <div  className="col-4">
        <div style={colStyle}>
          <Profile/>
          <SideBar/>
        </div>

      </div>
      <div className="col-5">
      <div style={colStyle}>
        <Feed/>
      </div>
      </div>
      <div className="col-3">
      <div style={colStyle}>
        <FriendsBar/>
      </div>
      </div>
    </div>
  );
}


function App(){

  return (
    <div className="container">
      <Navbar/>
      <Body />
    </div>
  );
}

//App.propTypes = {
//};

export default App;

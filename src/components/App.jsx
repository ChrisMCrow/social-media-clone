import React from "react";
//import PropTypes from "prop-types";


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
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAdRSURBVGhD7VpbTFRHGNbebw9Nk15e+ta+9KVNTZq2abKJsOtydrmec7gIFcQFxDsgAoouIggKVqpQqZXYWhQFtUJQFINKo1IRFcFLraKiYBWjQoqicpnOP+c/Zy+eXRHOqmn6JV+A4zLf982cmflncMz/+A9irN7MG/QmIc+b48vo1/Lhkf+JcrGeE6PG+4a+j209GxiNwrveJqGeGiOjIe2AQWjHixOM2PTTgyiKL3pzwu+ymUnBESQ12kLmW2KGxdmToklUaAQxmkXHUCa+VseJH6CM50F7MUgWL5mbQDqLckfE8wXZpHx+Mpkc+q1dGOHqBHPg5yjlWdCeWw+ilrBIVYNPyg7KDcmJygjR9rsMvsJHKOc50IlaDYLpllhVYyPl/qx0YvILxtHhW8xm8xso6RnQ4S8EsXAxnFwpzFE1NVJWLUolBtvcSUNJz0DvI4xHIVI4Z6aqodEwI24qa5u+Yj0Gg/AOynoGeo4/BmLQe1sXJKsaGilb8jOJ0Rfni49gQUntodPpXqK9dUkeFZikaxPnaPqazYqcLAXhhCqU1R4GkxAuhwiJsLCvQFhG19PluDE3g1xavVTV4HC5LilBapfjr6Os9sByhCQkp5Pbd7pJ5tJ8JYwz/QJCSH32QlWz7li5MEVuY2jcuNiXUVo7WK3WF2gv3QSRTVu2ERmNTSdYIC4gzCEI8Ef62qmZdce6JQuU3/dIPeZtCvpYFjh1+izGsOFeXx9pu3iJNBw5SoQw6T0fSZBd1lQliF4f8SbKawfacKAssGXrDrK3rp48ePAQYzgiPEpaRkcSBFZC1OlHaW1B58dcOYjMsvLf0LojRhOkOHE2+12ovVBaWxhMgZ+GhFv+BpOBIZEkLDKOnGhuReuOSFmQycxsT5+natYdoUrGILtQWnsMDQ2VoVe3gPnStH6tqtHHEcofCKLnhGyU1RZGo/HVgYGB0+iVwdUcAdyqrnAweGbFEnKuIMvhmTNPrZBGEkfED6W1g8E/5EO6o9+KnZZIB2WIGa3ZU8fKlNKyCvazM+yDHMm1KqUHbJ41GWkOAWRW0DMKC8HxAzp//7dRXjvAGRsEfPxDSH//ADNavrWSiRYVl7CfnXFjI75aa5aTM7U19HdDld6eQDtgB934nINk2orGJpTWFrSHVoBA7PREtEkIjAzsG/R1wyc2DN7tVcz1HKxjz+7QSuBQQyOJtMxgZsWgMHJltWONFiZOlIJw/DKU1ha0h2pBICevgJl6HO6dP6uY67v4Fz6VcObsOWVkDtqVMCfzbPND78P7oLS2oEG6QMDVvuGM7vpaW5DLF/CphM5r1xXDtYvnK5/bnDYXn/MPdaL4FkprB7jdkIX/aDyGdtyja3OJyyAbNm5hbcHkv1CQrXzOGhvHntPV6hBKawuDj6CXg9zouol2XGOw7x7p/GGZapDe3rskMDiStZU2JUb5DDCYl+YHHZEslNYWerOQCAIBwZPQjnvAnLA3aB8Elmpoi55rSOMyq/KZY8sXYwhKepxGaW1B5we7AoIzyHAAq5SrIMLEaGbW+RZmY0oSBuH7vhSE11FaW8CaDiKritaiHffoqvjZwaR9EHnp/W7mDIfPQDAWhBP2o6y2kM7own0Qqdq5B+24xtDDBw7zA2gfJDd/FTMcHxGl/HsHPe/zdE9hQUz8QpTWFuONwieSgEBaVQ5Tzrjf3uYQAmgfpKp6N2uL8xPJ5VXSZghzRdbwNovfoLS2MJiFEFmkfFsl+XVTOUlKtZKm481ozRE9DQfcBoFKQG6vPiud/TtcmbIQJr5XFMVXUFpb0KHOkIXtaU2cR/razqE9G25uL3UbZHBwkPjxEayNdUnSoQtu81m7nLAbZbWHl1n4itY9Vyhv0x7rpvOFiZbTXRh63x5D/f3k2po8t0EA8qELAsAldmCAVExSjRSU9SxojyWDIFw2t32f/UiQ+x3tj4RQC/JL6WZmHCZ4Q84iaTQo6d7yBUp5Ft6c0AqCi2KlPaD7wB4y0HNHofP+IdM5SOPR44r5nPh4/J7/B/6IhFKeAz2PfCaL12TYCr3h0DkIlCnyrbvJV/5TglCNUp4FnR/LQZCdIZ7wntc5CMASj9eiMmkZhFKehZ7jD4Ng7vRpqmZdsWjOLBI3dRbp6LyGESSsXF3sEARuaFDKs6DvcAsIFifMVjWsRtix/fylV2dnzV6MIGF37T4lBJ17d+E6FqU8Cyq4A0ShtIAlU824M/fZ3eE633+1nv7TLgh/GGU8Dy+fIF4Whgs0uNpRMw+Ec3iNNU05X0RExysXFjLgXCO352USo1HmqWAsnSeVsvhwafQLIcebW9C+DQ5BOMGEGk8HOl3ka1Q4T66GH8eomJmk+aT6leozDSID/kgJ/+2C7vRTDCYx1p501DrAXP7KQnZd5ArPRRB3kFe3kp9L0bI6nvsgdAU6AuYysvL20hFJccX29quZchCPnUFGAwPHf03N5en1ge/hI5eg1UIMFKL027HSkyfFmDH/AkuXcXDOIQ1fAAAAAElFTkSuQmCC"></img>
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


function Body () {
  const styles = {
    
  }
  
  const colStyle = {
    padding: "20px",
    margin: "0 -10px"
  }

  return (
    <div className="row">
      <div  className="col-4">
        <div style={colStyle}>
          <Profile/>
        </div>

      </div>
      <div className="col-5">
      <div style={colStyle}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
      </div>
      <div className="col-3">
      <div style={colStyle}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

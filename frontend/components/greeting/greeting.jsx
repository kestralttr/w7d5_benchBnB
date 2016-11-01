import React from 'react';
import {Link} from 'react-router';


const personalGreeting = (currentUser,logout) => (
  <div>
    <h1>Welcome {currentUser.username}</h1><br></br>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div>
    <Link to="/login">Log In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return personalGreeting(currentUser,logout);
  } else {
    return sessionLinks();
  }
};

export default Greeting;

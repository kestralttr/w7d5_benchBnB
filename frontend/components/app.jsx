import React from 'react';
import GreetingsContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <h1>Bench BnB</h1>
    <h2>You are in App.jsx</h2>
    <GreetingsContainer />
    {children}
  </div>
);

export default App;

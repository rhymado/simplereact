import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Hello from './Pages/Hello';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar';

const App =  () => {
  return (
    <Router>
      <NavBar />
      <Route
        path={'/hello'}
        render={() => {
          return <Hello age={29} />;
        }}
      />
      <Route path={'/profile'} component={Profile} />
    </Router>
  );
};

export default App;

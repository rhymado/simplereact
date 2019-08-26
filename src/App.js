import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Hello from './Pages/Hello';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar';
import store from './Publics/Store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Route
          path={'/hello'}
          render={() => {
            return <Hello age={29} />;
          }}
        />
        <Route path={'/profile'} component={Profile} />
      </Provider>
    </Router>
  );
};

export default App;

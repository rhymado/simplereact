import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <ul>
        <Link to={'/hello'}><li style={{fontSize: 30}}>Hello</li></Link>
        <Link to={'/profile'}><li style={{fontSize: 30}}>Profile</li></Link>
      </ul>
    </div>
  );
};

export default NavBar;

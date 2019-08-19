import React from 'react';
import Axios from 'axios';

class Profile extends React.Component {
  state = {
    getAPI: [],
  };
  componentDidMount = () => {
    Axios.get ('https://fortnite-api.theapinetwork.com/store/get', {
      headers: {
        Authorization: process.env.REACT_APP_KEY,
      },
    })
      .then (res => {
        this.setState ({getAPI: res.data.data});
        console.log ('getAPI =', this.state.getAPI);
      })
      .catch (err => console.log ('error =', err));
  };
  render () {
    const {getAPI} = this.state;
    return (
      <div style={{backgroundColor: 'lightgreen'}}>
        <h1>Mamanx Garox</h1>
        <h2>Semarang, 19 Agustus 1990</h2>
        <ul style={{display: 'flex', flexDirection: 'column-reverse'}}>
          {getAPI.length > 0
            ? getAPI.map ((item, index) => {
                console.log (index, item.item.name);
                return (
                  <li key={index} style={{fontSize: 30, fontWeight: 'bold'}}>
                    <p>{item.item.name}</p>
                    <img src={item.item.images.icon} alt="item" />
                  </li>
                );
              })
            : <p style={{fontSize: 100}}>Loading Fetch...</p>}
        </ul>
      </div>
    );
  }
}

export default Profile;

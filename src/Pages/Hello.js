import React from 'react';
import '../App.css';

import Title from '../Components/Title';

class Hello extends React.Component {
  //stateful
  constructor (props) {
    super (props);
    this.state = {
      name: 'Faztrack',
      batch: this.props.age,
      online: true,
    };
  }
  addBatch = () => {
    this.setState ({
      batch: this.state.batch + 1,
    });
  };
  subBatch = () => {
    this.setState ({
      batch: this.state.batch - 1,
    });
  };
  changeName = () => {
    this.setState ({
      name: 'Mamanx Garox',
    });
  };
  render () {
    //jsx expression {}
    return (
      <div className="App">
        <header className="App-header">
          <Title name={this.state.name} />
          <a
            className="App-link"
            href="https://arkademy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.name} batch {this.state.batch}
          </a>
          <button
            onClick={this.addBatch}
            style={{backgroundColor: 'red', width: 150, height: 100}}
          >
            <p style={{fontSize: 40, color: 'white'}}>+</p>
          </button>
          <button
            onClick={this.subBatch}
            style={{backgroundColor: 'white', width: 150, height: 100}}
          >
            <p style={{fontSize: 40, color: 'red'}}>-</p>
          </button>
          <button
            onClick={this.changeName}
            style={{backgroundColor: 'purple', width: 150, height: 100}}
          >
            <p style={{fontSize: 25, color: 'white'}}>Ganti Nama</p>
          </button>
        </header>
      </div>
    );
  }
}

export default Hello;

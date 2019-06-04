import React, { Component } from 'react';
import Title from './components/header/title';
import Navbar from './components/header/navbar';
import Rectangle from './components/body/rectangles';
import data from './constants';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id='header'>
          <Title />
          <Navbar />
        </div>
        <div id='body'>
          <div className='row'>
            <Rectangle data={data.aboutPage}/>
            <Rectangle data={data.lab1}/>
          </div>
          <div className='row'>
            <Rectangle data={data.lab2}/>
            <Rectangle data={data.lab3}/>
          </div>
          <div className='row'>
            <Rectangle data={data.lab4}/>
            <Rectangle data={data.lab5}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

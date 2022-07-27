import React from 'react';
import './App.scss';
import SocketContainer from './containers/SocketContainer';

function App() {
  return (
    <div className="App">
      <div className='main-wrapper'>
      <SocketContainer />
      </div>
    </div>
  );
}

export default App;

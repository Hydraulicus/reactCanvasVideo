import React, {useEffect, useState, useReducer} from 'react';
import { Controller, CanvasVideoContainer } from './components';
import video from './assets/video.mp4';
import CanvasContext from './context/canvasContext';
import reducer from './context/reducer';
import './App.css';

const { Provider, } = CanvasContext;

function App() {

  let graphProps = {}; // it is not state !!!
  const [state, dispatch] = useReducer(reducer, {});

  // useEffect(
  //   () => { console.log('graphProps =', graphProps) }
  //   , [graphProps]
  // )

  return (
    <div className="App">
      <header className="App-header">
        <p>canvas video</p>
      </header>


      <Provider value={{
        state,
        dispatch,
      }}>
        <CanvasVideoContainer
          play={false}
          src={video}
        />
        <br />
        <Controller
          graphProps={graphProps}
        />
      </Provider>


    </div>
  );
}

export default App;

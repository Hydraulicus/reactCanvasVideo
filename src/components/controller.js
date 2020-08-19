import React, {Fragment, useEffect, useContext} from 'react';
import CanvasContext from '../context/canvasContext';
import drawCanvas from './drawCanvas';

function Controller({graphProps}) {
  const frameRate = 30;
  const {state, dispatch} = useContext(CanvasContext);
  const requestRef = React.useRef();

  useEffect( () => {
      if (state.play) updateCanvas();
      return () => {
        // console.log('USEEFFECT state.play=', state.play, requestRef.current);
        cancelAnimationFrame(requestRef.current);
      }
    }
  );

  function updateCanvas () {
    // console.log(' updateCanvas requestRef.current=', requestRef.current);
    drawCanvas(state);

    if (typeof window.requestAnimationFrame == 'function') {
      // setTimeout(() => {requestRef.current = window.requestAnimationFrame(updateCanvas);}, 1000/frameRate);
      requestRef.current = window.requestAnimationFrame(updateCanvas);
    } else {
      setTimeout(() => {
        updateCanvas(state);
      }, 40);
    }
}

return <Fragment>
  <button type="button" onClick={() => dispatch({type: 'PLAY', payload: true})} >
    Bet is made, let's go!
  </button>
  <button type="button" onClick={() => dispatch({type: 'PLAY', payload: false})} >
    Stop
  </button>
</Fragment>;
}

export default Controller;

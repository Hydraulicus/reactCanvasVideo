import React, {Fragment, useRef, useEffect, useContext} from 'react';
import CanvasContext from '../context/canvasContext';

function CanvasVideoContainer ({
                        src,
                      }) {

  const {state, dispatch} = useContext(CanvasContext);
  // console.log(state, dispatch)

  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');
    // console.log('CanvasVideo RERENDERED');
    dispatch({type: 'SET_REFS', payload: {ctx, video}})
  }, []);

  return (
    <Fragment>
      <video
        width="960"
        ref={videoRef}
        id="video"
        style={{visibility: "hidden", position: "absolute"}}
        controls={false}
      >
        <source
          src={src}
          type="video/mp4"
        />
      </video>
      <canvas
        id={`canvas${Math.random()}`}
        ref={canvasRef}
        width="960"
        height="540"
      />
    </Fragment>
  )
}
export default CanvasVideoContainer;

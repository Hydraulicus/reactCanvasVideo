import React from 'react';

function DrawCanvas(props) {

  function drawFrame() {
    // if (!props.play) return;
    // console.log(' DrawCanvas props=', props);
    ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'rgba(128, 128, 225, 0.78)';
    ctx.fillRect(100, 50, 300, 500);
  }

  const {ctx, video, play} = props;
  if (!play) {
    if (video) video.pause();
    return;
  }
  drawFrame(props);
  video.play();
}

export default DrawCanvas;

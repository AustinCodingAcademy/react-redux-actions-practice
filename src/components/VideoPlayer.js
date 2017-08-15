import React from 'react';



// this function shows a vidoe frame from state.videourl and
//   scales from state.videoScale
function VideoPlayer(props) {
  let width = 200;
  let height = 200;
  if(props.scale){
    width = 200 * props.scale;
    height = 200 * props.scale;
  }
  return (
      <div><iframe title="YouTube video player"  type="text/html"
      width={width} height={height} src={props.URL}
      frameBorder="0" allowFullScreen></iframe></div>
  );
}
export default VideoPlayer;

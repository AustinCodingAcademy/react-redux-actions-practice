import React from 'react';

//https://www.youtube.com/embed/t1Cp4djuo3Y    "https://www.youtube.com/embed/RETB7MkHxOI"


function VideoPlayer(props) {
  console.log(props.URL)
  let width = 300;
  let height = 200;
  if(props.scale){
    width = 300 * props.scale;
    height = 200 * props.scale;
  }
  return (
      <div><iframe title="YouTube video player"  type="text/html" 
      width={width} height={height} src={props.URL}
      frameBorder="0" allowFullScreen></iframe></div>
  );
}
export default VideoPlayer;
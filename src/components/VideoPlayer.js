import React from 'react';

function VideoPlayer(props) {
  let width = 200;
  let height = 200;
  if(props.scale){
    width = 200 * props.scale;
    height = 200 * props.scale;
  }

  /*
    Sometimes, when pasting a YouTube URL, it may return this error:
     - Refused to display 'https://www.youtube.com/watch?v=jNE-bzjTv-o' in a frame because
        it set 'X-Frame-Options' to 'sameorigin'.
    To avoid that, we need to convert the 'watch' request into an 'embed' request, followed by the video id.
  */
  let videoURL = props.URL;
  if(videoURL.includes('watch')) {
    let videoID = videoURL.split('watch?v=')[1];
    videoURL = 'https://www.youtube.com/embed/' + videoID;
  }

  return (
      <div>
        <iframe title="YouTube video player" width={width} height={height} src={videoURL} frameBorder="0" allowFullScreen></iframe>
      </div>
  );
}

export default VideoPlayer;
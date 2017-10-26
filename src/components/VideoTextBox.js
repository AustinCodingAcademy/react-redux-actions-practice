import React from 'react';

function VideoTextBox (props) {
  return (
    <div>
        Enter URL of YouTube video in embed format (i.e. 'https://www.youtube.com/embed/zUBNPRZO6Yw')
    <input
      onChange={(e) => {
        if (props.set) {
          props.set(e.target.value);
        }
      }}
      type='text' />

    </div>
  );
}
export default VideoTextBox;

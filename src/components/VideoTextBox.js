import React from 'react';

function VideoTextBox(props) {
  return (
      <div>
        Enter URL of YouTube video (must be an embed URL) 
        <p className="example">i.e: https://www.youtube.com/<b>embed/</b>qrO4YZeyl0I <i>not</i> https://www.youtube.com/<b>watch?v=</b>qrO4YZeyl0I)</p>
        <input 
      onChange={(e)=>{
        if(props.set){
          props.set(e.target.value);
        }
      }}
      type="text" />

      </div>
  );
}
export default VideoTextBox;
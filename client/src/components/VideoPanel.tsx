import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectCallAccepted } from '../features/socket/socketSlice'

type VideoPanelProps = {
  stream: any;
  myVideo: any;
  userVideo: any;
}

const VideoPanel: React.FC<VideoPanelProps> = React.memo(({ stream, myVideo, userVideo }) => {
  const callAccepted = useAppSelector(selectCallAccepted);

  return (

    <div >
      {stream && (
        <div className='video-container'>
          <video className='video-frame' playsInline muted ref={myVideo} autoPlay />
          {callAccepted && (
            <div className='video-container-answered'>
              <video className='video-frame' playsInline ref={userVideo} autoPlay />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default VideoPanel;

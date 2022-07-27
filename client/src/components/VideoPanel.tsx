import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectCallAccepted,selectIsMeMuted } from '../features/socket/socketSlice'

type VideoPanelProps = {
  stream: any;
  myVideo: any;
  userVideo: any;
}

const VideoPanel: React.FC<VideoPanelProps> = React.memo(({ stream, myVideo, userVideo }) => {
  const callAccepted = useAppSelector(selectCallAccepted);
  const isMeMuted = useAppSelector(selectIsMeMuted);

  useEffect(()=>{
    if(stream){
      stream.getAudioTracks()[0].enabled = isMeMuted;
    }
  },[isMeMuted, stream])

  return (

    <div >
      {stream && (
        <div className='video-container'>
          <video muted className='video-frame' playsInline ref={myVideo} autoPlay />
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

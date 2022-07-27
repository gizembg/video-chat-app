import React, { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setMe,setCall,setCallAccepted,selectCall,setCallEnded,selectMe,selectName } from '../features/socket/socketSlice';
import VideoPanel from '../components/VideoPanel';
import Footer from '../components/Footer';
import Notification from '../components/Notification';

// const socket = io('http://localhost:5001');
const socket = io('https://chat-app-video.herokuapp.com/');

type VideoStream = {
  srcObject: MediaStream;
}

const SocketContainer: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const [stream, setStream] = useState<MediaStream>();
  const myVideo = useRef<VideoStream>();
  const userVideo = useRef<VideoStream>();
  const connectionRef = useRef<Peer.Instance>();
  const call = useAppSelector(selectCall);
  const me = useAppSelector(selectMe);
  const name = useAppSelector(selectName);

  useEffect(() => {
    navigator.mediaDevices?.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if(myVideo.current)
         myVideo.current.srcObject = currentStream;
      });

    socket.on('me', (id) => dispatch(setMe(id)));
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      dispatch(setCall({ isReceivingCall: true, from, name: callerName, signal }));
    });
  }, []);


  const answerCall = React.useCallback(() => {
    dispatch(setCallAccepted(true));

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      if(userVideo.current){
      userVideo.current.srcObject = currentStream;
      }
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  },[call.from, call.signal, dispatch, stream]);

  const callUser = React.useCallback((id:string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      if(userVideo.current){
        userVideo.current.srcObject = currentStream;
      }
    });

    socket.on('callAccepted', (signal) => {
      dispatch(setCallAccepted(true));

      peer.signal(signal);
    });

    connectionRef.current = peer;
  },[dispatch, me, name, stream]);

  const leaveCall = React.useCallback( () => {
    dispatch(setCallEnded(true));

    if(connectionRef.current){
      connectionRef.current.destroy();
    }

    window.location.reload();
  },[dispatch]);

  return (
<div className='main-screen'>
  <VideoPanel stream={stream} myVideo={myVideo} userVideo={userVideo}></VideoPanel>
  <div className='footer'>
    <Footer callUser={callUser} leaveCall={leaveCall}></Footer>
  </div>
  <Notification answerCall={answerCall}></Notification>
</div>
  );
});

export default SocketContainer

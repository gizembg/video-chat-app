import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectCallAccepted, selectCallEnded, selectMe, selectName, setName } from '../features/socket/socketSlice'

type FooterProps = {
  callUser: any;
  leaveCall:any
}
const Footer : React.FC<FooterProps>= ({ callUser, leaveCall }) => {
  const dispatch = useAppDispatch();
  const me = useAppSelector(selectMe);
  const callAccepted = useAppSelector(selectCallAccepted);
  const callEnded = useAppSelector(selectCallEnded);
  const name = useAppSelector(selectName);
  const [idToCall, setIdToCall] = useState('');

  const handleNameChange = (e:  React.MouseEvent<HTMLElement>) => {
    const val = (e.target as HTMLInputElement).value
    dispatch(setName(val));
  
  }

  const handleCopyId = () => {
    navigator.clipboard.writeText(me)
  }

  const handleCallUser = () => {
    callUser(idToCall)
  }


  return (
    <>
      <div className='user-label-container'>
        <input placeholder="Name" type='text' value={name} onChange={(e:any) => handleNameChange(e)} />
      </div>

      <div className='user-label-container'>
        <div className='user-label-item'>
          <input placeholder='Your id' type='text' value={me} disabled />
        </div>
        <div className='user-label-item label-button'>
          <button className='icon-button' onClick={handleCopyId}>
            <svg width="17px" height="17px" viewBox="0 0 115.77 122.88" >
              <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" />
            </svg>
          </button>
        </div>
      </div>

      <div className='user-label-container'>
        <div className='user-label-item'>
          {callAccepted && !callEnded ? (
            <div className='user-label-item'>
              <button className='icon-button' onClick={leaveCall}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" version="1.1" viewBox="0 0 752 752">
                  <g>
                    <path d="m590.54 293.78c-120.73-120.7-316.44-120.69-437.07 0.015625-29.504 29.5-4.0547 112.34-4.0547 112.34 2.2109 7.2656 10.109 11.82 17.523 10.094l113.29-26.355c7.4102-1.6953 13.465-9.3438 13.465-16.945l0.023438-60.543c0-7.6016 6.2227-13.824 13.824-13.824h136.09c7.6211 0 13.844 6.2227 13.844 13.824l-0.015625 57.016c0.015625 7.6016 6.1602 14.895 13.633 16.191l125.39 21.613c7.4922 1.3164 14.34-3.8164 15.223-11.367 0 0.007812 8.3398-72.559-21.168-102.05z" fill="#010101" />
                  </g>
                  <path d="m404.96 352.55h-57.473v72.098h-43.113l71.652 124.1 71.68-124.1h-42.746z" fill="#010101" />
                </svg>
              </button>
            </div>
          ) : (
            <div className='user-label-item'>
              <input placeholder='ID of the person to call' type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
              <div className='user-label-item label-button'>
                <button className='icon-button' onClick={handleCallUser}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 414.937 414.937">
                    <g>
                      <path d="M159.138,256.452c37.217,36.944,80.295,72.236,97.207,55.195c24.215-24.392,39.12-45.614,92.854-2.761   c53.734,42.874,12.696,71.727-10.757,95.363c-27.064,27.269-128.432,1.911-228.909-97.804C9.062,206.71-17.07,105.54,10.014,78.258   c23.46-23.637,52.006-64.879,95.254-11.458c43.269,53.394,22.161,68.462-2.054,92.861   C86.31,176.695,121.915,219.501,159.138,256.452z M213.104,80.203c0,0-11.227-1.754-19.088,6.113   c-8.092,8.092-8.445,22.032,0.082,30.552c5.039,5.039,12.145,6.113,12.145,6.113c13.852,2.598,34.728,6.997,56.944,29.206   c22.209,22.208,26.608,43.084,29.206,56.943c0,0,1.074,7.106,6.113,12.145c8.521,8.521,22.46,8.174,30.552,0.082   c7.861-7.86,6.113-19.087,6.113-19.087c-4.399-28.057-17.999-57.365-41.351-80.716C270.462,98.203,241.153,84.609,213.104,80.203z    M318.415,96.958c40.719,40.719,58.079,86.932,52.428,124.379c0,0-1.972,11.859,5.773,19.604   c8.718,8.718,22.535,8.215,30.695,0.062c5.243-5.243,6.385-13.777,6.385-13.777c4.672-32.361-1.203-97.464-64.647-160.901   C285.605,2.887,220.509-2.988,188.147,1.677c0,0-8.527,1.136-13.777,6.385c-8.16,8.16-8.656,21.978,0.061,30.695   c7.746,7.746,19.604,5.773,19.604,5.773C231.484,38.879,277.696,56.24,318.415,96.958z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;

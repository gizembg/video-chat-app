import React from 'react';

import { useAppSelector } from '../app/hooks';
import { selectCall, selectCallAccepted } from '../features/socket/socketSlice';

type NotificationProps = {
  answerCall: any
}

const Notification : React.FC <NotificationProps>= ({ answerCall }) => {
  const call = useAppSelector(selectCall);
  const callAccepted = useAppSelector(selectCallAccepted);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className='notification-panel'>
              <p style={{marginBottom:'30px'}}>{call.name} is calling...</p>
              <div className="pulse"  onClick={answerCall}> <i className="fas fa-phone fa-2x"></i> 
              <button className='icon-button'>
              <svg width="17px" height="17px" viewBox="0 0 194.579 194.579"><g>
                  <g>
                    <path d="M189.234,157.362l-30.209-30.227c-2.351-2.348-5.633-3.643-9.23-3.643    c-3.79,0-7.444,1.478-10.028,4.062l-16.327,16.33l-4.413-2.448c-9.713-5.386-23.001-12.762-37.048-26.823    c-14.097-14.083-21.48-27.41-26.881-37.152l-2.412-4.287l16.359-16.352c5.411-5.429,5.597-14.065,0.408-19.265L39.237,7.348    C36.882,5,33.608,3.701,30.014,3.701c-3.794,0-7.444,1.482-10.024,4.069l-7.423,7.462L11.87,16.37    c-2.759,3.543-5.018,7.526-6.714,11.864c-1.568,4.134-2.548,8.063-2.995,12.003c-3.897,32.381,11.034,62.107,51.539,102.606    c48.014,48.003,88.133,51.736,99.288,51.736c1.904,0,3.06-0.104,3.386-0.136c4.119-0.501,8.067-1.492,12.043-3.035    c4.295-1.675,8.264-3.922,11.792-6.682l1.693-1.328l6.939-6.811C194.251,171.18,194.427,162.555,189.234,157.362z     M185.093,172.852l-5.35,5.29c-2.527,2.426-6.875,5.848-13.235,8.335c-3.59,1.389-7.104,2.269-10.737,2.698    c-0.2,0.025-1.016,0.082-2.348,0.082c-10.744,0-49.428-3.622-95.967-50.154C11.63,93.283,4.307,66.696,7.425,40.864    c0.404-3.525,1.274-7.036,2.67-10.719c2.52-6.431,5.941-10.772,8.36-13.278l5.264-5.34c1.632-1.625,3.926-2.562,6.306-2.562    c2.154,0,4.105,0.755,5.472,2.137l30.216,30.206c3.124,3.128,2.942,8.414-0.408,11.778L46.434,71.939l-0.379,0.387l1.045,1.772    c1.056,1.779,2.169,3.776,3.368,5.959c5.558,10.01,13.167,23.717,27.768,38.322c14.627,14.623,28.284,22.189,38.265,27.718    c2.269,1.26,4.241,2.355,6.002,3.4l1.772,1.059l19.247-19.247c1.61-1.614,3.901-2.541,6.277-2.541    c2.169,0,4.119,0.759,5.494,2.137l30.198,30.191C188.608,164.227,188.425,169.509,185.093,172.852z" />
                    <path d="M109.59,87.131c5.35-0.004,48.053-5.998,49.657-6.238c0.512,0,3.139-0.061,4.477-1.406    c0.837-0.837,1.811-2.695-1.142-5.651l-10.593-10.586l37.85-37.846c0.927-0.927,2.015-3.314-0.44-5.769L171.637,1.876    c-1.231-1.231-2.462-1.865-3.675-1.875c-0.934-0.011-1.814,0.354-2.502,1.038c-0.165,0.172-0.29,0.326-0.379,0.447l-38.236,38.226    l-11.556-11.549c-2.516-2.512-4.173-1.399-4.767-0.802c-1.306,1.306-1.335,4.03-1.306,4.649l-4.674,49.492    c-0.021,0.251-0.161,2.523,1.335,4.141C106.498,86.326,107.65,87.131,109.59,87.131z M112.238,32.11    c-0.029-0.823,0.107-1.832,0.29-2.337c0.147,0.097,0.354,0.261,0.626,0.533l13.689,13.693l40.473-40.477l0.186-0.179l0.097-0.165    c0.154-0.157,0.272-0.15,0.329-0.15c0.129,0,0.655,0.075,1.564,0.984l17.762,17.758c0.626,0.623,0.773,1.127,0.437,1.489    l-39.99,39.987l12.734,12.737c0.888,0.884,1.056,1.349,1.12,1.389c-0.311,0.258-1.41,0.49-2.52,0.508    c-0.447,0.061-44.31,6.216-49.445,6.216c-0.673,0-1.16-0.161-1.471-0.494c-0.523-0.551-0.576-1.528-0.555-1.832L112.238,32.11z" />
                  </g>
                </g>
                </svg>
                </button>
              </div>

    

        </div>
      )}
    </>
  );
};

export default Notification;
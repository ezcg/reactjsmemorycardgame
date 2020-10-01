import MobileDetect from "mobile-detect";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export function getDeviceType() {
  let userAgent;
  let deviceType;
  userAgent = navigator.userAgent;
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }
  return deviceType;
}

let deviceType = getDeviceType();

ReactDOM.render(
  <React.StrictMode>
    <App deviceType={deviceType} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

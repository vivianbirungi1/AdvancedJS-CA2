// importing react and react dom as well as App.js page
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './aos.css';
//import './aos.js';
// import AOS from "aos";
import App from './App';


// react dom is a package that provides DOM specific methods 
// enables a way to manage DOM web pages.
// passing in App 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

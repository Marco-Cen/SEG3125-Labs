import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
// import reportWebVitals from './reportWebVitals';

/* Notes
- "node_Modules" directory contains all needed dependencies 
  - (Usually not included when download react project from github bc directory is huge in file size (JS library, and other))
  - Therefore never include it in github
  - 'npm install' will install needed dependecies needed for project without 'node_Moduels' (References 'package.json')

(Not needed bc test/log which I am not using)
- SRC > Deleted 'reportWebVitals.js' file
- SRC > Deleted 'App.test.js' file
- SRC > Deleted 'setupTests.js' file
*/


//Takes all UI component and render to DOM to 'root' (To browser)
ReactDOM.render(
// React does additional checks during dev and gives warnings to display in console
<React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); //Bc deleted 'reportWebVitals.js' file

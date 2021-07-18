// import logo from './logo.svg'; //was used in starting on create code
// import './App.css'; //styles ALL unless use styled components
import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import Navbar from './NavMenu';
import Home from './Home';

/* NOTE:
- JSX file
  - Babbel = renders JSX file into HTML and JavaScript
- Version 17 of React, no longer need to import react above
- React made up of multiple diff components
*/

function App() {
  const dynamicTitle = 'Dynamic Title Test';
  const likes = 50; //React converts whatever datatype we use to STRING auto to browser and output (Cant output Boolean or objects)

  return (
    //This className 'App' is being injected into HTML file (Root component)
    <div className="App"> 
      {/* Imported navbar content from Navbar.js component */}
      <Navbar> </Navbar>  {/* OR can use self closing tag "/>"  */}


      {/* Content on page */}
      <div className="content">

        {/* Home Page Contents */}
        <Home />


        <h1> { dynamicTitle } </h1>
        <p> Liked {likes} times </p>

      </div>







      {/* Starter on create Code */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App; //Always export so can use in other files

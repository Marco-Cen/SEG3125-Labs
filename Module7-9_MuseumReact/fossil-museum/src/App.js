// import logo from './logo.svg'; //was used in starting on create code
// import './App.css'; //styles ALL unless use styled components
import React from 'react'; //Bc downloaded bootstrap? (React-bootstrap)
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //For nav bar linkage

import Navbar from './NavMenu'; //Imported navbar content from Navbar.js component
import Home from './Home';
import Exhibition from './Exhibition';
import TicketPurchaseForm from './TicketPurchase';



function App() {

  //Experimenting (TEST)
  // const dynamicTitle = 'Fossilized (Dynamic Title Test)';
  // const likes = 50; //React converts whatever datatype we use to STRING auto to browser and output (Cant output Boolean or objects)

  return (

    <Router>
      <div className="App">  {/* This className 'App' is being injected into HTML file (Root component) */}
        <Navbar />  {/* Can use self closing tag "/>" or end tag "</Navbar>"  */}

        {/* //Test */}
        {/* <h1> {dynamicTitle} </h1>
        <p> HISTORY UNCOVERED </p>
        <p> Liked {likes} times </p> */}

        {/* Content on page */}
        <div className="content">
          <Switch>

            {/* Need to specify 'exact' match because React looks for ANY match if string contains it */}
            {/* 'path' does not have to equal class title. It is whatever is set in navbar menu path menu' */}
            <Route exact path="/" >   <Home />   </Route> 
            <Route path="/Exhibition" >  <Exhibition />    </Route>
            {/* <Route path="/FossilLocations">       </Route> */}
            <Route path="/TicketPurchase" >  <TicketPurchaseForm />   </Route>
            {/* <Route path="/AboutUs" >    </Route> */}
  

          </Switch>    
        </div>

        <footer style={{textAlign:'right'}}>
                Designed by: MC
        </footer>

    </div>
    </Router>    
  );
}

export default App; //Always export so can use in other files




      // {/* Starter on create Code */}
      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}


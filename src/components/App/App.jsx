import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou'

function App() {



  return (
    <div className='App'>
      <Router>
        <Route path='/' exact>
          <Feeling />
        </Route>
      
      <Route path='/understanding' exact>
          <Understanding />
        </Route>

        <Route path='/supported' exact>
          <Supported />
        </Route>
        <Route path='/comments' exact>
          <Comments />
        </Route>
        <Route path='/review' exact>
          <Review />
        </Route>
        <Route path='/thankyou' exact>
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;

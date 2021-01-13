import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/MainComponent';
    
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
       <Main />
      </Router>
    );
  }
}

export default App;
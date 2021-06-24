import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './views/Home';

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;

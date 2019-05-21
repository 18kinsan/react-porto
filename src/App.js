import React, {Component} from 'react';
import { BrowserRouter} from "react-router-dom";
import './App.css';

import Main from './components/Main.js';


class App extends Component {
  render(){
    return(
    <BrowserRouter>
      <div className="Fullscreen">
        <p><Main/></p>
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
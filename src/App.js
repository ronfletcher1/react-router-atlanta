import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BootstrapNavBar from './MayorMsg'
import MayorMsg from './BootstrapNavBar'
import Photos from './Photos';
import About from './About';
import Weather from './Weather';
import Home from './Home';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={BootstrapNavBar} />
          {/* <BootstrapNavBar /> */}
          <div className="container main" >
            <Route path="/" component={Home}/>
            <Route path="/about" component={About} />;
            <Route path="/localweather" component={Weather} />
            <Route path="/mayormessage" component={MayorMsg} />
            <Route path="/takealook" component={Photos} />
            
          </div>
        </div>
      </Router> 
    );
  }
}

export default App;

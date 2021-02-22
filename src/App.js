import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import About from './components/About';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import NotFound from "./components/NotFound";
class App extends Component {
  state={
    navLinks:{
      about:{ label: "Me", path: "/me"},
      hobbies:{ label: "Hobbies", path: "/hobbies"},
      contact: { label: "Contact", path: "/contact"},
    }
  }
  render() {
    const {about, hobbies, contact}= this.state.navLinks;
    return (
        <Router>
      <div className="main">
      <Navigation links={this.state.navLinks} />
      
        <Switch>
        {/* <Redirect from={about.path} to="/me" /> */}
        <Route path={about.path} component={About} />
        <Route path={hobbies.path} component={Hobbies} />
        <Route path={contact.path} component={Contact} />
        <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

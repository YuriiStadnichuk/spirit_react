import React from "react";
import "./App.css";
import "./normalize.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Start from "./Start/Start";
import About from "./About/About";
import Team from "./Team/Team";
import Services from "./Services/Services";
import Clients from "./Clients/Clients";
import Work from "./Work/Work";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header date={this.props.data} />
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/home" component={Start} />
            <Route exact path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/portfolio" component={Work} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Start} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

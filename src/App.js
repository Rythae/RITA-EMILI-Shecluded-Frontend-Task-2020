import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux';
import { fetchCats } from './store/actions/actions';
import Home from  './components/Home';
import Cats from './components/Cats';
import LOTR from './components/LOTR';

import '../src/sass/main.scss';



class App extends Component {

  componentDidMount = () => {
    this.props.fetchCats()
  }

  render () {
    return (
      <Router>
        <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/cats" component={Cats} />
        <Route path="/characters" component={LOTR} />
        </div>
      </Router>
    );
  }
 
}

const mapStateToProps = state => {
      return {
        breeds: state.cat.catbreeds
      }
}

const mapDispatchToProps = dispatch => {
      return {
          fetchCats: () => dispatch(fetchCats())
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

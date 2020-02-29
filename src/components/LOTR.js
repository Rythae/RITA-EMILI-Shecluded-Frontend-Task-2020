import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

import '../sass/main.scss';


class LOTR extends Component {

  state = {
    characters: [],
  }

  componentDidMount() {
    this.props.fetchLotr()
  }

  render () {
     return (
       <div className="epic">
          <h1 className="heading-primary">Your favourite characters!</h1>
         {this.props.characters.map((character) => (<>
          <div className="lotr-details">
         <p className="details">{character.name}</p>
         <p className="details">{character.gender}</p>
          </div>
         </>))}
       </div>
     )
  } 
}

const mapStateToProps = state => {
  return {

    characters: state.lotr.characters,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLotr: (response) => dispatch(actionCreators.fetchLotr(response)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LOTR);
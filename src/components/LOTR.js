import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/actions';


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
         {this.props.characters.map((character) => (<>
          <div className="breed-details">
         <p>{character.name}</p>
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
import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../store/actions/actions';

import '../sass/main.scss'

const apiKey = `d3cd3f3e-a111-4460-8c2d-faf8e578ea96`

const CatImg = ({ breed_id }) => {
  const [src, setSrc] = useState(null)
  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search?key=${apiKey}?breed_id=${breed_id}`)
    .then( response => {
      const imageUrl =  response.data[0].url;
          setSrc(imageUrl)
      })
  }, [])

  return <img src={src} alt="" />
}

class Cats extends Component {

  state = {
    imageUrl:  [],
    breeds: [],
  }

  render() {
    return (
      <div className="container-cat">
        <h1 className="heading-primary">Your favourite lovely cats!</h1>
        <section className="breeds">
          {this.props.breeds.map((breed) => (<>
              <section className="cat-img"><CatImg breed_id={breed.breed_id}/></section>
            <div className="breeds_details">
            <div className="breeds-details-2">
              <h5>{breed.name}</h5>
              <p>{breed.temperament}</p>
              <p>{breed.life_span}</p>
              <p>{breed.shedding_level}</p>
              <p>{breed.dog_friendly}</p>
              <p>{breed.child}</p>
              </div>
            </div>
          </>))}
        </section>
      </div>
    );
    
  }
}

const mapStateToProps = state => {
    return {

      breeds: state.cat.catbreeds,
    }
};

const mapDispatchToProps = dispatch => {
    return {
      fetchCats: (response) => dispatch(actionCreators.fetchCats(response)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cats);

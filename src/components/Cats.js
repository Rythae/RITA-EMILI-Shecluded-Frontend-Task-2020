import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../store/actions/actions';

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
      <div className="container">
        <section className="breeds">
          {this.props.breeds.map((breed) => (<>
              <CatImg breed_id={breed.breed_id}/>
            <div className="breed-details">
              <h5>{breed.name}</h5>
              <p>{breed.temperament}</p>
              <p>{breed.life_span}</p>
              <p>{breed.shedding_level}</p>
              <p>{breed.dog_friendly}</p>
              <p>{breed.child}</p>
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

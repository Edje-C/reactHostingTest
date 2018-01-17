import React from "react";
import { Route, Switch } from "react-router-dom";

import dogAPI from "../../api/dogAPI";

import DogBreedList from "./DogBreedList";
import RandomDogWithBreed from "./RandomDogWithBreed";

class DogBreeds extends React.Component {
  constructor() {
    super();
    this.breeds = []
    this.state = {
      breeds: []
    };
  }

  getAllDogBreeds = () => {
    dogAPI.getAllBreeds().then(response => {
      const breedsArr = response.data.message;
      this.breeds = breedsArr;
      this.setState({ breeds: breedsArr });
    });
  };

  inputHandler = e => {
    const filteredBreeedsArr = this.breeds.filter(breed => breed.includes(e.target.value))
    this.setState({breeds: filteredBreeedsArr})
  }

  componentDidMount() {
    this.getAllDogBreeds();
  }

  renderBreeds = () => {
    const { breeds } = this.state;
    const handler = this.inputHandler;
    return (
      <div>
        <h2> Master Breeds </h2>
        <input onChange={handler}/>
        <DogBreedList breeds={breeds} />
      </div>
    );
  };

  renderDogWithBreed = props => {
    const { breed } = props.match.params;
    return <RandomDogWithBreed breed={breed} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs/breeds" render={this.renderBreeds} />
        <Route path="/dogs/breeds/:breed" render={this.renderDogWithBreed} />
      </Switch>
    );
  }
}

export default DogBreeds;

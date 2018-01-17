import React from "react";
import dogAPI from "../../api/dogAPI";
import Dog from "./Dog";
import favoriteDogs from "./favoriteDogs"

class RandomDogWithBreed extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  getPicture = () => {
    const { breed } = this.props;
    this.setState({ imageURL: "" });
    dogAPI.getRandomDogWithBreed(breed).then(response => {
      this.setState({ imageURL: response.data.message });
    });
  };

  favoritePicture = e => {
    const favoriteDogArr = favoriteDogs.favoriteDogArr
    favoriteDogArr.push(this.state.imageURL)
  }

  componentDidMount() {
    this.getPicture();
  }

  render() {
    const { imageURL } = this.state;
    const { breed } = this.props;
    return (
      <div>
        <h2>{breed}</h2>
        <Dog imageURL={imageURL} onClick={this.getPicture} />
        <button onClick={this.getPicture}> One More </button>
        <button onClick={this.favoritePicture}> Favorite </button>
      </div>
    );
  }
}

export default RandomDogWithBreed;

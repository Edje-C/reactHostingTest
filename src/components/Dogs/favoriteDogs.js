import React from 'react';
import {Route} from 'react-router-dom';

class FavoriteDog extends React.Component {
  constructor(){
    super();
    this.state = {
      pics: "",
      dogsArr: favoriteDogArr
    }
  }

  renderFavorites = () => {
    return 
  }

  clickHandler = e => {
    const index = favoriteDogArr.indexOf(e.target.name)
    favoriteDogArr.splice(index, 1)
    this.setState({dogsArr: favoriteDogArr})
  }

  render(){
    return (
      <div>
        {this.state.dogsArr.map(url => {
          return (<div><img alt="dog" src={url} /><button name={url} onClick={this.clickHandler}>Delete</button></div>)
          }
          )}
      </div>
    )
  }
}

const favoriteDogArr = []

export default { FavoriteDog, favoriteDogArr}
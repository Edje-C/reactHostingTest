import React from "react";
import { Link } from "react-router-dom";

const styles = {
  img: {
    width: "10em"
  },
  ul: {
    listStyleType: "none"
  }
};

const BreedList = ({ breeds }) => {
  const breedLis = []
  for(const v in breeds){
    breeds[v][0] ? breedLis.push(
      <li key={v}>
        <Link to={`/dogs/breeds/${v}`}> {v} </Link>

        <ul>
          { breeds[v].map(subBreed => <li key={subBreed}>
            <Link to={`/dogs/breeds/${subBreed}`}> {subBreed} </Link>
          </li>) }
        </ul>

      </li> ) : 
      breedLis.push(
        <li key={v}>
          <Link to={`/dogs/breeds/${v}`}> {v} </Link>
        </li>
        ) 
  }
  return (
    <ul style={styles.ul}>
        {breedLis}
    </ul>
  );
};

export default BreedList;

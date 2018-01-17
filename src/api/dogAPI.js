import axios from "axios";

const getRandomDog = () => axios.get("https://dog.ceo/api/breeds/image/random");

const getMasterBreeds = () => axios.get("https://dog.ceo/api/breeds/list");

const getAllBreeds = () => axios.get("https://dog.ceo/api/breeds/list/all");

const getRandomDogWithBreed = breed =>
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

export default {
  getRandomDog,
  getMasterBreeds,
  getAllBreeds,
  getRandomDogWithBreed
};

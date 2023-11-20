import axios from "axios";
const BACKEND_URL = "https://moviebooking-dd8f1-default-rtdb.firebaseio.com/";
export async function fetchMovies() {
  const response = await axios.get(BACKEND_URL + "/movieData.json");
  const movies = [];
  for (const key in response.data) {
    const movieObj = {
      id: key,
      poster: response.data[key].poster,
      backdrop: response.data[key].backdrop,
      title: response.data[key].title,
      language: response.data[key].language,
      genre: response.data[key].genre,
      rating: response.data[key].rating,
      description: response.data[key].description,
      releaseDate: response.data[key].releaseDate,
      trailer: response.data[key].trailer,
      status: response.data[key].status,
      ageRequired: response.data[key].ageRequired,
      time: response.data[key].time,
      censorship: response.data[key].censorship,
      director: response.data[key].director,
      actor: response.data[key].actor,
    };
    movies.push(movieObj);
  }
  return movies;
}
export async function fetchMoviesDetail(id) {
  const response = await axios.get(BACKEND_URL + `/movieData/${id}.json`);
  const movieObj = {
    id: response.data.id,
    poster: response.data.poster,
    backdrop: response.data.backdrop,
    title: response.data.title,
    language: response.data.language,
    genre: response.data.genre,
    rating: response.data.rating,
    description: response.data.description,
    releaseDate: response.data.releaseDate,
    trailer: response.data.trailer,
    status: response.data.status,
    ageRequired: response.data.ageRequired,
    time: response.data.time,
    censorship: response.data.censorship,
    director: response.data.director,
    actor: response.data.actor,
  };
  return movieObj;
}

import axios from "axios";

const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

export function getMovies() {
  return axios.get(URL);
}

export function getMovie(id) {
  return axios.get(`${URL}/${id}/showtimes`);
}

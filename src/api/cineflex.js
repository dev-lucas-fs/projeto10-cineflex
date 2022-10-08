import axios from "axios";

const URL = "https://mock-api.driven.com.br/api/v5/cineflex";

export function getMovies() {
  return axios.get(`${URL}/movies`);
}

export function getMovie(id) {
  return axios.get(`${URL}/movies/${id}/showtimes`);
}

export function getSeats(id) {
  return axios.get(`${URL}/showtimes/${id}/seats`);
}

export function postSeats(data) {
  return axios.post(`${URL}/seats/book-many`, data);
}

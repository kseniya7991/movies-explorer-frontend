/* const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }
  return res.json();
}; */

export const BASE_URL = 'https://movies.kst.nomoredomains.monster/api';

export const register = (name, email, password) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    password,
  }),
})
  .then((response) => response.json());

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
})
  .then((response) => response.json())
  .then((res) => {
    if (res) {
      localStorage.setItem('token', res.token);
      return res;
    }
    return null;
  });

export const getUser = () => fetch(`${BASE_URL}/users/me`, {
  headers: {
    method: 'GET',
    authorization: localStorage.getItem('token'),
  },
})
  .then((response) => response.json());

export const updateUser = (name, email) => fetch(`${BASE_URL}/users/me`, {
  method: 'PATCH',
  headers: {
    authorization: localStorage.getItem('token'),
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
  }),
})
  .then((response) => response.json());

export const getSavedMovies = () => fetch(`${BASE_URL}/movies`, {
  method: 'GET',
  headers: {
    authorization: localStorage.getItem('token'),
  },
})
  .then((response) => response.json());

export const saveMovie = (movie) => fetch(`${BASE_URL}/movies`, {
  method: 'POST',
  headers: {
    authorization: localStorage.getItem('token'),
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `https://api.nomoreparties.co${movie.image.url}`,
    trailer: movie.trailerLink,
    thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }),
})
  .then((response) => response.json());

export const deleteMovie = (movieId) => fetch(`${BASE_URL}/movies/${movieId}`, {
  method: 'DELETE',
  headers: {
    authorization: localStorage.getItem('token'),
  },
})
  .then((response) => response.json());

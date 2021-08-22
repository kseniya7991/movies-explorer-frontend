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
  .then((res) => {
    res.json();
  })
  .then((response) => {
    console.log(response);
  });

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

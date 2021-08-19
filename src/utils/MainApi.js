/* const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }
  return res.json();
}; */

export const BASE_URL = 'https://movies.kst.nomoredomains.monster';

export const register = (name, email, password) => fetch('https://movies.kst.nomoredomains.monster/api/signup', {
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
  .then((response) => (response));

const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }
  return res.json();
};

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
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
      .then(handleResponse)
      .then((res) => {
        console.log(res);
        return res;
      });
  }
}

const MainApi = new Api({
  baseUrl: 'https://movies.kst.nomoredomains.monster',
});

export default MainApi;

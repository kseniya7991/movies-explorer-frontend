const filterByKey = (movies, searchKey) => {
  const keys = searchKey.split(',').map((key) => key.trim()).filter((el) => el.trim() !== '');
  const arrMovies = Array.from(movies);

  function filterMovies(key) {
    return arrMovies.filter((item) => Object.values(item).join().toLowerCase().includes(key));
  }

  return keys.map((key) => filterMovies(key)).flat();
};

export default filterByKey;

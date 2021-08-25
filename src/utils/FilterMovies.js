const filterMovies = (movies, searchKey, checkbox) => {
  const keys = searchKey.split(',').map((key) => key.trim()).filter((el) => el.trim() !== '');
  const arrMovies = Array.from(movies);

  const filterByDuration = arrMovies.filter((el) => el.duration <= 40);

  function filterBykey(key) {
    if (checkbox) {
      return filterByDuration.filter((el) => Object.values(el).join().toLowerCase().includes(key));
    }
    return arrMovies.filter((el) => Object.values(el).join().toLowerCase().includes(key));
  }

  if (keys !== []) {
    console.log(keys);
    return keys.map((key) => filterBykey(key)).flat();
  }
  console.log(filterByDuration);
  return filterByDuration;
};

export default filterMovies;

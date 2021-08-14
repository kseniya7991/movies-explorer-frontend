const filterByKey = (movies, searchKey) => {
  const arrMovies = Array.from(movies);
  return arrMovies.filter((obj) => Object.keys(obj).some((key) => obj[key].includes(searchKey)));
};

export default filterByKey;

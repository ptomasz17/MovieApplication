const searchListMap = (previousValue, currentValue) => {
  previousValue[currentValue.imdbID] = {
    poster: currentValue.Poster,
    title: currentValue.Title,
    date: currentValue.Year
  };
  return previousValue;
};

export default searchListMap;

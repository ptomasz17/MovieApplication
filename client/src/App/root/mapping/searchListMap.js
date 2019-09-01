export const searchListMap = (previousValue, currentValue) => {
  previousValue[currentValue.imdbID] = {
    poster: currentValue.Poster,
    title: currentValue.Title,
    date: currentValue.Year
  };
  return previousValue;
};

export const movieMap = value => {
  return {
    country: value.Country,
    director: value.Director,
    type: value.Genre,
    plot: value.Plot,
    rating: value.imdbRating
  };
};

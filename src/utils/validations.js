export const isMovieOrTV = (type) => {
  if (type === "movie") return "movie";
  if (type === "tv") return "tv";
  return "movie";
};

export const genresToString = (array) => {
  const arrayOfStrings = [];
  array.forEach((element) => {
    arrayOfStrings.push(element.name);
  });
  return arrayOfStrings.join(", ");
};

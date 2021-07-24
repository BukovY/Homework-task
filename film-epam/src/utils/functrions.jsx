export const genresIndexToString = (arr, map) => {
  let genresToRender = [];
  for (let i of map) {
    if (arr.indexOf(i.id) !== -1) {
      genresToRender.push(i.name);
    }
  }
  return genresToRender;
};

export const minToTime = (num) => {
  let min = num % 60;
  let hour = (num - min) / 60;
  return String(hour) + ":" + String(min);
};

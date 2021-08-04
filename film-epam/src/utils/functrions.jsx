export const genresIndexToString = (arr, map) => {
  const genresToRender = [];
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

export const getPhotoCard = (path) => {
  return path === null || path === undefined
    ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
    : `https://image.tmdb.org/t/p/w1280/${path}`;
};

export const getPeopleCard = (img) => {
  return img === null || img === undefined
    ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
    : `https://image.tmdb.org/t/p/w500/${img}`;
};

export const getFilmCover = (img) => {
  return img === null || img === undefined
    ? "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    : `https://image.tmdb.org/t/p/w500/${img}`;
};

export const getPaginationRange = (maxPage) =>
  Array(maxPage)
    .fill(1)
    .reduce((prev, next, index) => {
      return [...prev, index + 1];
    }, []);

export const getIndexLanguage = (lang) => {
  return lang === "EN" ? 0 : lang === "RU" ? 1 : 2;
};

export const matchOnlyNumber = (str) => /^\d+$/.test(str);

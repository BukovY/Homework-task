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
export const getPhotoCard = (path) => {
  const imgPath =
    path === null
      ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
      : `https://image.tmdb.org/t/p/w1280/${path}`;
  return imgPath;
};

export const getPeopleCard = (img) => {
  const imgPath =
    img === null
      ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
      : `https://image.tmdb.org/t/p/w500/${img}`;
  return imgPath;
};

export const getFilmCover = (img) => {
  if (img == null) {
    img =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  } else {
    img = `https://image.tmdb.org/t/p/w500/${img}`;
  }
  return img;
};

export const getPaginationRange = (maxPage) => {
  return Array(maxPage)
    .fill(1)
    .reduce((prev, next, index) => {
      return [...prev, index + 1];
    }, []);
};

export const getTabs = (label) => {
  let tabs = [["Popular"], ["Top rated"], ["Upcoming"]];
  if (label === "Popular") {
    tabs[0].push("active");
  }
  if (label === "Top rated") {
    tabs[1].push("active");
  }
  if (label === "Upcoming") {
    tabs[2].push("active");
  }
  return tabs;
};

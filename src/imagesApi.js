
export const getImages = (length = 10) => {
  return fetch(`https://raw.githubusercontent.com/Alike73/data-slider/main/slider.json`)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.description;
        const url = c?.image;

        images.push({ title, url });
      });
      return images.slice(0, length); // remove the extra cats
    });
};

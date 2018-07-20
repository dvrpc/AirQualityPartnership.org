const preloadImages = arr =>
  arr.forEach(index => {
    let img = document.createElement("img");
    img.src = BASE_URL + "img/" + index + ".jpg";
  });

export default preloadImages;

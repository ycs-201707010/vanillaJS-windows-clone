const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.png",
  "05.webp",
  "06.png",
  "07.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const src = `./img/wallpaper/${chosenImage}`;

/**  */
console.log(src);
document.body.style.backgroundImage = `url(${src})`;

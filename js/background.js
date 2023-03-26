const images = ["01.jpeg", "02.jpg", "03.jpeg", "04.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

/**  */
document.body.appendChild(bgImage);

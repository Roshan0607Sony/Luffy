let images = [
  "Luffy 1.webp", "Luffy 2.webp", "Luffy 3.webp", "Luffy 4.webp", "Luffy 5.webp",
  "Luffy 6.webp", "Luffy 7.webp", "Luffy 8.webp", "Luffy 9.webp", "Luffy 10.webp", "Luffy 11.webp"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  slide.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 1000); // matches fade time
}, 3000); // changes every 3s

// set background

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
        
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;
body.style.background = `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url("momentum/img/${chosenImage}`;

let thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(element => {
  element.addEventListener('click', ShowPicture);
});

function ShowPicture(event) {
let showone = document.querySelector('#bigone');
  showone.src = event.target.currentSrc;
}

let counter = 0;
let picList = document.querySelectorAll(".pic");

function next() {
  if (counter === thumbs.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  document.querySelector('#bigone').setAttribute('src', picList[counter].getAttribute('src'));
}


function prev() {
  if (counter === 0) {
    counter = thumbs.length - 1;
  } else {
  counter--;
  }
document.querySelector('#bigone').setAttribute('src', picList[counter].getAttribute('src'));
}

let body = document.querySelector("body");
body.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    if (counter === 0) {
      counter = thumbs.length - 1;
    } else {
    counter--;
    }
    document.querySelector('#bigone').setAttribute('src', picList[counter].getAttribute('src'));
  }
});

body.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    if (counter === thumbs.length - 1) {
      counter = 0;
    } else {
    counter++;
    }
    document.querySelector('#bigone').setAttribute('src', picList[counter].getAttribute('src'));
  }
});
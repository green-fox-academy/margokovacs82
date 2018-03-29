
let thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(element => {
  element.addEventListener('click', ShowSomething);
});

function ShowSomething(event) {
let showone = document.querySelector('#bigone');
  showone.src = event.target.currentSrc;
}

let counter =0;
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
    counter = 7;
  } else {
  counter--;
  }
document.querySelector('#bigone').setAttribute('src', picList[counter].getAttribute('src'));
}

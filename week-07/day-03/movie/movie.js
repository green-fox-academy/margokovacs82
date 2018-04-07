'use strict';

//Changing the first dropdown should change the contents of the second one

const genre = document.querySelector('#genre');
const movies = document.querySelector('#movie');
const filmList = movies.querySelectorAll('option');
    
function filterToGenre(e) {
  for (let i = 0; i < filmList.length; i++) {
    if (filmList[i].className === e.target.value) {
      filmList[i].disabled = false;
    }
  }
};

genre.addEventListener('change', filterToGenre);


//display the selected movie

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('select[name="movie"]').onchange = changeEventHandler;
}, false);

var movie = document.querySelector('p');

function changeEventHandler(event) {
  if(!event.target.value) {
    alert('Please Select One');
  } else {
    let myChoice = document.createElement('p');
    myChoice.innerText = event.target.value;
    movie.appendChild(myChoice);
  }
}

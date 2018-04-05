//Changing the first dropdown should change the contents of the second one
var movies = document.getElementById("movie")

function addAllOptions(selectID, values)
  {
    var arrayLength = values.length;
    for (var i = 0; i < arrayLength; i++) {
        appendOptionLast(selectID,values[i]);
    }
  }
  
  //http://plnkr.co/edit/7xp5W6ViI9a1EvskFVZz?p=preview

function setOptions()
  {
    var genre = document.getElementById("genre");
    var selIndex = genre.selectedIndex;
    if(selIndex == 0)
      addAllOptions(movies.value);
    else if(selIndex == 1){
      addAllOptions('s2', ["Pasta Napoli","Pasta Primavera", "Pasta Vatican"]);
    }
    else{
      addAllOptions('s2', ["Hot Dog Chilie King","Hot Dog Silent Wiener"]);
    }
  }


//display the selected movie

document.addEventListener('DOMContentLoaded',function() {
  document.querySelector('select[name="movie"]').onchange=changeEventHandler;
},false);

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

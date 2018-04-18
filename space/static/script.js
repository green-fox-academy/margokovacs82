
//move the ship
const moveButton = document.querySelectorAll('.movehere');
const planets = new XMLHttpRequest();

moveButton.forEach(e => {
  addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
  
    planets.open('POST', `/movehere/${id}`);
    planets.setRequestHeader('Content-Type', 'application/json');
  
    planets.onreadystatechange = () => {
      if (planets.readyState === XMLHttpRequest.DONE) {
      };
    };
    planets.send();
  });
});

/*
const toshipButton = document.querySelectorAll('.toship');
//const planets = new XMLHttpRequest();

toshipButton.forEach(e => {
  addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
  
    planets.open('POST', `/movehere/${id}`);
    planets.setRequestHeader('Content-Type', 'application/json');
  
    planets.onreadystatechange = () => {
      if (planets.readyState === XMLHttpRequest.DONE) {
      };
    };
    planets.send();
  });
});

  

/*
const toshipButton = document.querySelector('.toship');

function movePeopleToShip() {
toshipButton.addEventListener('click', (e) => {
  e.preventDefault();

  const planets = new XMLHttpRequest();

  planets.open('POST', `/toship/${id}`);
  planets.setRequestHeader('Content-Type', 'application/json');
  let id = e.target.id;

  planets.onreadystatechange = () => {
    if (planets.readyState === XMLHttpRequest.DONE) {
     

     }
  }
  planets.send(JSON.stringify({
    planet: planet,
  }));
  });
  let peopleonship = JSON.parse(document.querySelectorAll('onship')[0].innerText);
  let population = JSON.parse(parseInt(document.querySelectorAll('population')[0].innerText));
console.log(population);
  population += peopleonship;
  peopleonship = 0;
}

movePeopleToShip();
/*



const toplanetButton = document.querySelector('.toplanet');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

*/
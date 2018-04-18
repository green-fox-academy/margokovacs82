
//move the ship
const moveButton = document.querySelectorAll('.movehere');

moveButton.forEach(e => {
  e.addEventListener('click', move);
});

function move(e) {
  const planets = new XMLHttpRequest();
  let id = e.target.getAttribute('data-id');
    console.log(id);
  
  planets.open('POST', `/movehere/${id}`);
  planets.setRequestHeader('Content-Type', 'application/json');
  
  planets.onreadystatechange = () => {
    if (planets.readyState === XMLHttpRequest.DONE) {    
    };
  };
    planets.send();
}


//move people to the ship
const toShipButton = document.querySelectorAll('.toship');

toShipButton.forEach(e => {
  e.addEventListener('click', toship);
});

function toship(e) {
  const toship = new XMLHttpRequest();
    let shipid = e.target.getAttribute('toship-id');
    console.log(shipid);
  
    toship.open('POST', `/toship/${shipid}`);
    toship.setRequestHeader('Content-Type', 'application/json');
  
    toship.onreadystatechange = () => {
      if (toship.readyState === XMLHttpRequest.DONE) {
      };
    };
    toship.send();
    }
    //if (shipid = )
    //parseInt(e.target) .innerText
    //e.target.parentNode.parentNode.querySelector('.item-score').textContent =  parseInt(e.target.parentNode.parentNode.querySelector('.item-score').textContent) + 1;
  

  /*
    //let peopleonship = 
    console.log(JSON.parse(document.querySelectorAll('onship')[0].innerText));
    let population = JSON.parse(parseInt(document.querySelectorAll('population')[0].innerText));
  console.log(population);
    population += peopleonship;
    peopleonship = 0;
  });

//move people to the planet
const toPlanetButton = document.querySelectorAll('.toplanet');
const toplanet = new XMLHttpRequest();

toPlanetButton.forEach(e => {
  addEventListener('click', (e) => {
    let id = e.target.getAttribute('toplanet-id');
  
    toplanet.open('POST', `/toplanet/${id}`);
    toplanet.setRequestHeader('Content-Type', 'application/json');
  
    toplanet.onreadystatechange = () => {
      if (toplanet.readyState === XMLHttpRequest.DONE) {
      };
    };
    toplanet.send();
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
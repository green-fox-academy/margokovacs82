let url = 'http://api.icndb.com/jokes/random'
let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener('click', () => {
fetch(url)
  .then( (response) => response.json())
  .then( (jokes) => {
    let joke = document.createElement('p');
    joke.textContent = jokes.value.joke;
    div.appendChild(joke);
  });
});
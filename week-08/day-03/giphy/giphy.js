
let giphy = new XMLHttpRequest();
giphy.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=6dysjT4dTARYfsSJnRGjG14e8eZO5skP&q=best&limit=16&offset=0&rating=G&lang=en', true);
giphy.send(null);
giphy.onreadystatechange = console.log;
let btn = document.querySelector("#info");
let div = document.querySelector('div');

giphy.onreadystatechange = (event) => {
  if(giphy.readyState === XMLHttpRequest.DONE) {
    
  function images() {
    for (let i = 0; i < 15; i++) {
      let imgSr = '';
      let img = document.createElement('img');
      imgSr = JSON.parse(giphy.response).data[i].images.original_still.url;
      img.setAttribute('src', imgSr);
      div.appendChild(img);

      img.addEventListener('click', function () {
        imgSr = JSON.parse(giphy.response).data[i].images.original.url;
        img.setAttribute('src', imgSr);
      }); 
    }
  }
  images();
  }
}
  


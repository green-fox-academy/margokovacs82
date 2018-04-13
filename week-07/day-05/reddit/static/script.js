//submit new

const submitButton = document.querySelector('#form-submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = document.querySelector('form');
  const reddit = new XMLHttpRequest();

  reddit.open('POST', '/posts');
  reddit.setRequestHeader('Content-Type', 'application/json');
  console.log(reddit);
  reddit.onreadystatechange = () => {
    if (reddit.readyState === XMLHttpRequest.DONE) {
      const item = document.createElement('div');
      item.className = 'dash-item';

      const itemTitle = document.createElement('div');
      itemTitle.className = 'item-title';
      itemTitle.innerText = formData.elements.title.value;
      item.appendChild(itemTitle);

      const itemUrl = document.createElement('div');
      itemUrl.className = 'item-url';
      itemUrl.innerText = formData.elements.url.value;
      item.appendChild(itemUrl);

      const itemOwner = document.createElement('div');
      itemOwner.className = 'item-owner';
      itemOwner.innerText = formData.elements.owner.value;
      item.appendChild(itemOwner);

      const dashboard = document.querySelector('#dashboard');
      dashboard.appendChild(item);

      formData.elements.title.value = '';
      formData.elements.url.value = '';
      formData.elements.owner.value = '';

    }
  };

    reddit.send(JSON.stringify({
      title: formData.elements.title.value,
      url: formData.elements.url.value,
      owner: formData.elements.owner.value,
    }));
});

//like

const like = document.querySelectorAll('.upvote-img');

like.forEach(e => {
  e.addEventListener('click', getLikes);
});

function getLikes(e) {
  const reddit = new XMLHttpRequest();
  let id = e.target.id;
  
  reddit.open('PATCH', `/posts/${id}/upvote`);
  reddit.setRequestHeader('Content-Type', 'application/json');

  reddit.onreadystatechange = () => {
    if (reddit.readyState === XMLHttpRequest.DONE) {
    };
  };
  reddit.send(JSON.stringify({
    id: id,
  }));
  e.target.parentNode.parentNode.querySelector('.item-score').textContent =  parseInt(e.target.parentNode.parentNode.querySelector('.item-score').textContent) + 1;
}


//unlike

let unlike = document.querySelectorAll('.downvote-img');

unlike.forEach(e => {
  e.addEventListener('click', getUnLikes);
});

function getUnLikes(e) {
  const reddit = new XMLHttpRequest();
  let id = e.target.id;
  
  reddit.open('PATCH', `/posts/${id}/downvote`);
  reddit.setRequestHeader('Content-Type', 'application/json');

  reddit.onreadystatechange = () => {
    if (reddit.readyState === XMLHttpRequest.DONE) {
    };
  };
  reddit.send(JSON.stringify({
    id: id,
  }));
  e.target.parentNode.parentNode.querySelector('.item-score').textContent =  parseInt(e.target.parentNode.parentNode.querySelector('.item-score').textContent) - 1;
}


//delete
/*
const deleteButton = document.querySelector('#delete-button');

deleteButton.addEventListener('click', (e) => {
  e.preventDefault();

  const dashboard = document.querySelector('#dashboard')
  const deletable = document.querySelector('.dash-item');
  const reddit = new XMLHttpRequest();

  reddit.open('DELETE', '/posts/:id');
  reddit.onreadystatechange = () => {
    if (reddit.readyState === XMLHttpRequest.DONE) {
      let id = req.params.id;
      if (id === deletable.elements.id) {
        dashboard.removeChild(deletable);
      }
    }
  };

  reddit.send(JSON.stringify({
    title: formData.elements.title.value,
    url: formData.elements.url.value,
    owner: formData.elements.owner.value,
  }));
});

*/
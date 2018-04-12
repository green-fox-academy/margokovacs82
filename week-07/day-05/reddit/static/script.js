
// reddit.open('GET', '/api/posts');
// reddit.setRequestHeader('Content-Type', 'application/json');
// reddit.onreadystatechange = () => {
//   if (reddit.readyState === XMLHttpRequest.DONE) {
//     let variant = JSON.parse(reddit.responseText);
//     //console.log(variant);
//     //const historyItem = document.createElement('div');
//     //historyItem.className = 'history-item';
//   }
// }

// reddit.send();
const submitButton = document.querySelector('#form-submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = document.querySelector('form');
  const reddit = new XMLHttpRequest();
  console.log(formData);

  reddit.open('POST', '/posts');
  reddit.setRequestHeader('Content-Type', 'application/json');
  console.log(reddit);
  reddit.onreadystatechange = () => {
  if (reddit.readyState === XMLHttpRequest.DONE) {
      const historyItem = document.createElement('div');
      historyItem.className = 'history-item';

      const itemTitle = document.createElement('div');
      itemTitle.className = 'item-title';
      itemTitle.innerText = formData.elements.title.value;
      historyItem.appendChild(itemTitle);

      const itemUrl = document.createElement('div');
      itemUrl.className = 'item-url';
      itemUrl.innerText = formData.elements.url.value;
      historyItem.appendChild(itemUrl);

      const itemOwner = document.createElement('div');
      itemOwner.className = 'item-owner';
      itemOwner.innerText = formData.elements.owner.value;
      historyItem.appendChild(itemOwner);

      const history = document.querySelector('#history');
      history.appendChild(historyItem);


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


//submit
const submitButton = document.getElementById('form-submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = document.querySelector('form');
  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/foods');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const item = document.createElement('div');
      item.className = 'dash-item';

      const itemTitle = document.createElement('div');
      itemTitle.className = 'item-title';
      itemTitle.innerText = formData.elements.title.value;
      item.appendChild(itemTitle);

      const itemAmount = document.createElement('div');
      itemAmount.className = 'item-amount';
      itemAmount.innerText = formData.elements.amount.value;
      item.appendChild(itemAmount);

      const calories = document.createElement('div');
      calories.className = 'calories';
      calories.innerText = formData.elements.calorie.value;
      item.appendChild(calories);

      const dashboard = document.querySelector('#dashboard');
      dashboard.appendChild(item);

      formData.elements.title.value='';
      formData.elements.amount.value = '';
      formData.elements.calorie.value = '';
    }
  };

    xhr.send(JSON.stringify({
      food_name: formData.elements.title.value,
      food_amount: formData.elements.amount.value,
      calorie: formData.elements.calorie.value,
    }));
});


//delete
const deleteButton = document.querySelectorAll('#delete-button');

deleteButton.forEach(e => {
  addEventListener('click', (e) => {

    const formData = document.querySelector('form');
    const foods = new XMLHttpRequest();
    
    let id = e.target.getAttribute('data-id');
  
    foods.open('DELETE', `/foods/${id}`);
    foods.setRequestHeader('Content-Type', 'application/json');
    foods.onreadystatechange = () => {
      if (foods.readyState === XMLHttpRequest.DONE) {
        const item = document.querySelector('.dash-item');
        
      const dashboard = document.querySelector('#dashboard');
      dashboard.removeChild(item);
    }
  };
    foods.send();
  });
});

  
  
 

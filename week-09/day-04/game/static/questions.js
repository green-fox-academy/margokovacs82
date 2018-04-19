//submit a question
const submitButton = document.getElementById('form-submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = document.querySelector('form');
  const quiz = new XMLHttpRequest();

  quiz.open('POST', '/questions');
  quiz.setRequestHeader('Content-Type', 'application/json');
  console.log(quiz);
  quiz.onreadystatechange = () => {
    if (quiz.readyState === XMLHttpRequest.DONE) {
      const item = document.createElement('div');
      item.className = 'dash-item';

      const itemTitle = document.createElement('div');
      itemTitle.className = 'item-title';
      itemTitle.innerText = formData.elements.title.value;
      item.appendChild(itemTitle);

      const ans1 = document.createElement('div');
      ans1.className = 'ans1';
      ans1.innerText = formData.elements.ans1.value;
      item.appendChild(ans1);

      const ans2 = document.createElement('div');
      ans2.className = 'ans2';
      ans2.innerText = formData.elements.ans2.value;
      item.appendChild(ans2);

      const ans3 = document.createElement('div');
      ans3.className = 'ans2';
      ans3.innerText = formData.elements.ans3.value;
      item.appendChild(ans3);

      const ans4 = document.createElement('div');
      ans4.className = 'ans2';
      ans4.innerText = formData.elements.ans4.value;
      item.appendChild(ans4);

      const dashboard = document.querySelector('#dashboard');
      dashboard.appendChild(item);

      formData.elements.title.value = '';
      formData.elements.ans1.value = '';
      formData.elements.ans2.value = '';
      formData.elements.ans3.value = '';
      formData.elements.ans4.value = '';
     
    }
  };

  quiz.send(JSON.stringify({
      question: formData.elements.title.value,
      answer_1: formData.elements.ans1.value,
      answer_2: formData.elements.ans2.value,
      answer_3: formData.elements.ans3.value,
      answer_4: formData.elements.ans4.value,

    }));
});

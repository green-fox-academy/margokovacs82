//click on an answer
const selectButton = document.querySelectorAll('.one');

selectButton.forEach(e => {
  e.addEventListener('click', log);
});

function log (e) {
 
  console.log(e.target.name);

    if (e.target.name === 1) {
      selectButton.className = "green";
      alert('Oh yea'); 
    } else {
      selectButton.className = "red";
    }
}


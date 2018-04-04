const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const rabbit = document.getElementById("rabbit");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const love = document.querySelector(".love");
const sign = document.querySelector(".sign");

//If you choose Dog or Cat, it enables the ''i love cats'' up button
const enable = () => {
  love.disabled = true;
  sign.disabled = true;
  if (cat.checked || dog.checked) {
    love.disabled = false;
  }
}
cat.addEventListener('change', enable);
dog.addEventListener('change', enable);
rabbit.addEventListener('change', enable);

//If you choose Yes for cat facts, it enables the sign up button
const enable2 = () => {
  love.disabled = true;
  sign.disabled = true;
  if (yes.checked) {
    sign.disabled = false;
  }
}
yes.addEventListener('change', enable2);
no.addEventListener('change', enable2);

//Clicking on enabled sign up button alerts:
const alertyou = () => {
  if (sign.disabled = true) {
  alert('Thank you, you\'ve successfully signed up for cat facts');
  }
}
sign.addEventListener('click', alertyou);

//If love button is enabled and you click it displays a message:
const alertyou2 = () => {
  if (love.disabled = true) {
    alert('Sigh, we still added you to the cat facts list');
  }
}
love.addEventListener('click', alertyou2);

//an alert for oscar
const goodbyfella = () => {
  if (rabbit.checked) {
    alert('You were the best bunny of everybunny');
  }
}
rabbit.addEventListener('change', goodbyfella);
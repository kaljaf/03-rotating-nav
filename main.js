const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav');
  circle.classList.add('rotate');
});

closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
  circle.classList.remove('rotate');
});

const yesBtn = document.getElementById('yes');
const gifBlock = document.getElementById('gif-block');
const closeGif = document.getElementById('closeGif');

yesBtn.addEventListener('click', () => {
  yesBtn.disabled = true;
  yesBtn.textContent = 'Отправлено';
  gifBlock.classList.remove('hidden');
});

closeGif.addEventListener('click', () => {
  gifBlock.classList.add('hidden');
});

gifBlock.querySelector('.overlay').addEventListener('click', () => {
  gifBlock.classList.add('hidden');
});

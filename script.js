const yesBtn = document.getElementById('yes');
const gifBlock = document.getElementById('gif-block');
const closeGif = document.getElementById('closeGif');
const gifImg = document.getElementById('gif-img');

yesBtn.addEventListener('click', () => {
  yesBtn.disabled = true;
  yesBtn.textContent = 'Отправлено';
  gifBlock.classList.remove('hidden');
});

closeGif.addEventListener('click', () => {
  gifBlock.classList.add('hidden');
});

// Закрытие по клику на фон (overlay)
document.querySelector('.overlay').addEventListener('click', () => {
  gifBlock.classList.add('hidden');
});

// Закрытие по клику на саму гифку
gifImg.addEventListener('click', () => {
  gifBlock.classList.add('hidden');
});

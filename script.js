document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yes');
  const gifBlock = document.getElementById('gif-block');
  const closeGifBtn = document.getElementById('closeGif');
  const overlay = document.querySelector('.overlay');
  
  if (yesBtn && gifBlock) {
    yesBtn.addEventListener('click', function() {
      yesBtn.disabled = true;
      yesBtn.textContent = 'Отправлено ✓';
      gifBlock.style.display = 'flex';
    });
  }
  
  if (closeGifBtn) {
    closeGifBtn.addEventListener('click', function() {
      gifBlock.style.display = 'none';
    });
  }
  
  if (overlay) {
    overlay.addEventListener('click', function() {
      gifBlock.style.display = 'none';
    });
  }
});

const cards = document.querySelectorAll('.card');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalPrice = document.getElementById('modal-price');

cards.forEach(card => {
  card.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImage.src = this.querySelector('img').src;
    modalTitle.textContent = this.querySelector('.number_title').textContent;
    modalText.textContent = this.querySelector('.modal-text').textContent;
    modalPrice.textContent = this.querySelector('.price').textContent + " / ночь";
  });
});

document.querySelector('.close').addEventListener('click', function() {
  modal.style.display = 'none';
});
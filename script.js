const navButtons = document.querySelectorAll('.nav__btn');
const cards = document.querySelectorAll('.card');

function switchCard(targetId) {
  cards.forEach(card => {
    card.classList.toggle('card--active', card.id === targetId);
  });
  navButtons.forEach(btn => {
    btn.classList.toggle('nav__btn--active', btn.dataset.target === targetId);
  });
}

// Клик по кнопкам в навигации
navButtons.forEach(btn => {
  btn.addEventListener('click', () => switchCard(btn.dataset.target));
});

// Клик по интерактивным зонам (шапка и цветок)
document.querySelectorAll('.card__header, .card__flower').forEach(zone => {
  zone.addEventListener('click', (e) => {
    const currentCard = e.currentTarget.closest('.card');
    const nextTargetId = currentCard.id === 'card-1' ? 'card-2' : 'card-1';
    switchCard(nextTargetId);
  });
});
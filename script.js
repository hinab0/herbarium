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
    
    // 1. Создаем список из всех ID, которые есть на странице (['card-1', 'card-2', 'card-3'])
    const cardIds = Array.from(cards).map(card => card.id);
    
    // 2. Узнаем, какой порядковый номер у текущей карточки
    const currentIndex = cardIds.indexOf(currentCard.id);
    
    // 3. Вычисляем следующую карточку
    let nextIndex = currentIndex + 1;
    
    // Если мы дошли до последней карточки, возвращаемся к самой первой (к нулю)
    if (nextIndex >= cardIds.length) {
      nextIndex = 0;
    }
    
    // Получаем ID следующей карточки и переключаем
    const nextTargetId = cardIds[nextIndex];
    switchCard(nextTargetId);
  });
});
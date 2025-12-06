// Smooth horizontal scroll for carousels
const buttons = document.querySelectorAll('.scroll-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetSelector = btn.getAttribute('data-target');
    const container = document.querySelector(targetSelector);
    if (!container) return;

    const amount = container.clientWidth * 0.9;
    const direction = btn.classList.contains('scroll-btn--left') ? -1 : 1;

    container.scrollBy({
      left: amount * direction,
      behavior: 'smooth',
    });
  });
});

// Footer year
const yearEl = document.querySelector('[data-year]');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

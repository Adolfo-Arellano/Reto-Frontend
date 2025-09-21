document.querySelectorAll('.card').forEach(card => {
  const img = card.querySelector('.product-img') || card.querySelector('.card-media img');
  if (!img) return;

  card.addEventListener('click', (e) => {
    const btn = e.target.closest('.swatch');
    if (!btn || !btn.dataset.img) return;

    img.src = btn.dataset.img;
    if (img.dataset.alt && btn.dataset.label) {
      img.alt = `${img.dataset.alt} - ${btn.dataset.label}`;
    }

    card.querySelectorAll('.swatch').forEach(b => {
      const active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  });
});

const modal = document.getElementById('modal');
const slider = modal.querySelector('.modal-slider');
let images = [];
let currentIdx = 0;

// Open modal and populate
document.querySelectorAll('.machine-card').forEach(card => {
  card.addEventListener('click', () => {
    // load details
    document.getElementById('modal-title').innerText = card.dataset.title;
    document.getElementById('modal-price').innerText = card.dataset.price;
    document.getElementById('modal-area').innerText = card.dataset.area;
    document.getElementById('modal-call').href = `tel:${card.dataset.contact}`;
    document.getElementById('modal-chat').href = `https://wa.me/${card.dataset.contact.replace(/[^0-9]/g,'')}`;

    // build slides
    slider.innerHTML = `
      ${card.dataset.images.split(',').map((img, i) => 
        `<img src="images/${img.trim()}" class="slide${i===0?' active':''}">`
      ).join('')}
      <button class="slider-btn prev" onclick="changeSlide(event,-1)">‹</button>
      <button class="slider-btn next" onclick="changeSlide(event,1)">›</button>
    `;
    images = slider.querySelectorAll('img');
    currentIdx = 0;

    modal.classList.add('open');
  });
});

// Close modal
function closeModal() {
  modal.classList.remove('open');
}

// Slider nav
function changeSlide(e, dir) {
  e.stopPropagation();
  images[currentIdx].classList.remove('active');
  currentIdx = (currentIdx + dir + images.length) % images.length;
  images[currentIdx].classList.add('active');
}

// Close on outside click
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

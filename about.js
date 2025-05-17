function revealContent(block) {
  const text = block.querySelector('.about-text');
  if (text.classList.contains('hidden')) {
    text.classList.remove('hidden');
    setTimeout(() => text.classList.add('show'), 10);
  }
}

function fadeOut(img) {
  img.classList.add('fade-out');
}

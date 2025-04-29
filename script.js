window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 150);
    });
  });
  // JavaScript for Add to Cart
document.addEventListener('DOMContentLoaded', function() {
  const cartCount = document.querySelector('.cart-count');
  const buyButtons = document.querySelectorAll('.btn');

  // Load previous cart count from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  function updateCartCount() {
    cartCount.textContent = cartItems.length;
    cartCount.style.display = cartItems.length > 0 ? 'inline-block' : 'none';
  }

  buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const productCard = e.target.closest('.product-card, .product');
      const productName = productCard.querySelector('h2').innerText;

      // Add the clicked product
      cartItems.push(productName);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      
      updateCartCount();
    });
  });

  updateCartCount(); // Update count on page load
});

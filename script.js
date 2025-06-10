
// script.js

// Add item to localStorage cart
function addToCart(title, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ title, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${title} has been added to your cart.`);
}

// Display cart items
function displayCartItems() {
  const cartSection = document.getElementById('cart-items');
  if (!cartSection) return;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    cartSection.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let total = 0;
  cartSection.innerHTML = '<h2>Items in Your Cart:</h2><ul>';
  cart.forEach((item, index) => {
    cartSection.innerHTML += `<li>${index + 1}. ${item.title} - $${item.price}</li>`;
    total += parseFloat(item.price);
  });
  cartSection.innerHTML += `</ul><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
}

// Optional: Clear cart
function clearCart() {
  localStorage.removeItem('cart');
  displayCartItems();
}

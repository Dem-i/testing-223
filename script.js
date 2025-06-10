
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
    total += parseFloat(item.price);
    cartSection.innerHTML += `
      <li>
        ${item.title} - $${item.price.toFixed(2)} 
        <button onclick="removeFromCart(${index})" style="margin-left:10px;color:red;">✖</button>
      </li>`;
  });
  cartSection.innerHTML += `</ul><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}


// Optional: Clear cart
function clearCart() {
  localStorage.removeItem('cart');
  displayCartItems();
}

function completePurchase() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert("Your cart is empty. Add items before completing your purchase.");
    return;
  }

  const confirmation = confirm("Have you sent payment via CashApp or PayPal?");
  if (confirmation) {
    alert("Thank you for your purchase! Your order has been submitted.");
    clearCart();
  } else {
    alert("Please complete your payment before submitting your order.");
  }
}


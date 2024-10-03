let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const item = event.target.parentElement;
  const itemName = item.getAttribute('data-name');
  const itemPrice = item.getAttribute('data-price');

  cart.push({ name: itemName, price: itemPrice });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}

document.getElementById('cartButton').addEventListener('click', showCart);

function showCart() {
  const cartModal = document.getElementById('cartModal');
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price}`;
    cartItems.appendChild(li);
  });

  cartModal.classList.remove('hidden');
}

document.getElementById('checkoutButton').addEventListener('click', proceedToCheckout);
document.getElementById('closeCart').addEventListener('click', () => {
  document.getElementById('cartModal').classList.add('hidden');
});

function proceedToCheckout() {
  const checkoutPage = document.getElementById('checkoutPage');
  const checkoutItems = document.getElementById('checkoutItems');
  checkoutItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price}`;
    checkoutItems.appendChild(li);
  });

  document.getElementById('cartModal').classList.add('hidden');
  checkoutPage.classList.remove('hidden');
}

document.getElementById('confirmPayment').addEventListener('click', finalizePurchase);

function finalizePurchase() {
  document.getElementById('checkoutPage').classList.add('hidden');
  document.getElementById('purchaseAnimation').classList.remove('hidden');
  
  setTimeout(() => {
    document.getElementById('purchaseAnimation').classList.add('hidden');
    cart = [];
    updateCartCount();
  }, 3000); 
}


document.getElementById('checkoutButton').addEventListener('click', proceedToCheckout);

function proceedToCheckout() {
 
  sessionStorage.setItem('cart', JSON.stringify(cart));

  
  window.location.href = 'pag.html';
}


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const item = event.target.parentElement;
  const itemName = item.getAttribute('data-name');
  const itemPrice = item.getAttribute('data-price');
  const itemImage = item.querySelector('img').src; 

  cart.push({ name: itemName, price: itemPrice, image: itemImage });
  updateCartCount();

  
}


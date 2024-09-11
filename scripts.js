let cart = [];
let totalPrice = 0;


function toggleCart() {
    const cartSection = document.getElementById('cart');
    cartSection.classList.toggle('hidden');
}


function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((product, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${product.item} - R$ ${product.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
    });
    document.getElementById('total-price').textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    document.getElementById('cart-count').textContent = cart.length;
}


function proceedToPayment() {
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('payment').classList.remove('hidden');
    document.getElementById('payment-total').textContent = totalPrice.toFixed(2);
}


function makePayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    alert(`Pagamento de R$ ${totalPrice.toFixed(2)} realizado com sucesso via ${paymentMethod.toUpperCase()}!`);
    resetCart();
}


function resetCart() {
    cart = [];
    totalPrice = 0;
    document.getElementById('cart-count').textContent = 0;
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('total-price').textContent = `Total: R$ 0,00`;
    document.getElementById('payment').classList.add('hidden');
}

const cart = JSON.parse(sessionStorage.getItem('cart')) || [];


function displayCheckoutItems() {
  const checkoutItems = document.getElementById('checkoutItems');
  checkoutItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price}`;
    checkoutItems.appendChild(li);
  });
}

document.getElementById('confirmPayment').addEventListener('click', finalizePurchase);


function togglePaymentFields() {
  const paymentMethod = document.getElementById('paymentMethod').value;
  const cardFields = document.getElementById('cardFields');

  if (paymentMethod === 'credit' || paymentMethod === 'debit') {
    cardFields.classList.remove('hidden');
  } else {
    cardFields.classList.add('hidden');
  }
}


function finalizePurchase() {
  const paymentMethod = document.getElementById('paymentMethod').value;

  if ((paymentMethod === 'credit' || paymentMethod === 'debit') && !validateCardFields()) {
    alert('Por favor, preencha corretamente os dados do cartão.');
    return;
  }

 
  alert('Compra finalizada com sucesso!');
  sessionStorage.removeItem('cart');
  window.location.href = 'card.html'; 
}


function validateCardFields() {
  const cardNumber = document.getElementById('cardNumber').value;
  const cardExpiry = document.getElementById('cardExpiry').value;
  const cardCVC = document.getElementById('cardCVC').value;

  return cardNumber && cardExpiry && cardCVC;
}


window.onload = displayCheckoutItems;

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}



function displayCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = '';

    let total = 0;

    checkoutItems.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    checkoutItems.style.padding = '20px';
    checkoutItems.style.borderRadius = '10px';
    checkoutItems.style.border = '2px solid #ffffff';
    checkoutItems.style.maxWidth = '600px';
    checkoutItems.style.margin = '20px auto';
  
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.marginBottom = '10px';
  
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.style.width = '100px'; 
      img.style.height = '100px'; 
      img.style.marginRight = '15px';
      img.style.borderRadius = '10px'; 
      img.style.border = '3px solid #111010'; 
  
      const text = document.createElement('span');
      text.textContent = `${item.name} - R$ ${item.price}`;
      text.style.backgroundColor = '#000000'; 
      text.style.color = 'white';
      text.style.padding = '5px 10px'; 
      text.style.borderRadius = '8px'; 
      text.style.marginLeft = '10px'; 
      text.style.fontWeight = 'bold';
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.style.marginLeft = '15px';
      removeButton.style.padding = '5px';
      removeButton.style.borderRadius = '5px';
      removeButton.style.backgroundColor = '#e74c3c'; 
      removeButton.style.color = 'white';
      removeButton.style.border = 'none';
      removeButton.style.cursor = 'pointer';
  
      
      removeButton.addEventListener('click', () => {
        removeItemFromCart(index);
      });
  
      li.appendChild(img);
      li.appendChild(text);
      li.appendChild(removeButton);
      checkoutItems.appendChild(li);

      total += parseFloat(item.price);
    });
  
    // Exibe o valor total
    displayTotal(total);
  }
  

  function displayTotal(total) {
    const totalContainer = document.getElementById('totalAmount');
    totalContainer.textContent = ` R$ ${total.toFixed(2)}`; 
  }
    
  

  function removeItemFromCart(index) {
    cart.splice(index, 1); 
    sessionStorage.setItem('cart', JSON.stringify(cart)); 
    displayCheckoutItems();
    updateCartCount(); 
  }
  
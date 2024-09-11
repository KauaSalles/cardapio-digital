function submitPayment(event) {
    event.preventDefault();

    const paymentStatus = document.getElementById('payment-status');
    paymentStatus.classList.remove('hidden');
    paymentStatus.textContent = "Processando pagamento...";

    setTimeout(() => {
        paymentStatus.textContent = "Pagamento realizado com sucesso!";
    }, 2000);

    document.getElementById('payment-form').reset();
}

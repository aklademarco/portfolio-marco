document.getElementById('quantity').addEventListener('input', () => {
    const qty = parseInt(document.getElementById('quantity').value) || 1;
    const pricePerUnit = 15;
    const total = qty * pricePerUnit;
    document.getElementById('total-price').value = `₵${total.toFixed(2)}`;
  });
  
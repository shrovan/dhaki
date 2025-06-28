document.getElementById("order-button").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  const productDetails = cart.map(item => `${item.name} x${item.quantity}`).join(", ");
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const address = encodeURIComponent(document.getElementById("address").value);

  // ✅ Correct entry IDs from your Google Form:
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfoM0rr3xzcpDg2O17CWhK58-25Df-2l1Dv3k6bzYnnc9BptA/viewform?usp=pp_url`
    + `&entry.1755887486=${encodeURIComponent(productDetails)}`
    + `&entry.1544041918=${totalPrice}`
    + `&entry.516469373=${address}`;

  window.open(formUrl, '_blank');
});

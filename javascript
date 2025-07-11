document.getElementById("order-button").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const userName = encodeURIComponent(document.getElementById("user-name").value.trim());
  const userPhone = encodeURIComponent(document.getElementById("user-phone").value.trim());
  const address = encodeURIComponent(document.getElementById("address").value.trim());
  const deliveryOption = encodeURIComponent(document.getElementById("delivery-option").value);

  if (!userName || !userPhone || !address) {
    alert("Please fill in all fields: Name, Phone, and Address.");
    return;
  }

  const productDetails = cart.map(item => `${item.name} x${item.quantity}`).join(", ");
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const confirmOrder = confirm(
    `🧾 Confirm Your Order:\n\n👕 Items: ${productDetails}\n💰 Total: ₹${totalPrice}\n📦 Delivery: ${decodeURIComponent(deliveryOption)}\n\n🧑 Name: ${decodeURIComponent(userName)}\n📱 Phone: ${decodeURIComponent(userPhone)}\n🏠 Address: ${decodeURIComponent(address)}`
  );

  if (!confirmOrder) return;

  // 📝 Dummy Google Form entry IDs (replace with real ones)
  const formUrl = `https://docs.google.com/forms/d/e/your-form-id/viewform?usp=pp_url`
    + `&entry.1111111111=${userName}`              // Name
    + `&entry.2222222222=${userPhone}`            // Phone
    + `&entry.3333333333=${address}`              // Address
    + `&entry.4444444444=${productDetails}`       // Product details
    + `&entry.5555555555=${totalPrice}`           // Total price
    + `&entry.6666666666=${deliveryOption}`;      // Delivery option

  window.open(formUrl, '_blank');
});

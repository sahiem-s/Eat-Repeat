// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const totalAmount = urlParams.get('totalAmount');
const cartItems = urlParams.get('cartItems');

const form = document.getElementById('checkout-form');
const orderDetailsDiv = document.getElementById('order-details');
const orderNameElement = document.getElementById('order-name');
const orderAddressElement = document.getElementById('order-address');
const orderItemsElement = document.getElementById('order-items');
const orderTotalElement = document.getElementById('order-total');
const whatsappLink = document.getElementById('whatsapp-link');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    // Show the order details
    orderNameElement.textContent = name;
    orderAddressElement.textContent = address;
    orderItemsElement.textContent = cartItems;
    orderTotalElement.textContent = totalAmount;

    // Prepare WhatsApp message with order details
    const whatsappMessage = `*Order Details*\nName: ${name}\nAddress: ${address}\nItems: ${cartItems}\nTotal Amount: ₹${totalAmount}`;
    whatsappLink.href = `https://919916201862?text=${encodeURIComponent(whatsappMessage)}`;

    // Display the order details section
    orderDetailsDiv.style.display = 'block';
});

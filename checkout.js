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

// Automatically populate order details based on URL params (if available)
if (cartItems && totalAmount) {
    orderItemsElement.textContent = cartItems;
    orderTotalElement.textContent = `₹${totalAmount}`; // Add currency symbol for clarity
} else {
    console.warn("Cart items or total amount missing from URL parameters.");
}

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();

    // Validate form inputs
    if (!name || !address) {
        alert('Please fill in both name and address fields.');
        return;
    }

    // Show the order details
    orderNameElement.textContent = name;
    orderAddressElement.textContent = address;

    // Prepare WhatsApp message with order details
    const whatsappMessage = `*Order Details*\nName: ${name}\nAddress: ${address}\nItems: ${cartItems}\nTotal Amount: ₹${totalAmount}`;
    whatsappLink.href = `https://wa.me/919916201862?text=${encodeURIComponent(whatsappMessage)}`;

    // Display the order details section
    orderDetailsDiv.style.display = 'block';

    // Scroll to the order details section for better user experience
    orderDetailsDiv.scrollIntoView({ behavior: 'smooth' });
});

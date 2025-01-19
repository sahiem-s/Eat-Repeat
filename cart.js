function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const totalAmountDiv = document.getElementById('total-amount');
    const checkoutButton = document.getElementById('checkout-button');
    cartItemsDiv.innerHTML = '';
    let totalAmount = 0;

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <label for="quantity">Quantity: </label>
                <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id})">
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
        totalAmount += item.price * item.quantity;
    });

    totalAmountDiv.textContent = `Total Amount: ₹${totalAmount}`;

    // Check if total amount is less than ₹300
    if (totalAmount < 300) {
        // Disable the checkout button and show a message
        checkoutButton.disabled = true;
        checkoutButton.style.backgroundColor = '#f44336'; // Red color for the button
        checkoutButton.textContent = "Minimum order ₹300 required";
    } else {
        // Enable the checkout button if total amount is ₹300 or more
        checkoutButton.disabled = false;
        checkoutButton.style.backgroundColor = '#4CAF50'; // Green color for the button
        checkoutButton.textContent = "Proceed to Checkout";
    }
}

function updateQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(p => p.id === productId);
    const quantity = document.getElementById(`quantity-${productId}`).value;

    if (quantity < 1) {
        product.quantity = 1;
    } else {
        product.quantity = quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalAmount = document.getElementById('total-amount').textContent.split('₹')[1];
    const cartItems = cart.map(item => `${item.name} x ${item.quantity}`).join(', ');

    // Ensure the cart total is greater than or equal to ₹300
    if (parseFloat(totalAmount) >= 300) {
        if (cart.length > 0) {
            window.location.href = `checkout.html?totalAmount=${totalAmount}&cartItems=${encodeURIComponent(cartItems)}`;
        } else {
            alert('Your cart is empty');
        }
    } else {
        alert('Minimum order amount is ₹300');
    }
}

renderCart();

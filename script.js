const products = [
    { id: 1, name: 'Plain rice', price: 50, image: 'plain rice.jpg' },
    { id: 2, name: 'Veg friedrice', price: 90, image: 'veg fried rice.jpg' },
    { id: 3, name: 'Chicken friedrice', price: 120, image: 'chicken fried rice .jpg' },
    { id: 4, name: 'Veg noodles', price: 90, image: 'Veg noodles.jpg' },
    { id: 5, name: 'Chicken noodles', price: 120, image: 'chicken noodles.jpg' },
    { id: 6, name: 'Chicken mandi', price: 700, image: 'chicken mandi.jpg' },
    { id: 7, name: 'Masala dosa', price: 50, image: 'masala dosa.jpg' },
    { id: 8, name: 'Chicken kabab', price: 80, image: 'chciken kabab.jpg' },
    { id: 9, name: 'Chicken chilli', price: 100, image: 'chicken chilli.jpg' },
    { id: 10, name: 'Egg friedrice', price: 80, image: 'egg fried rice.jpg' },
    { id: 11, name: 'Chicken roll', price: 30, image: 'chicken roll.jpg'},
    { id: 12, name: 'Chicken sandwich', price: 30, image: 'chicken sandwich.jpg' },
    { id: 13, name: 'Chicken shawarma', price: 50, image: 'chicken shawarma.jpg' },
    { id: 14, name: 'Chicken soup', price: 80, image: 'chicken soup.jpg' },
    { id: 15, name: 'Egg soup', price: 40, image: 'egg soup.jpg' },
    { id: 16, name: 'Idli', price: 40, image: 'idli.jpg' },
    { id: 17, name: 'Macaroni', price: 70, image: 'macaroni.jpg' },
    { id: 18, name: 'Veg Biryani', price: 90, image: 'veg biryani.jpg' },
    { id: 19, name: 'Chicken Biryani', price: 180, image: 'chicken biryani.jpg' },
    { id: 20, name: 'Medu vada', price: 35, image: 'medu vada.jpg' },
    { id: 21, name: 'Pasta', price: 70, image: 'Pasta.png' },
    { id: 22, name: 'pav bhaji', price: 70, image: 'pav bhaji.jpg' },
    { id: 23, name: 'Plain dosa', price: 30, image: 'plain dosa.jpg' },
    { id: 24, name: 'poha', price: 40, image: 'poha.jpg' },
    { id: 25, name: 'Pulav', price: 50, image: 'pulav.jpg' },
    { id: 26, name: 'Parota', price: 15, image: 'roomali roti.jpg' },
    { id: 27, name: 'Sheera', price: 35, image: 'sheera.jpg' },
    { id: 28, name: 'Sweet corn', price: 30, image: 'sweetcorn.jpg' },
    { id: 29, name: 'Chicken tandoori', price: 140, image: 'tandoori chicken.jpg' },
    { id: 30, name: 'Upma', price: 40, image: 'upma.jpg' },
    { id: 31, name: 'Vada pav', price: 25, image: 'vada pav.jpg' },
    { id: 32, name: 'Veg burger', price: 50, image: 'veg burger.jpg' },
    { id: 33, name: 'Veg roll', price: 20, image: 'veg roll.jpg' },
    { id: 34, name: 'Veg soup', price: 40, image: 'veg soup.jpg' },
    { id: 35, name: 'Chole bhature', price: 90, image: 'chole bhature.jpg' },
    { id: 36, name: 'Mango juice', price: 70, image: 'mango milkshake.jpg' },
    { id: 37, name: 'Kitkat milkshake', price: 80, image: 'kitkat milkshake.jpg' },
    { id: 38, name: 'dryfruit juice', price: 80, image: 'dryfruit juice 1.jpg' },
    { id: 39, name: 'Diary milk milkshake', price: 70, image: 'diary milk milkshake.jpg' },
    { id: 40, name: 'Chocolate milkshake', price: 70, image: 'chocolate milkshake.jpg' },
    { id: 41, name: 'Chikoo', price: 60, image: 'chicko milkshake.jpg' },
    { id: 42, name: 'Oreo milkshake', price: 80, image: 'oreo milkshake.jpg' }
];


function renderProducts(filteredProducts = products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    const existingProductIndex = cart.findIndex(p => p.id === productId);

    if (existingProductIndex === -1) {
        product.quantity = 1;
        cart.push(product);
    } else {
        cart[existingProductIndex].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}

function searchProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    renderProducts(filteredProducts);
}

function goToCart() {
    window.location.href = 'cart.html'; 
}

renderProducts();

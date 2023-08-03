document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'shoes', price: 10.99 },
        { id: 2, name: 'bags', price: 19.99 },
        { id: 3, name: 'clothes', price: 7.49 }
    ];

    const cart = [];

    const productsSection = document.querySelector('.products');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Display products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });

    // Add event listener to 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add to cart function
    function addToCart(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }

    // Update cart display
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart.length = 0;
        updateCart();
    });
});

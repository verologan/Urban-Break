// ==================== DATOS DE PRODUCTOS ====================
const products = [
    { id: 1, name: 'Espresso', category: 'cafe', price: 3.50, icon: '☕', description: 'Intenso y vibrante' },
    { id: 2, name: 'Cappuccino', category: 'cafe', price: 4.50, icon: '☕', description: 'Cremoso y suave' },
    { id: 3, name: 'Latte', category: 'cafe', price: 4.00, icon: '☕', description: 'Leche vaporizada' },
    { id: 4, name: 'Macchiato', category: 'cafe', price: 3.75, icon: '☕', description: 'Café con espuma' },
    { id: 5, name: 'Croissant', category: 'pastry', price: 3.00, icon: '🥐', description: 'Hojaldre crujiente' },
    { id: 6, name: 'Brownie', category: 'pastry', price: 4.00, icon: '🍰', description: 'Chocolate intenso' },
    { id: 7, name: 'Cheesecake', category: 'pastry', price: 5.50, icon: '🧁', description: 'Clásico neoyorquino' },
    { id: 8, name: 'Donut', category: 'pastry', price: 2.50, icon: '🍩', description: 'Glaseado y suave' },
    { id: 9, name: 'Smoothie Fresa', category: 'smoothie', price: 5.00, icon: '🥤', description: 'Refrescante' },
    { id: 10, name: 'Cold Brew', category: 'smoothie', price: 4.50, icon: '🥤', description: 'Café frío suave' },
    { id: 11, name: 'Jugo Naranja', category: 'smoothie', price: 3.50, icon: '🧃', description: 'Natural y fresco' },
    { id: 12, name: 'Té Helado', category: 'smoothie', price: 3.00, icon: '🍵', description: 'Relajante' }
];

let cart = [];

// ==================== DARK MODE ====================
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isNowDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isNowDarkMode);
    darkModeBtn.textContent = isNowDarkMode ? '☀️' : '🌙';
});

// ==================== MENÚ MOBILE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== CARGAR PRODUCTOS ====================
function renderProducts(productsToDisplay = products) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-quantity">
                <button class="qty-decrease" data-id="${product.id}">−</button>
                <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                <button class="qty-increase" data-id="${product.id}">+</button>
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
        `;
        container.appendChild(productCard);
    });

    // Agregar event listeners a los botones
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    document.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
    });
}

// ==================== CANTIDAD DE PRODUCTOS ====================
function decreaseQuantity(e) {
    const input = e.target.parentElement.querySelector('.quantity-input');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function increaseQuantity(e) {
    const input = e.target.parentElement.querySelector('.quantity-input');
    input.value = parseInt(input.value) + 1;
}

// ==================== AGREGAR AL CARRITO ====================
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const quantityInput = document.querySelector(`.quantity-input[data-id="${productId}"]`);
    const quantity = parseInt(quantityInput.value);
    
    const product = products.find(p => p.id === productId);
    
    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    quantityInput.value = 1;
    updateCart();
    showNotification(`✅ "${product.name}" agregado al carrito!`);
}

// ==================== ACTUALIZAR CARRITO ====================
function updateCart() {
    const cartContainer = document.getElementById('cartContainer');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <p>Tu carrito está vacío 😢</p>
                <p>¡Agrega algunos productos!</p>
            </div>
        `;
        cartSummary.style.display = 'none';
        return;
    }
    
    let cartHTML = '<div class="cart-items">';
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        cartHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <div class="item-name">${item.icon} ${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <div class="item-quantity">
                    <button class="cart-qty-decrease" data-id="${item.id}">−</button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-increase" data-id="${item.id}">+</button>
                </div>
                <div class="item-total">$${itemTotal}</div>
                <button class="remove-item" data-id="${item.id}">✕</button>
            </div>
        `;
    });
    cartHTML += '</div>';
    
    cartContainer.innerHTML = cartHTML;
    
    // Event listeners para carrito
    document.querySelectorAll('.cart-qty-decrease').forEach(btn => {
        btn.addEventListener('click', decreaseCartQuantity);
    });
    
    document.querySelectorAll('.cart-qty-increase').forEach(btn => {
        btn.addEventListener('click', increaseCartQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeFromCart);
    });
    
    // Actualizar resumen
    updateSummary();
    cartSummary.style.display = 'block';
    
    // Guardar en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ==================== MODIFICAR CANTIDAD EN CARRITO ====================
function decreaseCartQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = cart.find(p => p.id === itemId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cart = cart.filter(p => p.id !== itemId);
        }
        updateCart();
    }
}

function increaseCartQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = cart.find(p => p.id === itemId);
    
    if (item) {
        item.quantity++;
        updateCart();
    }
}

// ==================== ELIMINAR DEL CARRITO ====================
function removeFromCart(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = cart.find(p => p.id === itemId);
    
    if (item) {
        showNotification(`❌ "${item.name}" eliminado del carrito`);
        cart = cart.filter(p => p.id !== itemId);
        updateCart();
    }
}

// ==================== ACTUALIZAR RESUMEN ====================
function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// ==================== VACIAR CARRITO ====================
document.getElementById('clearCartBtn').addEventListener('click', () => {
    if (cart.length > 0) {
        if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
            cart = [];
            updateCart();
            showNotification('🗑️ Carrito vaciado');
        }
    } else {
        showNotification('ℹ️ El carrito ya está vacío');
    }
});

// ==================== CHECKOUT ====================
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length > 0) {
        const total = document.getElementById('total').textContent;
        alert(`¡Gracias por tu compra!\n\nTotal: ${total}\n\nTu pedido será entregado pronto. ☕`);
        cart = [];
        updateCart();
        showNotification('✅ ¡Compra realizada exitosamente!');
    }
});

// ==================== BÚSQUEDA ====================
document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    const filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) || 
                          product.description.toLowerCase().includes(searchTerm);
        const matchCategory = category === 'all' || product.category === category;
        return matchSearch && matchCategory;
    });
    
    renderProducts(filtered);
}

// ==================== NOTIFICACIONES ====================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== CARGAR DEL LOCALSTORAGE ====================
window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    renderProducts();
});

console.log('✅ Carrito de compra Cafegerua cargado correctamente');
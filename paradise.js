// ===== Paradise Nursery - Plant Data & Cart Logic =====

// ----- Plant Catalog -----
const plantCatalog = {
    aromatic: {
        title: "Aromatic Plants",
        description: "Fill your home with natural fragrance",
        plants: [
            {
                id: "a1",
                name: "Lavender",
                price: 15,
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=600&q=80",
                description: "Beautiful purple blooms with a calming, soothing aroma perfect for relaxation."
            },
            {
                id: "a2",
                name: "Rosemary",
                price: 12,
                image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80",
                description: "A fragrant herb with needle-like leaves, great for cooking and aromatherapy."
            },
            {
                id: "a3",
                name: "Mint",
                price: 10,
                image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
                description: "Refreshing and easy to grow, perfect for teas, cocktails, and culinary uses."
            },
            {
                id: "a4",
                name: "Basil",
                price: 8,
                image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80",
                description: "An aromatic herb with rich green leaves, essential for Italian and Thai cuisine."
            },
            {
                id: "a5",
                name: "Thyme",
                price: 9,
                image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
                description: "A versatile herb with tiny leaves and a warm, earthy flavor and scent."
            },
            {
                id: "a6",
                name: "Lemongrass",
                price: 14,
                image: "https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?auto=format&fit=crop&w=600&q=80",
                description: "Tall, citrusy grass used in Asian cooking and for its mosquito-repellent properties."
            }
        ]
    },
    medicinal: {
        title: "Medicinal Plants",
        description: "Nature's pharmacy for your wellness",
        plants: [
            {
                id: "m1",
                name: "Aloe Vera",
                price: 12,
                image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
                description: "A succulent with gel-filled leaves known for soothing burns and skin care."
            },
            {
                id: "m2",
                name: "Echinacea",
                price: 16,
                image: "https://images.unsplash.com/photo-1598187079731-044114b92eb5?auto=format&fit=crop&w=600&q=80",
                description: "A flowering plant used to boost the immune system and fight colds."
            },
            {
                id: "m3",
                name: "Chamomile",
                price: 11,
                image: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=600&q=80",
                description: "Daisy-like flowers brewed into a calming tea to promote sleep and relaxation."
            },
            {
                id: "m4",
                name: "Turmeric",
                price: 13,
                image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80",
                description: "A golden-hued root with powerful anti-inflammatory and antioxidant properties."
            },
            {
                id: "m5",
                name: "Ginger",
                price: 10,
                image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
                description: "A spicy root used to aid digestion, reduce nausea, and fight inflammation."
            },
            {
                id: "m6",
                name: "Ashwagandha",
                price: 18,
                image: "https://images.unsplash.com/photo-1599009434802-ca1dd09895e4?auto=format&fit=crop&w=600&q=80",
                description: "An adaptogenic herb used for centuries to reduce stress and boost vitality."
            }
        ]
    },
    airPurifying: {
        title: "Air Purifying Plants",
        description: "Breathe cleaner, fresher air at home",
        plants: [
            {
                id: "p1",
                name: "Snake Plant",
                price: 15,
                image: "https://images.unsplash.com/photo-1593482892580-e32e47e8a83b?auto=format&fit=crop&w=600&q=80",
                description: "A resilient plant with tall, sword-like leaves that filters indoor air toxins."
            },
            {
                id: "p2",
                name: "Spider Plant",
                price: 12,
                image: "https://images.unsplash.com/photo-1572688484438-313a56e6dc34?auto=format&fit=crop&w=600&q=80",
                description: "Easy to care for with arching green and white striped leaves, great for beginners."
            },
            {
                id: "p3",
                name: "Peace Lily",
                price: 18,
                image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80",
                description: "Elegant white blooms that purify air and thrive in low-light conditions."
            },
            {
                id: "p4",
                name: "Pothos",
                price: 10,
                image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
                description: "A trailing vine with heart-shaped leaves, virtually indestructible and air-cleaning."
            },
            {
                id: "p5",
                name: "Rubber Plant",
                price: 20,
                image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
                description: "Glossy, dark green leaves that add a bold tropical look while cleaning your air."
            },
            {
                id: "p6",
                name: "Boston Fern",
                price: 14,
                image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
                description: "Lush, feathery fronds that act as a natural humidifier and air purifier."
            }
        ]
    }
};

// ----- Cart State (backed by localStorage) -----
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('paradiseCart')) || {};
    } catch {
        return {};
    }
}

function saveCart(cart) {
    localStorage.setItem('paradiseCart', JSON.stringify(cart));
}

function getCartCount() {
    const cart = getCart();
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
    const cart = getCart();
    return Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function addToCart(plantId) {
    const plant = findPlantById(plantId);
    if (!plant) return;

    const cart = getCart();
    if (cart[plantId]) {
        cart[plantId].quantity += 1;
    } else {
        cart[plantId] = {
            id: plant.id,
            name: plant.name,
            price: plant.price,
            image: plant.image,
            quantity: 1
        };
    }
    saveCart(cart);
    updateCartBadge();
    showToast(`${plant.name} added to cart!`);
}

function removeFromCart(plantId) {
    const cart = getCart();
    delete cart[plantId];
    saveCart(cart);
    updateCartBadge();
}

function updateQuantity(plantId, delta) {
    const cart = getCart();
    if (!cart[plantId]) return;

    cart[plantId].quantity += delta;
    if (cart[plantId].quantity <= 0) {
        delete cart[plantId];
    }
    saveCart(cart);
    updateCartBadge();
}

function findPlantById(id) {
    for (const section of Object.values(plantCatalog)) {
        const plant = section.plants.find(p => p.id === id);
        if (plant) return plant;
    }
    return null;
}

// ----- UI Helpers -----
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const count = getCartCount();
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ----- Render Product Cards -----
function renderProductCards() {
    const container = document.getElementById('productSections');
    if (!container) return;

    const cart = getCart();

    let html = '';
    for (const [key, section] of Object.entries(plantCatalog)) {
        html += `
            <div class="plant-section">
                <h2 class="section-title">${section.title}</h2>
                <div class="plant-grid">
        `;
        for (const plant of section.plants) {
            const inCart = !!cart[plant.id];
            html += `
                <div class="plant-card">
                    <img src="${plant.image}" alt="${plant.name}" class="plant-card-img" loading="lazy">
                    <div class="plant-card-body">
                        <h3 class="plant-card-name">${plant.name}</h3>
                        <p class="plant-card-desc">${plant.description}</p>
                        <p class="plant-card-price">$${plant.price.toFixed(2)}</p>
                        <button class="btn-add-cart${inCart ? ' added' : ''}" 
                                data-id="${plant.id}" 
                                onclick="handleAddToCart(this, '${plant.id}')"
                                ${inCart ? 'disabled' : ''}>
                            ${inCart ? '&#10003; Added to Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            `;
        }
        html += `</div></div>`;
    }
    container.innerHTML = html;
}

function handleAddToCart(btn, plantId) {
    addToCart(plantId);
    btn.classList.add('added');
    btn.disabled = true;
    btn.innerHTML = '&#10003; Added to Cart';
}

// ----- Render Cart Page -----
function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartContent = document.getElementById('cartContent');

    if (!cartContainer) return;

    const cart = getCart();
    const items = Object.values(cart);

    if (items.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }

    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';

    let itemsHtml = '';
    let totalItems = 0;
    let totalCost = 0;

    for (const item of items) {
        const subtotal = item.price * item.quantity;
        totalItems += item.quantity;
        totalCost += subtotal;

        itemsHtml += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-unit-price">$${item.price.toFixed(2)} each</p>
                </div>
                <div class="cart-item-controls">
                    <button class="btn-qty" onclick="handleQuantityChange('${item.id}', -1)">−</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="btn-qty" onclick="handleQuantityChange('${item.id}', 1)">+</button>
                </div>
                <p class="cart-item-subtotal">$${subtotal.toFixed(2)}</p>
                <button class="btn-delete" onclick="handleDeleteItem('${item.id}')" title="Remove item">&#128465;</button>
            </div>
        `;
    }

    cartContainer.innerHTML = itemsHtml;

    if (cartSummary) {
        cartSummary.innerHTML = `
            <div class="cart-summary-row">
                <span>Total Items</span>
                <span>${totalItems}</span>
            </div>
            <div class="cart-summary-row total">
                <span>Total Cost</span>
                <span>$${totalCost.toFixed(2)}</span>
            </div>
        `;
    }
}

function handleQuantityChange(plantId, delta) {
    updateQuantity(plantId, delta);
    renderCart();
}

function handleDeleteItem(plantId) {
    removeFromCart(plantId);
    renderCart();
}

function handleCheckout() {
    const cart = getCart();
    const items = Object.values(cart);
    if (items.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    const total = getCartTotal();
    alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nYour plants will arrive soon! 🌿`);
    localStorage.removeItem('paradiseCart');
    updateCartBadge();
    renderCart();
}

// ----- Initialize on Page Load -----
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderProductCards();
    renderCart();
});

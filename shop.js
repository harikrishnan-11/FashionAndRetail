/* ============================================================
   LUXURY FASHION E-COMMERCE - COMPLETE FUNCTIONALITY
   ============================================================ */

// PRODUCT DATABASE
const productsDB = [
  {
    id: 1,
    name: "Elegant Black Silk Dress",
    category: "Dress",
    price: 129.99,
    originalPrice: 179.99,
    rating: 5,
    reviews: 128,
    image: "https://via.placeholder.com/300x300?text=Black+Dress",
    description: "Premium silk dress perfect for elegant occasions",
    badge: "New",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy"]
  },
  {
    id: 2,
    name: "Luxury White Cashmere Top",
    category: "Top",
    price: 89.99,
    originalPrice: null,
    rating: 4,
    reviews: 95,
    image: "https://via.placeholder.com/300x300?text=White+Top",
    description: "Soft and luxurious cashmere top for everyday wear",
    badge: null,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige"]
  },
  {
    id: 3,
    name: "Premium Beige Wool Jacket",
    category: "Jacket",
    price: 199.99,
    originalPrice: 249.99,
    rating: 5,
    reviews: 156,
    image: "https://via.placeholder.com/300x300?text=Beige+Jacket",
    description: "Classic wool jacket for professional styling",
    badge: "Sale",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black"]
  },
  {
    id: 4,
    name: "Designer Red Evening Dress",
    category: "Dress",
    price: 159.99,
    originalPrice: null,
    rating: 5,
    reviews: 203,
    image: "https://via.placeholder.com/300x300?text=Red+Dress",
    description: "Stunning red dress for special events",
    badge: "Hot",
    sizes: ["S", "M", "L"],
    colors: ["Red"]
  },
  {
    id: 5,
    name: "Luxury Navy Shoe Collection",
    category: "Shoe",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4,
    reviews: 87,
    image: "https://via.placeholder.com/300x300?text=Navy+Shoe",
    description: "Comfortable and stylish navy shoes",
    badge: null,
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Navy"]
  },
  {
    id: 6,
    name: "Accessory Gold Watch",
    category: "Accessory",
    price: 299.99,
    originalPrice: null,
    rating: 5,
    reviews: 234,
    image: "https://via.placeholder.com/300x300?text=Gold+Watch",
    description: "Premium gold-plated luxury watch",
    badge: "New",
    sizes: [],
    colors: ["Gold"]
  },
  {
    id: 7,
    name: "Silk Navy Blouse",
    category: "Top",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4,
    reviews: 112,
    image: "https://via.placeholder.com/300x300?text=Navy+Blouse",
    description: "Elegant silk blouse for office or casual",
    badge: null,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "White"]
  },
  {
    id: 8,
    name: "Black Leather Jacket",
    category: "Jacket",
    price: 249.99,
    originalPrice: 299.99,
    rating: 5,
    reviews: 167,
    image: "https://via.placeholder.com/300x300?text=Leather+Jacket",
    description: "Premium black leather jacket",
    badge: "Sale",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"]
  },
  {
    id: 9,
    name: "Beige Classic Shoe",
    category: "Shoe",
    price: 119.99,
    originalPrice: null,
    rating: 4,
    reviews: 98,
    image: "https://via.placeholder.com/300x300?text=Beige+Shoe",
    description: "Versatile beige shoes for any occasion",
    badge: null,
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Beige", "White"]
  },
  {
    id: 10,
    name: "Luxury Pearl Earrings",
    category: "Accessory",
    price: 179.99,
    originalPrice: 229.99,
    rating: 5,
    reviews: 145,
    image: "https://via.placeholder.com/300x300?text=Pearl+Earrings",
    description: "Exquisite pearl earring set",
    badge: null,
    sizes: [],
    colors: ["White"]
  },
  {
    id: 11,
    name: "White Evening Gown",
    category: "Dress",
    price: 289.99,
    originalPrice: 349.99,
    rating: 5,
    reviews: 189,
    image: "https://via.placeholder.com/300x300?text=White+Gown",
    description: "Elegant white evening gown",
    badge: "New",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"]
  },
  {
    id: 12,
    name: "Cashmere Scarf - Navy",
    category: "Accessory",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4,
    reviews: 76,
    image: "https://via.placeholder.com/300x300?text=Navy+Scarf",
    description: "Soft cashmere scarf in navy",
    badge: null,
    sizes: [],
    colors: ["Navy", "Beige"]
  }
];

// STATE MANAGEMENT
let state = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  filters: {
    category: [],
    priceMin: 0,
    priceMax: 500,
    size: [],
    color: [],
    rating: []
  },
  sortBy: 'featured',
  displayedProducts: [...productsDB]
};

// DOM ELEMENTS
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const filterToggle = document.getElementById('filterToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');
const sortSelect = document.getElementById('sortBy');
const applyPriceBtn = document.getElementById('applyPrice');
const resetFiltersBtn = document.getElementById('resetFilters');
const cartNotification = document.getElementById('cartNotification');
const resultsText = document.getElementById('resultsText');
const loadingSpinner = document.getElementById('loadingSpinner');
const noResults = document.getElementById('noResults');

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  renderProducts();
  updateCartCount();
});

// ============================================================
// EVENT LISTENERS
// ============================================================

function initEventListeners() {
  // Mobile filter toggle
  filterToggle.addEventListener('click', () => {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeSidebar.addEventListener('click', closeSidebarPanel);
  overlay.addEventListener('click', closeSidebarPanel);

  // Filter changes
  document.querySelectorAll('[data-filter]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });

  // Price filter
  applyPriceBtn.addEventListener('click', applyPriceFilter);

  // Sort
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Reset filters
  resetFiltersBtn.addEventListener('click', resetAllFilters);

  // Newsletter
  document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thank you for subscribing!');
    e.target.reset();
  });
}

function closeSidebarPanel() {
  sidebar.classList.remove('mobile-open');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ============================================================
// FILTER LOGIC
// ============================================================

function handleFilterChange(e) {
  const filterType = e.target.dataset.filter;
  const value = e.target.value;

  if (e.target.checked) {
    if (!state.filters[filterType].includes(value)) {
      state.filters[filterType].push(value);
    }
  } else {
    state.filters[filterType] = state.filters[filterType].filter(v => v !== value);
  }

  applyFiltersAndSort();
}

function applyPriceFilter() {
  const minInput = document.getElementById('minPrice');
  const maxInput = document.getElementById('maxPrice');
  
  state.filters.priceMin = parseInt(minInput.value) || 0;
  state.filters.priceMax = parseInt(maxInput.value) || 500;

  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  // APPLY FILTERS
  let filtered = productsDB.filter(product => {
    // Category filter
    if (state.filters.category.length > 0) {
      if (!state.filters.category.includes(product.category)) {
        return false;
      }
    }

    // Price filter
    if (product.price < state.filters.priceMin || product.price > state.filters.priceMax) {
      return false;
    }

    // Size filter
    if (state.filters.size.length > 0) {
      if (!product.sizes.some(size => state.filters.size.includes(size))) {
        return false;
      }
    }

    // Color filter
    if (state.filters.color.length > 0) {
      if (!product.colors.some(color => state.filters.color.includes(color))) {
        return false;
      }
    }

    // Rating filter
    if (state.filters.rating.length > 0) {
      if (!state.filters.rating.includes(Math.floor(product.rating).toString())) {
        return false;
      }
    }

    return true;
  });

  // APPLY SORTING
  switch (state.sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      // Keep original order
      break;
  }

  state.displayedProducts = filtered;
  renderProducts();
  updateResultsInfo();
}

function resetAllFilters() {
  // Clear all checkboxes
  document.querySelectorAll('[data-filter]').forEach(checkbox => {
    checkbox.checked = false;
  });

  // Reset price inputs
  document.getElementById('minPrice').value = '0';
  document.getElementById('maxPrice').value = '500';

  // Reset state
  state.filters = {
    category: [],
    priceMin: 0,
    priceMax: 500,
    size: [],
    color: [],
    rating: []
  };

  state.sortBy = 'featured';
  sortSelect.value = 'featured';

  applyFiltersAndSort();
  closeSidebarPanel();
}

// ============================================================
// RENDER PRODUCTS
// ============================================================

function renderProducts() {
  loadingSpinner.classList.remove('show');
  
  if (state.displayedProducts.length === 0) {
    productsGrid.innerHTML = '';
    noResults.style.display = 'block';
    resultsText.textContent = 'No products found';
    return;
  }

  noResults.style.display = 'none';
  productsGrid.innerHTML = state.displayedProducts.map(product => createProductCard(product)).join('');

  // Add event listeners to new cards
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', addToCart);
  });

  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', toggleLike);
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', quickView);
  });

  updateResultsInfo();
}

function createProductCard(product) {
  const isLiked = state.wishlist.includes(product.id);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const stars = Array(Math.floor(product.rating)).fill('<i class="fas fa-star"></i>').join('');
  
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        
        <div class="product-labels">
          ${product.badge ? `<span class="product-label">${product.badge}</span>` : ''}
          ${discount > 0 ? `<span class="product-label">-${discount}%</span>` : ''}
        </div>

        <div class="product-actions">
          <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" title="Add to wishlist" data-product-id="${product.id}">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn quick-view-btn" title="Quick view" data-product-id="${product.id}">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" title="Compare" data-product-id="${product.id}">
            <i class="fas fa-exchange"></i>
          </button>
        </div>
      </div>

      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>

        <div class="product-rating">
          <div class="stars">${stars}</div>
          <span class="rating-count">(${product.reviews})</span>
        </div>

        <div class="product-price">
          $${product.price.toFixed(2)}
          ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>

        <p class="product-desc">${product.description}</p>

        <button class="add-to-cart-btn" data-product-id="${product.id}">
          <i class="fas fa-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </article>
  `;
}

function updateResultsInfo() {
  const count = state.displayedProducts.length;
  resultsText.textContent = `Showing ${count} ${count === 1 ? 'item' : 'items'}`;
}

// ============================================================
// CART FUNCTIONALITY
// ============================================================

function addToCart(e) {
  const productId = parseInt(e.target.closest('.add-to-cart-btn').dataset.productId);
  const product = productsDB.find(p => p.id === productId);

  if (!product) return;

  const cartItem = state.cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  showNotification(`${product.name} added to cart!`);
}

function updateCartCount() {
  const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = total;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(state.cart));
}

cartBtn.addEventListener('click', () => {
  alert(`Cart Items: ${state.cart.length}\n\n${state.cart.map(item => `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`).join('\n')}\n\nTotal: $${state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`);
});

// ============================================================
// LIKE / WISHLIST FUNCTIONALITY
// ============================================================

function toggleLike(e) {
  const likeBtn = e.target.closest('.like-btn');
  const productId = parseInt(likeBtn.dataset.productId);

  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter(id => id !== productId);
    likeBtn.classList.remove('liked');
    showNotification('Removed from wishlist');
  } else {
    state.wishlist.push(productId);
    likeBtn.classList.add('liked');
    showNotification('Added to wishlist!');
  }

  localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
}

// ============================================================
// QUICK VIEW
// ============================================================

function quickView(e) {
  const productId = parseInt(e.target.closest('.quick-view-btn').dataset.productId);
  const product = productsDB.find(p => p.id === productId);

  if (product) {
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    alert(`
QUICK VIEW: ${product.name}

Price: $${product.price.toFixed(2)}
${product.originalPrice ? `Original: $${product.originalPrice.toFixed(2)} (Save ${discount}%)` : ''}

Rating: ${product.rating}/5 (${product.reviews} reviews)
Category: ${product.category}
Available Colors: ${product.colors.join(', ')}
${product.sizes.length > 0 ? `Available Sizes: ${product.sizes.join(', ')}` : ''}

${product.description}
    `);
  }
}

// ============================================================
// NOTIFICATIONS
// ============================================================

function showNotification(message) {
  const notification = cartNotification;
  const text = document.getElementById('notificationText');
  
  text.textContent = message;
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSidebarPanel();
  }
});

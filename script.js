/* ==========================================================================
   VEHRAAN STREETWEAR — PRODUCTION MASTER SCRIPT (DYNAMIC CMS)
   - Real-time Firestore Sync & Merge-based Updates
   - Clean Product Cards & Wishlist Functionality
   - Multiple Photos (1 to 5) Support for Products
   ========================================================================== */

// 1. DEFAULT PRODUCTS CATALOG
let defaultProducts = [
  {
    id: "veh-001",
    name: "Symbiote Noir Spider Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-1.jpg"],
    fallbackImage: "images/tee-1.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "spider", "marvel", "graphic", "tee"],
    inStock: true
  },
  {
    id: "veh-002",
    name: "Miles Morales Spiderverse Crimson Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-2.jpg"],
    fallbackImage: "images/tee-2.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "spider", "marvel", "spiderverse", "graphic", "tee"],
    inStock: true
  },
  {
    id: "veh-003",
    name: "Toji Inverted Spear Cursed Wrap Tee",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-3.jpg"],
    fallbackImage: "images/tee-3.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "anime", "toji", "jjk", "tee"],
    inStock: true
  },
  {
    id: "veh-004",
    name: "Formula 1 Racing Minimalist Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-4.jpg"],
    fallbackImage: "images/tee-4.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "f1", "motorsport", "tee"],
    inStock: true
  },
  {
    id: "veh-005",
    name: "Vagabond Ronin Katana Wrap Tee",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-5.jpg"],
    fallbackImage: "images/tee-5.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "anime", "vagabond", "samurai", "tee"],
    inStock: true
  },
  {
    id: "veh-006",
    name: "Red Web 'Who?' Crimson Graphic Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-11.jpg"],
    fallbackImage: "images/tee-11.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "spider", "streetwear", "tee"],
    inStock: true
  },
  {
    id: "veh-007",
    name: "Solo Leveling Igris 'ARISE' White Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-12.jpg"],
    fallbackImage: "images/tee-12.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "anime", "solo leveling", "tee"],
    inStock: true
  },
  {
    id: "veh-008",
    name: "Spider Web Shatter Red Graphic Tee",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-13.jpg"],
    fallbackImage: "images/tee-13.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "spider", "streetwear", "tee"],
    inStock: true
  },
  {
    id: "veh-009",
    name: "Creative High Passion Street Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-14.jpg"],
    fallbackImage: "images/tee-14.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "typography", "tee"],
    inStock: true
  },
  {
    id: "veh-010",
    name: "Zenitsu Thunder Breathing Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-6.jpg"],
    fallbackImage: "images/tee-6.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "anime", "demon slayer", "tee"],
    inStock: true
  },
  {
    id: "veh-011",
    name: "Toji Fushiguro Katana Stance Tee",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-7.jpg"],
    fallbackImage: "images/tee-7.jpeg",
    sizes: ["M", "L", "XL"],
    tags: ["all", "men", "women", "anime", "toji", "tee"],
    inStock: true
  },
  {
    id: "veh-012",
    name: "Toji Dagger Smirk Oversized Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-8.jpg"],
    fallbackImage: "images/tee-8.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "anime", "toji", "tee"],
    inStock: true
  },
  {
    id: "veh-013",
    name: "Solo Leveling 'ARISE' Jinwoo Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-9.jpg"],
    fallbackImage: "images/tee-9.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "anime", "solo leveling", "tee"],
    inStock: true
  },
  {
    id: "veh-014",
    name: "Crimson Bloodline TOJI Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-10.jpg"],
    fallbackImage: "images/tee-10.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "anime", "toji", "tee"],
    inStock: true
  },
  {
    id: "veh-015",
    name: "AOT Kanji & Levi Ackerman Dual Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-15.jpg", "images/tee-16.jpg"],
    fallbackImage: "images/tee-15.jpeg",
    fallbackBackImage: "images/tee-16.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "anime", "aot", "levi", "tee"],
    inStock: true
  },
  {
    id: "veh-016",
    name: "Marvel The Punisher Distressed Skull Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-17.jpg"],
    fallbackImage: "images/tee-17.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["all", "men", "women", "marvel", "punisher", "tee"],
    inStock: true
  },
  {
    id: "veh-017",
    name: "Maki Zenin Awakened Manga Drop",
    price: 599,
    originalPrice: 999,
    images: ["images/tee-18.jpg"],
    fallbackImage: "images/tee-18.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "men", "women", "anime", "maki", "jjk", "tee"],
    inStock: true
  }
];

// State
let catalogProducts = [...defaultProducts];
let currentUser = null;
let activeSelectedSizes = {};
let activeFilterTag = "all";
let isExpanded = false;
const INITIAL_LIMIT = 6;
const FLAT_DELIVERY_FEE = 120;
let currentUnit = "in";
let uploadedProductImages = [];
let uploadedHeroBase64 = "";

// Wishlist State
let wishlist = [];
try {
  wishlist = JSON.parse(localStorage.getItem("vehraan_wishlist")) || [];
  if (!Array.isArray(wishlist)) wishlist = [];
} catch (e) {
  wishlist = [];
}

// 2. CACHE INITIALIZATION
try {
  const cachedUser = localStorage.getItem("vehraan_user");
  if (cachedUser) currentUser = JSON.parse(cachedUser);
} catch (e) {
  currentUser = null;
}

let rawCart = [];
try {
  rawCart = JSON.parse(localStorage.getItem("vehraan_cart")) || [];
  if (!Array.isArray(rawCart)) rawCart = [];
} catch (e) {
  rawCart = [];
}

let cart = rawCart
  .filter(item => item && Number(item.price) > 0 && Number(item.qty) > 0)
  .map(item => ({
    id: item.id,
    name: item.name,
    price: Number(item.price) || 599,
    image: item.images ? item.images[0] : item.image,
    size: item.size || "M",
    qty: Number(item.qty) || 1
  }));
localStorage.setItem("vehraan_cart", JSON.stringify(cart));

function initSizes() {
  catalogProducts.forEach(p => {
    if (!activeSelectedSizes[p.id]) {
      activeSelectedSizes[p.id] = (p.sizes && p.sizes[0]) || "M";
    }
  });
}
initSizes();

// 3. REAL-TIME FIRESTORE LISTENER FOR PRODUCTS & HERO
document.addEventListener("DOMContentLoaded", () => {
  try {
    const cachedUser = localStorage.getItem("vehraan_user");
    if (cachedUser) currentUser = JSON.parse(cachedUser);
  } catch (e) {
    currentUser = null;
  }

  if (typeof firebase !== "undefined" && firebase.firestore) {
    firebase.firestore().collection("products").onSnapshot(snapshot => {
      const firestoreMap = {};
      snapshot.docs.forEach(doc => {
        firestoreMap[doc.id] = { id: doc.id, ...doc.data() };
      });

      catalogProducts = defaultProducts.map(def => {
        if (firestoreMap[def.id]) {
          const merged = { ...def, ...firestoreMap[def.id] };
          delete firestoreMap[def.id];
          return merged;
        }
        return def;
      });

      Object.values(firestoreMap).forEach(customProd => {
        catalogProducts.unshift(customProd);
      });

      catalogProducts = catalogProducts.filter(p => !p.hidden);

      initSizes();
      renderCatalog();
      if (document.getElementById("admin-tab-manage") && !document.getElementById("admin-tab-manage").classList.contains("hidden")) {
        loadManageProducts();
      }
    });

    firebase.firestore().collection("settings").doc("heroBanner").onSnapshot(doc => {
      if (doc.exists && doc.data().imageUrl) {
        const globalHeroUrl = doc.data().imageUrl;
        localStorage.setItem("vehraan_hero_img", globalHeroUrl);
        const heroImg = document.getElementById("hero-banner-img");
        if (heroImg) heroImg.src = globalHeroUrl;
      }
    });
  }

  initHeroBanner();
  renderCatalog();
  renderCategoryFilters();
  setupSearchListeners();
  setupCheckoutForm();
  setupAdminForm();
  initScrollAnimations();
  updateCartBadge();
  updateWishlistBadge();
  
  if (currentUser) {
    const firstName = currentUser.displayName ? currentUser.displayName.split(" ")[0].toUpperCase() : "MEMBER";
    updateAuthUI(firstName);
    updateNavHeaderTitle(firstName);
  }
});

function initScrollAnimations() {
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.05 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
}

function initHeroBanner() {
  const savedHero = localStorage.getItem("vehraan_hero_img");
  const heroImg = document.getElementById("hero-banner-img");
  if (savedHero && heroImg) {
    heroImg.src = savedHero;
  }
}

// 4. STREAMLINED CATEGORY PILLS RENDERER
function renderCategoryFilters() {
  const container = document.getElementById("category-filters-container");
  if (!container) return;

  const coreTags = ["all", "men", "women", "anime", "spider"];
  container.innerHTML = coreTags.map(cat => `
    <button type="button" onclick="filterByTag('${cat}')" class="category-pill ${activeFilterTag === cat ? 'active' : ''}">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  `).join("");
}

// 5. CATALOG RENDERER
function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  const countBadge = document.getElementById("catalog-count-badge");
  const viewAllBtn = document.getElementById("view-all-container");

  if (!grid) return;

  let filtered = catalogProducts;
  if (activeFilterTag !== "all") {
    const term = activeFilterTag.toLowerCase().trim();
    filtered = catalogProducts.filter(p => {
      const inTags = p.tags && p.tags.some(t => t.toLowerCase().includes(term));
      const inName = p.name && p.name.toLowerCase().includes(term);
      return inTags || inName;
    });
  }

  const displayItems = (activeFilterTag === "all" && !isExpanded)
    ? filtered.slice(0, INITIAL_LIMIT)
    : filtered;

  if (displayItems.length === 0) {
    grid.innerHTML = `<p class="text-neutral-500 py-12 text-center col-span-full font-mono-code text-xs">NO DROPS FOUND MATCHING "${activeFilterTag.toUpperCase()}".</p>`;
  } else {
    grid.innerHTML = displayItems.map(p => createCardHTML(p)).join("");
  }

  if (countBadge) {
    if (activeFilterTag === "all") {
      countBadge.innerText = `${String(displayItems.length).padStart(2, '0')} / ${String(catalogProducts.length).padStart(2, '0')} Drops`;
    } else {
      countBadge.innerText = `${String(displayItems.length).padStart(2, '0')} Drops`;
    }
  }

  if (viewAllBtn) {
    if (activeFilterTag !== "all" || isExpanded || filtered.length <= INITIAL_LIMIT) {
      viewAllBtn.classList.add("hidden");
    } else {
      viewAllBtn.classList.remove("hidden");
    }
  }
}

function createCardHTML(product) {
  const isAvailable = product.inStock !== false;
  const isWishlisted = wishlist.some(id => String(id) === String(product.id));
  const imgList = product.images || [product.image];
  const primaryImg = imgList[0];

  const mediaHTML = `
    <div class="product-media relative w-full aspect-[1/1.15] bg-white overflow-hidden flex items-center justify-center p-2">
      <img src="${primaryImg}" alt="${product.name}" loading="lazy" class="w-full h-full object-contain transition duration-500" onerror="this.onerror=null; this.src='${product.fallbackImage || primaryImg}';" />
    </div>
  `;

  const actionButtonHTML = isAvailable ? `
    <button 
      type="button" 
      onclick="event.stopPropagation(); openProductDetailsModal('${product.id}')" 
      class="w-full py-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] transition duration-200 cursor-pointer shadow-sm"
    >
      Add to Bag
    </button>
  ` : `
    <button 
      type="button" 
      disabled 
      class="w-full py-2.5 bg-neutral-200 text-neutral-500 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] cursor-not-allowed"
    >
      Out of Stock
    </button>
  `;

  return `
    <div class="clean-product-card justify-between cursor-pointer relative ${!isAvailable ? 'opacity-75' : ''}" id="card-${product.id}" onclick="openProductDetailsModal('${product.id}')">
      ${!isAvailable ? '<span class="absolute top-2 left-2 z-10 bg-red-600 text-white text-[9px] font-mono-code px-2 py-0.5 rounded uppercase font-bold">Sold Out</span>' : ''}
      
      <!-- Wishlist Heart Button -->
      <button onclick="event.stopPropagation(); toggleWishlist('${product.id}')" class="absolute top-2 right-2 z-10 p-2 bg-white/85 backdrop-blur-sm rounded-full shadow hover:bg-white transition cursor-pointer" aria-label="Wishlist Heart">
        <svg class="w-5 h-5 ${isWishlisted ? 'text-red-600 fill-red-600' : 'text-neutral-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>

      ${mediaHTML}

      <div class="p-3 pt-3 flex-1 flex flex-col justify-between space-y-2.5" onclick="event.stopPropagation()">
        <div onclick="openProductDetailsModal('${product.id}')">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition truncate">${product.name}</h3>
            <div class="text-right shrink-0">
              <span class="text-xs font-bold text-black font-mono-code">₹${product.price}</span>
              ${product.originalPrice ? `<span class="block text-[9px] text-neutral-500 line-through font-mono-code">₹${product.originalPrice}</span>` : ''}
            </div>
          </div>
        </div>

        <div>
          ${actionButtonHTML}
        </div>
      </div>
    </div>
  `;
}

window.expandFullCatalog = function() { isExpanded = true; renderCatalog(); };

// Wishlist Logic
window.toggleWishlist = function(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(productId);
    showToast("Added to wishlist");
  }
  localStorage.setItem("vehraan_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
  renderCatalog();
  if (!document.getElementById("wishlist-modal").classList.contains("hidden")) {
    renderWishlistItems();
  }
};

function updateWishlistBadge() {
  const badge = document.getElementById("wishlist-badge");
  if (!badge) return;
  if (wishlist.length > 0) {
    badge.innerText = wishlist.length;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

window.openWishlistModal = function() {
  renderWishlistItems();
  document.getElementById("wishlist-modal")?.classList.remove("hidden");
};

window.closeWishlistModal = function() {
  document.getElementById("wishlist-modal")?.classList.add("hidden");
};

function renderWishlistItems() {
  const container = document.getElementById("wishlist-items-container");
  if (!container) return;

  const savedProducts = catalogProducts.filter(p => wishlist.includes(p.id));

  if (savedProducts.length === 0) {
    container.innerHTML = `<p class="py-12 text-center text-xs text-neutral-500 font-mono-code">Your wishlist is empty.</p>`;
    return;
  }

  container.innerHTML = savedProducts.map(p => {
    const img = p.images ? p.images[0] : p.image;
    return `
      <div class="flex items-center gap-3 p-2.5 bg-neutral-100 border border-black/10 rounded-xl">
        <img src="${img}" class="w-12 h-14 object-cover rounded-lg border border-black/10" />
        <div class="flex-1 min-w-0 text-left">
          <h4 class="text-xs font-semibold text-black truncate">${p.name}</h4>
          <p class="text-[10px] text-neutral-600 font-mono-code">₹${p.price}</p>
        </div>
        <button onclick="openProductDetailsModal('${p.id}'); closeWishlistModal();" class="px-3 py-1.5 bg-black text-white text-[10px] uppercase font-bold rounded-lg">View</button>
        <button onclick="toggleWishlist('${p.id}')" class="text-neutral-500 hover:text-red-600 text-sm p-1">✕</button>
      </div>
    `;
  }).join("");
}

// 6. QUICK-VIEW PRODUCT MODAL WITH GALLERY THUMBNAILS
window.openProductDetailsModal = function(productId) {
  const product = catalogProducts.find(p => String(p.id) === String(productId));
  if (!product) return;

  const modal = document.getElementById("product-details-modal");
  const mainImg = document.getElementById("modal-p-img");
  const thumbsContainer = document.getElementById("modal-gallery-thumbs");
  const name = document.getElementById("modal-p-name");
  const price = document.getElementById("modal-p-price");
  const sizesContainer = document.getElementById("modal-p-sizes");
  const addBtn = document.getElementById("modal-p-add-btn");
  const isAvailable = product.inStock !== false;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  if (mainImg) mainImg.src = images[0];

  if (thumbsContainer) {
    if (images.length > 1) {
      thumbsContainer.innerHTML = images.map((img) => `
        <button onclick="document.getElementById('modal-p-img').src='${img}'" class="w-12 h-14 rounded-lg border border-black/20 overflow-hidden shrink-0 focus:border-black cursor-pointer">
          <img src="${img}" class="w-full h-full object-cover" />
        </button>
      `).join("");
      thumbsContainer.classList.remove("hidden");
    } else {
      thumbsContainer.innerHTML = "";
      thumbsContainer.classList.add("hidden");
    }
  }

  if (name) name.innerText = product.name;
  if (price) price.innerText = `₹${product.price}`;

  const currentSelectedSize = activeSelectedSizes[product.id] || (product.sizes && product.sizes[0]) || "M";
  if (sizesContainer) {
    sizesContainer.innerHTML = (product.sizes || ["S", "M", "L", "XL"]).map(sz => `
      <button 
        type="button" 
        onclick="handleModalSizeSelect('${product.id}', '${sz}', this)" 
        class="size-pill ${sz === currentSelectedSize ? 'active' : ''}"
      >
        ${sz}
      </button>
    `).join("");
  }

  if (addBtn) {
    addBtn.innerText = isAvailable ? "Add to Bag" : "Out of Stock";
    addBtn.disabled = !isAvailable;
    addBtn.className = isAvailable 
      ? "w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-[0.15em] rounded-xl transition shadow-xl cursor-pointer"
      : "w-full py-3.5 bg-neutral-200 text-neutral-500 rounded-xl text-xs font-bold uppercase tracking-[0.15em] cursor-not-allowed";

    addBtn.onclick = () => {
      if (!isAvailable) return;
      addToBag(product.id);
      closeProductDetailsModal();
    };
  }

  if (modal) modal.classList.remove("hidden");
};

window.handleModalSizeSelect = function(productId, size, btn) {
  activeSelectedSizes[productId] = size;
  const container = document.getElementById("modal-p-sizes");
  if (container) {
    container.querySelectorAll(".size-pill").forEach(b => b.classList.remove("active"));
  }
  btn.classList.add("active");
};

window.closeProductDetailsModal = function() {
  document.getElementById("product-details-modal")?.classList.add("hidden");
};

// 7. MANDATORY AUTH CHECK ON "ADD TO BAG"
window.addToBag = function(productId) {
  if (!currentUser) {
    openAuthModal();
    showToast("Please Sign In with Google to start shopping!");
    return;
  }

  const item = catalogProducts.find(p => String(p.id) === String(productId));
  if (!item || item.inStock === false) {
    showToast("Sorry, this item is currently out of stock.");
    return;
  }

  const size = activeSelectedSizes[item.id] || "M";
  const existing = cart.find(c => String(c.id) === String(item.id) && c.size === size);
  const primaryImg = item.images ? item.images[0] : item.image;

  if (existing) {
    existing.qty = Number(existing.qty || 0) + 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: Number(item.price) || 599,
      image: primaryImg,
      size: size,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  toggleCart(true);
  showToast(`${item.name} (${size}) added to bag.`);
};

function saveCart() {
  localStorage.setItem("vehraan_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
  const badge = document.getElementById("cart-badge");
  const drawerCount = document.getElementById("drawer-count");
  if (badge) badge.innerText = isNaN(count) ? 0 : count;
  if (drawerCount) drawerCount.innerText = isNaN(count) ? 0 : count;
}

window.toggleCart = function(show) {
  if (show && !currentUser) {
    openAuthModal();
    showToast("Please Sign In first to view your bag.");
    return;
  }

  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");

  if (show) {
    renderCartItems();
    drawer?.classList.remove("translate-x-full");
    overlay?.classList.remove("hidden");
  } else {
    drawer?.classList.add("translate-x-full");
    overlay?.classList.add("hidden");
  }
};

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const subtotalElem = document.getElementById("cart-subtotal-price");
  const totalElem = document.getElementById("cart-total-price");
  const discountRow = document.getElementById("discount-row");
  const discountAmountElem = document.getElementById("cart-discount-amount");
  const discountStatusText = document.getElementById("discount-status-text");

  if (!container) return;

  if (!cart || cart.length === 0) {
    container.innerHTML = `<p class="py-12 text-center text-xs text-neutral-500 font-mono-code">Your bag is empty.</p>`;
    if (subtotalElem) subtotalElem.innerText = "₹0";
    if (totalElem) totalElem.innerText = `₹${FLAT_DELIVERY_FEE}`;
    if (discountRow) discountRow.classList.add("hidden");
    if (discountStatusText) discountStatusText.innerText = "Add ₹1,000+ items to unlock flat 10% discount!";
    return;
  }

  container.innerHTML = cart.map((item, idx) => {
    const itemPrice = Number(item.price) || 599;
    const itemQty = Number(item.qty) || 1;
    return `
      <div class="flex items-center gap-3 p-2.5 bg-neutral-100 border border-black/10 rounded-xl">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover rounded-lg border border-black/10" />
        <div class="flex-1 min-w-0 text-left">
          <h4 class="text-xs font-semibold text-black truncate">${item.name}</h4>
          <p class="text-[10px] text-neutral-600 font-mono-code">Size: <strong class="text-black">${item.size}</strong> | ₹${itemPrice}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <button type="button" onclick="updateQty(${idx}, -1)" class="w-5 h-5 flex items-center justify-center bg-black/10 hover:bg-black/20 text-black rounded text-xs cursor-pointer">-</button>
            <span class="text-xs font-mono-code">${itemQty}</span>
            <button type="button" onclick="updateQty(${idx}, 1)" class="w-5 h-5 flex items-center justify-center bg-black/10 hover:bg-black/20 text-black rounded text-xs cursor-pointer">+</button>
          </div>
        </div>
        <button type="button" onclick="removeCartItem(${idx})" class="text-neutral-500 hover:text-black text-sm p-1 cursor-pointer">✕</button>
      </div>
    `;
  }).join("");

  const rawSubtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 599) * (Number(item.qty) || 1)), 0);
  
  let discount = 0;
  if (rawSubtotal >= 1000) {
    discount = Math.round(rawSubtotal * 0.10);
    if (discountRow) discountRow.classList.remove("hidden");
    if (discountAmountElem) discountAmountElem.innerText = `- ₹${discount}`;
    if (discountStatusText) discountStatusText.innerText = `10% Discount Unlocked! You saved ₹${discount}`;
  } else {
    if (discountRow) discountRow.classList.add("hidden");
    const diff = 1000 - rawSubtotal;
    if (discountStatusText) discountStatusText.innerText = `Add ₹${diff} more to unlock 10% OFF!`;
  }

  const netSubtotal = rawSubtotal - discount;
  const total = netSubtotal + FLAT_DELIVERY_FEE;

  if (subtotalElem) subtotalElem.innerText = `₹${isNaN(rawSubtotal) ? 0 : rawSubtotal}`;
  if (totalElem) totalElem.innerText = `₹${isNaN(total) ? FLAT_DELIVERY_FEE : total}`;
}

window.updateQty = function(index, delta) {
  if (!cart[index]) return;
  cart[index].qty = (Number(cart[index].qty) || 1) + delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartItems();
};

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartItems();
};

// 8. EXPECTED DELIVERY DATE CALCULATOR (7 Days Forward)
function getExpectedDeliveryDate() {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return deliveryDate.toLocaleDateString('en-IN', options);
}

// My Orders Modal Logic
window.openMyOrdersModal = function() {
  if (!currentUser) {
    openAuthModal();
    showToast("Please sign in to view your orders.");
    return;
  }
  renderUserOrders();
  document.getElementById("my-orders-modal")?.classList.remove("hidden");
};

window.closeMyOrdersModal = function() {
  document.getElementById("my-orders-modal")?.classList.add("hidden");
};

function renderUserOrders() {
  const container = document.getElementById("my-orders-container");
  if (!container) return;

  let savedOrders = [];
  try {
    savedOrders = JSON.parse(localStorage.getItem("vehraan_user_orders")) || [];
  } catch (e) {
    savedOrders = [];
  }

  if (savedOrders.length === 0) {
    container.innerHTML = `<p class="py-12 text-center text-xs text-neutral-500 font-mono-code">No active orders found.</p>`;
    return;
  }

  container.innerHTML = savedOrders.map(order => {
    const itemsHTML = order.items.map(i => `• ${i.name} [Size: ${i.size}] x${i.qty} - ₹${i.price * i.qty}`).join("<br>");
    return `
      <div class="p-4 bg-neutral-100 border border-black/10 rounded-xl space-y-2 text-xs font-mono-code">
        <div class="flex justify-between font-bold text-black border-b border-black/10 pb-1">
          <span>Order ID: #${order.orderId || 'VEH-001'}</span>
          <span class="text-green-700">Confirmed (COD)</span>
        </div>
        <div>
          <strong class="text-black uppercase text-[10px]">Items Ordered:</strong>
          <div class="text-neutral-700 text-[11px] mt-0.5">${itemsHTML}</div>
        </div>
        <div class="pt-1 text-[11px] text-neutral-600">
          <strong>Expected Delivery:</strong> <span class="text-black font-bold">${order.expectedDelivery}</span>
        </div>
      </div>
    `;
  }).join("");
}

// 9. CHECKOUT, WHATSAPP DISPATCH & MANDATORY AUTH CHECK
window.openCheckoutModal = function() {
  if (!currentUser) {
    openAuthModal();
    showToast("Please sign in with Google to proceed to checkout!");
    return;
  }

  if (!cart || cart.length === 0) {
    showToast("Please add items to your bag first.");
    return;
  }

  toggleCart(false);
  const modal = document.getElementById("checkout-modal");
  const finalAmountElem = document.getElementById("checkout-final-amount");
  const rawSubtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 599) * (Number(item.qty) || 1)), 0);
  const discount = rawSubtotal >= 1000 ? Math.round(rawSubtotal * 0.10) : 0;
  const total = (rawSubtotal - discount) + FLAT_DELIVERY_FEE;
  
  if (finalAmountElem) finalAmountElem.innerText = `₹${isNaN(total) ? FLAT_DELIVERY_FEE : total}`;
  if (modal) modal.classList.remove("hidden");
};

window.closeCheckoutModal = function() {
  document.getElementById("checkout-modal")?.classList.add("hidden");
};

function setupCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const name = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const email = document.getElementById("order-email").value.trim();
    const ig = document.getElementById("order-instagram")?.value.trim() || "N/A";
    const address = document.getElementById("order-address").value.trim();
    const expectedDate = getExpectedDeliveryDate();

    const rawSubtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 599) * (Number(item.qty) || 1)), 0);
    const discount = rawSubtotal >= 1000 ? Math.round(rawSubtotal * 0.10) : 0;
    const total = (rawSubtotal - discount) + FLAT_DELIVERY_FEE;

    const orderData = {
      orderId: `VEH-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: name,
      phone: phone,
      email: email,
      instagram: ig,
      address: address,
      items: cart,
      subtotal: rawSubtotal,
      discount: discount,
      deliveryFee: FLAT_DELIVERY_FEE,
      netTotal: total,
      paymentMode: "Cash on Delivery (COD)",
      expectedDelivery: expectedDate,
      userEmail: currentUser ? currentUser.email : "guest@vehraan.in",
      createdAt: new Date().toISOString()
    };

    try {
      let localOrders = JSON.parse(localStorage.getItem("vehraan_user_orders")) || [];
      localOrders.unshift(orderData);
      localStorage.setItem("vehraan_user_orders", JSON.stringify(localOrders));
    } catch (err) {
      console.error("Local order save error", err);
    }

    try {
      if (typeof firebase !== "undefined" && firebase.firestore) {
        await firebase.firestore().collection("orders").add(orderData);
      }
    } catch (err) {
      console.error("Error saving order to Firestore:", err);
    }

    const itemsList = cart.map(i => `• ${i.name} [Size: ${i.size}] x${i.qty} - ₹${(Number(i.price) || 599) * (Number(i.qty) || 1)}`).join("%0A");
    const sizeSummary = cart.map(i => `  ↳ ${i.name}: Selected Fit ${i.size}`).join("%0A");

    const waMessage = `*VEHRAAN COD ORDER DISPATCH*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Instagram:* ${ig}%0A` +
      `*Delivery Address:* ${address}%0A%0A` +
      `*Expected Delivery:* ${expectedDate}%0A%0A` +
      `*Ordered Drops:*%0A${itemsList}%0A%0A` +
      `*Fit Matrix Confirmation:*%0A${sizeSummary}%0A%0A` +
      `*Items Subtotal:* ₹${rawSubtotal}%0A` +
      (discount > 0 ? `*10% Promo Discount:* -₹${discount}%0A` : ``) +
      `*Express Delivery:* ₹${FLAT_DELIVERY_FEE}%0A` +
      `*Net COD Amount:* ₹${total}%0A%0A` +
      `Please confirm my shipment dispatch!`;

    cart = [];
    saveCart();
    updateCartBadge();
    closeCheckoutModal();
    showToast(`Order placed! Expected delivery by ${expectedDate}`);

    window.open(`https://wa.me/917400246429?text=${waMessage}`, "_blank");
  });
}

// 10. GOOGLE AUTH & SECURE ADMIN CHECK
window.openAuthModal = function() {
  document.getElementById("auth-modal")?.classList.remove("hidden");
};
window.closeAuthModal = function() {
  document.getElementById("auth-modal")?.classList.add("hidden");
};

window.handleGoogleSignIn = async function() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await firebase.auth().signInWithPopup(provider);
    currentUser = res.user;

    const userProfile = {
      uid: currentUser.uid,
      displayName: currentUser.displayName || "MEMBER",
      email: currentUser.email,
      photoURL: currentUser.photoURL || "",
      lastLogin: new Date().toISOString()
    };

    await firebase.firestore().collection("users").doc(currentUser.uid).set(userProfile, { merge: true });

    localStorage.setItem("vehraan_user", JSON.stringify({
      displayName: currentUser.displayName,
      email: currentUser.email,
      uid: currentUser.uid
    }));

    const firstName = currentUser.displayName ? currentUser.displayName.split(" ")[0].toUpperCase() : "MEMBER";
    updateAuthUI(firstName);
    updateNavHeaderTitle(firstName);
    closeAuthModal();
    showToast("Signed in successfully!");
  } catch (err) {
    console.error("Google Sign-In Error:", err);
    showToast("Sign-in failed. Please try again.");
  }
};

function updateAuthUI(name) {
  const containers = [document.getElementById("auth-container"), document.getElementById("sidebar-auth-container")];
  containers.forEach(c => {
    if (c) {
      c.innerHTML = `
        <button onclick="handleSignOut()" class="w-full py-2.5 sm:py-1.5 px-3 border border-black/15 rounded-lg text-neutral-800 hover:text-black uppercase tracking-wider text-xs font-semibold cursor-pointer text-center">
          ${name}
        </button>
      `;
    }
  });
}

function updateNavHeaderTitle(name) {
  const headerTitle = document.getElementById("nav-header-title");
  if (headerTitle) {
    headerTitle.innerText = `HELLO, ${name}`;
  }
}

window.handleSignOut = function() {
  if (confirm("Do you want to sign out?")) {
    currentUser = null;
    localStorage.removeItem("vehraan_user");
    if (typeof firebase !== "undefined" && firebase.auth && firebase.apps.length > 0) {
      firebase.auth().signOut();
    }
    location.reload();
  }
};

// 11. NAVIGATION & SEARCH
window.filterByTag = function(tag) {
  activeFilterTag = tag.toLowerCase().trim();
  isExpanded = true;
  renderCategoryFilters();
  renderCatalog();
  document.getElementById("new-arrivals")?.scrollIntoView({ behavior: "smooth" });
};

window.toggleMobileNav = function(show) {
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-drawer-overlay");
  if (show) {
    drawer?.classList.remove("-translate-x-full");
    overlay?.classList.remove("hidden");
  } else {
    drawer?.classList.add("-translate-x-full");
    overlay?.classList.add("hidden");
  }
};

window.selectCategory = function(tag) {
  filterByTag(tag);
  toggleMobileNav(false);
};

window.toggleSearchModal = function(show) {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-bar");
  if (show) {
    modal?.classList.remove("hidden");
    if (input) { input.value = ""; input.focus(); }
  } else {
    modal?.classList.add("hidden");
  }
};

function setupSearchListeners() {
  const searchInput = document.getElementById("search-bar");
  const dropdown = document.getElementById("search-dropdown");
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) { dropdown.innerHTML = ""; return; }
    const matched = catalogProducts.filter(p => p.name.toLowerCase().includes(query));
    dropdown.innerHTML = matched.map(p => {
      const img = p.images ? p.images[0] : p.image;
      return `
        <div onclick="openProductDetailsModal('${p.id}'); toggleSearchModal(false);" class="flex items-center gap-3 p-2 hover:bg-neutral-100 rounded-lg cursor-pointer transition">
          <img src="${img}" class="w-8 h-8 rounded object-cover border border-black/10" />
          <div class="flex-1"><h4 class="text-[11px] font-semibold text-black truncate">${p.name}</h4><span class="text-[10px] text-neutral-500 font-mono-code">₹${p.price}</span></div>
        </div>
      `;
    }).join("");
  });
}

// 12. FIT MATRIX & POLICIES
const sizeMatrix = [
  { size: "S", chestIn: "38", lengthIn: "28", chestCm: "96.5", lengthCm: "71.1", drape: "Classic Boxy" },
  { size: "M", chestIn: "40", lengthIn: "29", chestCm: "101.6", lengthCm: "73.7", drape: "Structured Drop" },
  { size: "L", chestIn: "42", lengthIn: "30", chestCm: "106.7", lengthCm: "76.2", drape: "Heavyweight Boxy" },
  { size: "XL", chestIn: "44", lengthIn: "31", chestCm: "111.8", lengthCm: "78.7", drape: "Oversized Street" },
  { size: "XXL", chestIn: "46", lengthIn: "32", chestCm: "116.8", lengthCm: "81.3", drape: "Maximum Drape" }
];

window.openSizeGuideModal = function() {
  renderSizeTable();
  document.getElementById("size-guide-modal")?.classList.remove("hidden");
};
window.closeSizeGuideModal = function() {
  document.getElementById("size-guide-modal")?.classList.add("hidden");
};

window.toggleSizeUnit = function(unit) {
  currentUnit = unit;
  document.getElementById("unit-in-btn")?.classList.toggle("bg-black", unit === "in");
  document.getElementById("unit-in-btn")?.classList.toggle("text-white", unit === "in");
  document.getElementById("unit-in-btn")?.classList.toggle("text-neutral-600", unit !== "in");
  document.getElementById("unit-cm-btn")?.classList.toggle("bg-black", unit === "cm");
  document.getElementById("unit-cm-btn")?.classList.toggle("text-white", unit === "cm");
  document.getElementById("unit-cm-btn")?.classList.toggle("text-neutral-600", unit !== "cm");
  renderSizeTable();
};

function renderSizeTable() {
  const tbody = document.getElementById("size-table-body");
  const thChest = document.getElementById("th-chest");
  if (thChest) thChest.innerText = currentUnit === "in" ? "Chest (IN)" : "Chest (CM)";
  if (tbody) {
    tbody.innerHTML = sizeMatrix.map(row => `
      <tr class="hover:bg-black/5 transition">
        <td class="p-3 font-bold text-black">${row.size}</td>
        <td class="p-3">${currentUnit === "in" ? row.chestIn : row.chestCm}</td>
        <td class="p-3">${currentUnit === "in" ? row.lengthIn : row.lengthCm}</td>
        <td class="p-3 text-neutral-600">${row.drape}</td>
      </tr>
    `).join("");
  }
}

const policyContent = {
  about: { title: "About VEHRAAN Studio", body: "<p>VEHRAAN is an independent contemporary Indian luxury streetwear imprint engineered with heavy-gauge 220 GSM bio-washed textiles and high-density screen graphics. Built for those who embrace raw street aesthetics and uncompromising garment weight.</p>" },
  shipping: { title: "Shipping & Dispatch", body: "<p>Express Cash on Delivery available across India pincodes within 24-48 hours. Every order is meticulously quality-checked and dispatched directly from our studio.</p>" },
  returns: { title: "Returns & Exchanges", body: "<p><strong>No Exchange, No Refund.</strong> All capsule drops are final sale due to strict limited-edition production runs.</p>" }
};

window.openPolicyModal = function(type) {
  const p = policyContent[type];
  if (!p) return;
  document.getElementById("policy-modal-title").innerText = p.title;
  document.getElementById("policy-modal-body").innerHTML = p.body;
  document.getElementById("policy-modal")?.classList.remove("hidden");
};
window.closePolicyModal = function() {
  document.getElementById("policy-modal")?.classList.add("hidden");
};

// 13. STUDIO CMS & ADMIN PANEL (SUPPORTING 1-5 PRODUCT IMAGES)
window.triggerAdminAccess = async function() {
  if (!currentUser || !firebase.auth().currentUser) {
    showToast("Please sign in with your admin account first.");
    openAuthModal();
    return;
  }
  if (firebase.auth().currentUser.email !== "vehraan@gmail.com") {
    alert("ACCESS DENIED: Unauthorized account.");
    return;
  }
  document.getElementById("admin-modal")?.classList.remove("hidden");
  switchAdminTab("add-product");
};

window.closeAdminModal = function() {
  document.getElementById("admin-modal")?.classList.add("hidden");
};

window.switchAdminTab = function(tab) {
  document.getElementById("admin-tab-add")?.classList.toggle("hidden", tab !== "add-product");
  document.getElementById("admin-tab-hero")?.classList.toggle("hidden", tab !== "change-hero");
  document.getElementById("admin-tab-manage")?.classList.toggle("hidden", tab !== "manage-products");

  if (tab === "add-product") loadCategoryDropdown();
  if (tab === "change-hero") setupHeroUploadListener();
  if (tab === "manage-products") loadManageProducts();
};

function loadCategoryDropdown() {
  const select = document.getElementById("adm-category-select");
  if (!select) return;
  const tags = ["all", "men", "women", "anime", "spider", "f1"];
  catalogProducts.forEach(p => p.tags?.forEach(t => tags.push(t)));
  const uniqueTags = Array.from(new Set(tags)).filter(t => t !== "tee" && t !== "unisex");
  select.innerHTML = uniqueTags.map(t => `<option value="${t}">${t.toUpperCase()}</option>`).join("") + `<option value="custom">Create New Section...</option>`;
}

window.handleCategorySelection = function() {
  const select = document.getElementById("adm-category-select");
  const customBox = document.getElementById("adm-custom-category-box");
  if (select.value === "custom") {
    customBox?.classList.remove("hidden");
  } else {
    customBox?.classList.add("hidden");
  }
};

function setupAdminForm() {
  const form = document.getElementById("admin-add-product-form");
  const fileInput = document.getElementById("adm-file-input");

  fileInput?.addEventListener("change", e => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("Maximum 5 photos allowed per product!");
      fileInput.value = "";
      return;
    }

    uploadedProductImages = [];
    const previewContainer = document.getElementById("adm-preview-container");
    if (previewContainer) previewContainer.innerHTML = "";

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = ev => {
        uploadedProductImages.push(ev.target.result);
        if (previewContainer) {
          previewContainer.innerHTML += `
            <div class="w-16 h-16 bg-white rounded-xl border border-black/15 overflow-hidden flex items-center justify-center shrink-0">
              <img src="${ev.target.result}" class="w-full h-full object-contain" />
            </div>
          `;
        }
      };
      reader.readAsDataURL(file);
    });
  });

  form?.addEventListener("submit", async e => {
    e.preventDefault();
    const name = document.getElementById("adm-name").value.trim();
    const price = Number(document.getElementById("adm-price").value) || 599;
    let selectedCategory = document.getElementById("adm-category-select").value;

    if (selectedCategory === "custom") {
      const customCatInput = document.getElementById("adm-custom-category-input").value.toLowerCase().trim();
      if (!customCatInput) { alert("Please enter a valid custom section name!"); return; }
      selectedCategory = customCatInput;
    }

    if (uploadedProductImages.length === 0) {
      alert("Please select at least 1 product photo from your gallery!");
      return;
    }

    const newDrop = {
      id: `veh-${Date.now().toString().slice(-4)}`,
      name,
      price,
      originalPrice: 999,
      images: uploadedProductImages,
      image: uploadedProductImages[0],
      sizes: ["S", "M", "L", "XL", "XXL"],
      tags: ["all", selectedCategory],
      inStock: true
    };

    try {
      if (typeof firebase !== "undefined" && firebase.firestore) {
        await firebase.firestore().collection("products").doc(newDrop.id).set(newDrop, { merge: true });
      }
    } catch (err) {
      console.error("Firestore product upload error:", err);
    }

    form.reset();
    uploadedProductImages = [];
    document.getElementById("adm-preview-container").innerHTML = "";
    document.getElementById("adm-custom-category-box")?.classList.add("hidden");
    showToast(`Published "${name}" successfully!`);
    closeAdminModal();
  });
}

function loadManageProducts() {
  const container = document.getElementById("admin-product-list");
  if (!container) return;
  
  container.innerHTML = catalogProducts.map((p, idx) => {
    const isAvailable = p.inStock !== false;
    const img = p.images ? p.images[0] : p.image;
    return `
      <div class="flex items-center justify-between p-3 bg-neutral-100 border border-black/10 rounded-xl gap-2">
        <img src="${img}" class="w-10 h-10 object-cover rounded border" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-semibold text-black truncate">${p.name}</h4>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-[10px] text-neutral-600 font-mono-code">₹</span>
            <input type="number" id="price-input-${idx}" value="${p.price}" class="w-16 bg-white border border-black/15 rounded px-2 py-0.5 text-xs font-mono-code" />
            
            <select id="stock-select-${idx}" class="bg-white border border-black/15 rounded px-2 py-0.5 text-[10px] font-mono-code ${isAvailable ? 'text-green-700 font-bold' : 'text-red-600 font-bold'}">
              <option value="true" ${isAvailable ? 'selected' : ''}>In Stock</option>
              <option value="false" ${!isAvailable ? 'selected' : ''}>Out of Stock</option>
            </select>

            <button onclick="updateProductDetails('${p.id}', ${idx})" class="px-2 py-0.5 bg-black text-white text-[10px] rounded cursor-pointer">Save</button>
          </div>
        </div>
        <button onclick="deleteProduct('${p.id}', ${idx})" class="px-3 py-1 bg-red-100 text-red-600 text-xs rounded border border-red-200 cursor-pointer">Delete</button>
      </div>
    `;
  }).join("");
}

window.updateProductDetails = async function(productId, index) {
  const newPrice = Number(document.getElementById(`price-input-${index}`).value) || 599;
  const stockValue = document.getElementById(`stock-select-${index}`).value === "true";

  try {
    if (typeof firebase !== "undefined" && firebase.firestore) {
      await firebase.firestore().collection("products").doc(productId).set({ 
        price: newPrice,
        inStock: stockValue 
      }, { merge: true });
    }
  } catch (err) { 
    console.log("Cloud update failed"); 
  }

  showToast("Product updated globally!");
};

window.deleteProduct = async function(productId, index) {
  if (confirm("Remove this drop from store?")) {
    try {
      if (typeof firebase !== "undefined" && firebase.firestore) {
        await firebase.firestore().collection("products").doc(productId).set({ hidden: true }, { merge: true });
      }
    } catch (err) { console.log("Delete failed"); }
    showToast("Product removed globally.");
  }
};

function setupHeroUploadListener() {
  document.getElementById("adm-hero-file-input")?.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        uploadedHeroBase64 = ev.target.result;
        document.getElementById("adm-hero-preview-img").src = uploadedHeroBase64;
        document.getElementById("adm-hero-preview-box").classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });
}

window.saveNewHeroBanner = async function() {
  if (!uploadedHeroBase64) { alert("Please select a photo first!"); return; }
  
  localStorage.setItem("vehraan_hero_img", uploadedHeroBase64);
  document.getElementById("hero-banner-img").src = uploadedHeroBase64;

  try {
    if (typeof firebase !== "undefined" && firebase.firestore) {
      await firebase.firestore().collection("settings").doc("heroBanner").set({ imageUrl: uploadedHeroBase64 }, { merge: true });
    }
  } catch (err) { console.log("Hero sync error"); }

  showToast("Global Hero Banner updated successfully!");
  closeAdminModal();
};

window.resetHeroBannerToDefault = async function() {
  localStorage.removeItem("vehraan_hero_img");
  document.getElementById("hero-banner-img").src = "images/front.png";

  try {
    if (typeof firebase !== "undefined" && firebase.firestore) {
      await firebase.firestore().collection("settings").doc("heroBanner").set({ imageUrl: "images/front.png" }, { merge: true });
    }
  } catch (err) { console.log("Hero reset error"); }

  showToast("Hero banner reset globally.");
  closeAdminModal();
};

window.showToast = function(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.remove("opacity-0", "translate-y-20");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-20");
  }, 2500);
};

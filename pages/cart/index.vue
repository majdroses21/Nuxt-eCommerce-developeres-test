<template>
    <NuxtLayout name="website">
        <div class="cart-page">
            <!-- Page Header -->
            <div class="bg-light py-4 mb-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col">
                            <h1 class="h2 mb-0 fw-bold">Shopping Cart</h1>
                            <nav aria-label="breadcrumb" class="mt-2">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item">
                                        <NuxtLink to="/" class="text-decoration-none">Home</NuxtLink>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-auto">
                            <span class="badge bg-primary fs-6">{{ cartStore.cartItems.length }} Items</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container pb-5">
                <!-- Empty Cart State -->
                <div v-if="cartStore.cartItems.length === 0" class="text-center py-5">
                    <div class="mb-4">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" class="text-muted">
                            <path
                                d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"
                                fill="currentColor" />
                            <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h3 class="h4 mb-3">Your cart is empty</h3>
                    <p class="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
                    <NuxtLink to="/" class="btn btn-dark btn-lg">
                        Start Shopping
                    </NuxtLink>
                </div>

                <!-- Cart Items -->
                <div v-else class="row g-4">
                    <!-- Cart Items List -->
                    <div class="col-lg-8">
                        <div class="card border-0 shadow-sm">
                            <div class="card-header bg-white border-bottom">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="mb-0 fw-bold">Cart Items</h5>
                                    </div>
                                    <div class="col-auto">
                                        <button @click="clearCart" class="btn btn-outline-danger btn-sm"
                                            :disabled="isLoading">
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body p-0">
                                <div v-for="(item, index) in cartStore.cartItems" :key="item.id"
                                    class="cart-item border-bottom p-4"
                                    :class="{ 'border-bottom-0': index === cartStore.cartItems.length - 1 }">
                                    <div class="row align-items-center g-3">
                                        <!-- Product Image -->
                                        <div class="col-md-2 col-3">
                                            <div class="product-image">
                                                <img :src="item.image" :alt="item.title" class="img-fluid rounded"
                                                    style="max-height: 80px; object-fit: contain; background: #f8f9fa;">
                                            </div>
                                        </div>

                                        <!-- Product Details -->
                                        <div class="col-md-4 col-9">
                                            <h6 class="fw-bold mb-1">{{ item.title }}</h6>
                                            <p class="text-muted small mb-1 text-capitalize">{{ item.category }}</p>
                                        </div>

                                        <!-- Price -->
                                        <div class="col-md-2 col-6">
                                            <div class="price">
                                                <strong class="text-primary">AED {{ item.price }}</strong>
                                            </div>
                                        </div>

                                        <!-- Quantity Controls -->
                                        <div class="col-md-2 col-6">
                                            <div class="quantity-controls d-flex align-items-center">
                                                <button @click="updateQuantity(item.id, item.quantity - 1)"
                                                    :disabled="item.quantity <= 1 || isLoading"
                                                    class="btn btn-outline-secondary btn-sm"
                                                    style="width: 32px; height: 32px; padding: 0;">
                                                    <svg width="16" height="16" fill="currentColor">
                                                        <path
                                                            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                    </svg>
                                                </button>
                                                <input :value="item.quantity"
                                                    @input="updateQuantity(item.id, parseInt($event.target.value) || 1)"
                                                    type="number" min="1" max="10" class="form-control text-center mx-2"
                                                    style="width: 60px; height: 32px; font-size: 14px;"
                                                    :disabled="isLoading">
                                                <button @click="updateQuantity(item.id, item.quantity + 1)"
                                                    :disabled="item.quantity >= 10 || isLoading"
                                                    class="btn btn-outline-secondary btn-sm"
                                                    style="width: 32px; height: 32px; padding: 0;">
                                                    <svg width="16" height="16" fill="currentColor">
                                                        <path
                                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Total & Remove -->
                                        <div class="col-md-2 col-12">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="item-total">
                                                    <strong>AED {{ (item.price * item.quantity).toFixed(2) }}</strong>
                                                </div>
                                                <button @click="removeItem(item.id)"
                                                    class="btn btn-outline-danger btn-sm" :disabled="isLoading">
                                                    <svg width="16" height="16" fill="currentColor">
                                                        <path
                                                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Order Summary -->
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm sticky-top" style="top: 20px;">
                            <div class="card-header bg-dark text-white">
                                <h5 class="mb-0 fw-bold">Order Summary</h5>
                            </div>
                            <div class="card-body">
                                <!-- Summary Details -->
                                <div class="order-details">
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>Subtotal ({{ cartStore.cartItems.length }} items)</span>
                                        <strong>AED {{ subtotal.toFixed(2) }}</strong>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>Shipping</span>
                                        <span class="text-success">{{ subtotal >= 200 ? 'Free' : 'AED 25.00' }}</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>VAT (5%)</span>
                                        <span>AED {{ vat.toFixed(2) }}</span>
                                    </div>
                                    <hr>
                                    <div class="d-flex justify-content-between mb-3">
                                        <strong class="h6">Total</strong>
                                        <strong class="h6 text-primary">AED {{ total.toFixed(2) }}</strong>
                                    </div>
                                </div>

                                <!-- Promo Code -->
                                <div class="promo-section mb-3">
                                    <div class="input-group">
                                        <input v-model="promoCode" type="text" class="form-control"
                                            placeholder="Promo code" :disabled="isLoading">
                                        <button @click="applyPromoCode" class="btn btn-outline-secondary"
                                            :disabled="!promoCode || isLoading">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <!-- Free Shipping Notice -->
                                <div v-if="subtotal < 200" class="alert alert-info small">
                                    <svg width="16" height="16" fill="currentColor" class="me-2">
                                        <path
                                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </svg>
                                    Add AED {{ (200 - subtotal).toFixed(2) }} more for free shipping!
                                </div>

                                <!-- Checkout Button -->
                                <div class="d-grid gap-2">
                                    <button @click="proceedToCheckout" class="btn btn-dark btn-lg"
                                        :disabled="isLoading">
                                        <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                                        Proceed to Checkout
                                    </button>
                                    <NuxtLink to="/" class="btn btn-outline-dark">
                                        Continue Shopping
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';

// Store
const cartStore = useCartStore();
// Reactive data
const isLoading = ref(false);
const promoCode = ref('');

// Computed values
const subtotal = computed(() => cartStore.getCartTotal());
const shipping = computed(() => subtotal.value >= 200 ? 0 : 25);
const vat = computed(() => subtotal.value * 0.05);
const total = computed(() => subtotal.value + shipping.value + vat.value);

// Methods
const updateQuantity = async (id, quantity) => {
    if (quantity < 1 || quantity > 10) return;

    isLoading.value = true;
    try {
        cartStore.updateCartItemQuantity({ id, quantity });
        await nextTick(); // Wait for reactivity
    } finally {
        isLoading.value = false;
    }
};

const removeItem = async (id) => {
    isLoading.value = true;
    try {
        cartStore.removeFromCart(id);
        showNotification('Item removed from cart', 'success');
        await nextTick();
    } finally {
        isLoading.value = false;
    }
};

const clearCart = async () => {
    isLoading.value = true;
    try {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                cartStore.clearCart();
                Swal.fire({
                    title: "Deleted!",
                    text: "Cart cleared successfully",
                    icon: "success"
                });
            }
        });
        await nextTick();
    } finally {
        isLoading.value = false;
    }
};

const applyPromoCode = () => {
    // Add promo code logic here
    console.log('Applying promo code:', promoCode.value);
    // showNotification('Promo code applied!', 'success');
    promoCode.value = '';
};

const proceedToCheckout = () => {
    // Add checkout logic here
    console.log('Proceeding to checkout with total:', total.value);
    // Navigate to checkout page
    // navigateTo('/checkout');
    // showNotification('Redirecting to checkout...', 'info');
};



// Load cart items on mount
onMounted(() => {
    cartStore.initializeCart();

});

// SEO
useSeoMeta({
    title: 'Shopping Cart - Developer Test Store',
    description: 'Review and manage items in your shopping cart',
    ogTitle: 'Shopping Cart',
    ogDescription: 'Review and manage items in your shopping cart'
});
</script>

<style scoped>
.cart-item {
    transition: background-color 0.2s ease;
}

.cart-item:hover {
    background-color: #f8f9fa;
}

.quantity-controls input[type="number"]::-webkit-outer-spin-button,
.quantity-controls input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.quantity-controls input[type="number"] {
    -moz-appearance: textfield;
}

.product-image {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
}

.btn:disabled {
    opacity: 0.6;
}

.stars .star {
    display: inline-block;
}

.sticky-top {
    z-index: 1020;
}

@media (max-width: 768px) {
    .cart-item .row>div {
        margin-bottom: 0.5rem;
    }

    .quantity-controls {
        justify-content: center;
    }

    .item-total {
        text-align: center;
        margin-bottom: 0.5rem;
    }
}

/* Loading animation */
.spinner-border-sm {
    width: 1rem;
    height: 1rem;
}

/* Alert styling */
.alert-info {
    background-color: #e7f3ff;
    border-color: #b3d9ff;
    color: #0066cc;
}

/* Breadcrumb styling */
.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
}
</style>
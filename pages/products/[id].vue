<template>
    <NuxtLayout name="website">
        <!-- Loading State -->
        <div v-if="pending" class="container py-5">
            <div class="text-center">
                <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading product details...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="container py-5">
            <div class="alert alert-danger text-center" role="alert">
                <h4 class="alert-heading">Error!</h4>
                <p class="mb-0">{{ error.message || 'Could not load product details.' }}</p>
                <hr>
                <NuxtLink to="/" class="btn btn-outline-danger">Back to Home</NuxtLink>
            </div>
        </div>

        <!-- Product Details -->
        <div v-else-if="product" class="container py-5">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/" class="text-decoration-none">Home</NuxtLink>
                    </li>
                    <li class="breadcrumb-item">
                        <NuxtLink :to="`/categories/${product.category}`" class="text-decoration-none text-capitalize">
                            {{ product.category }}
                        </NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
                </ol>
            </nav>

            <!-- Product Details Section -->
            <div class="row g-5">
                <!-- Product Image -->
                <div class="col-lg-6">
                    <div class="product-image-container">
                        <img :src="product.image" :alt="product.title" class="img-fluid w-100 rounded shadow-sm"
                            style="max-height: 600px; object-fit: contain; background: #f8f9fa;">
                    </div>
                </div>

                <!-- Product Info -->
                <div class="col-lg-6">
                    <div class="product-info">
                        <!-- Category Badge -->
                        <span class="badge bg-secondary text-uppercase mb-3">{{ product.category }}</span>

                        <!-- Product Title -->
                        <h1 class="display-6 fw-bold mb-3">{{ product.title }}</h1>

                        <!-- Rating -->
                        <div class="d-flex align-items-center mb-3">
                            <div class="stars me-2">
                                <span v-for="star in 5" :key="star" class="star">
                                    <i
                                        :class="star <= Math.round(product.rating.rate) ? 'bi bi-star-fill text-warning' : 'bi bi-star text-muted'"></i>
                                </span>
                            </div>
                            <span class="text-muted">({{ product.rating.count }} reviews)</span>
                        </div>

                        <!-- Price -->
                        <div class="price-section mb-4">
                            <h2 class="h3 text-primary fw-bold mb-0">AED {{ product.price }}</h2>
                            <small class="text-muted">Price includes VAT</small>
                        </div>

                        <!-- Description -->
                        <div class="description mb-4">
                            <h5 class="fw-bold mb-3">Description</h5>
                            <p class="text-muted lh-lg">{{ product.description }}</p>
                        </div>

                        <!-- Quantity Selector -->
                        <div class="quantity-section mb-4">
                            <h6 class="fw-bold mb-2">Quantity</h6>
                            <div class="d-flex align-items-center">
                                <button @click="decreaseQuantity" :disabled="quantity <= 1"
                                    class="btn btn-outline-secondary btn-sm" style="width: 40px;">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <input v-model="quantity" type="number" min="1" max="10"
                                    class="form-control text-center mx-2" style="width: 80px;">
                                <button @click="increaseQuantity" :disabled="quantity >= 10"
                                    class="btn btn-outline-secondary btn-sm" style="width: 40px;">
                                    <i class="bi bi-plus"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons mb-4">
                            <div class="d-grid gap-2 d-md-flex">
                                <button @click="addToCart" class="btn btn-dark btn-lg flex-fill me-md-2"
                                    :disabled="isAddingToCart">
                                    <i class="bi bi-cart-plus me-2"></i>
                                    {{ isAddingToCart ? 'Adding...' : 'ADD TO CART' }}
                                </button>
                                <button @click="addToWishlist" class="btn btn-outline-dark btn-lg"
                                    :class="{ 'active': isInWishlist }">
                                    <i :class="isInWishlist ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Product Features -->
                        <div class="features">
                            <div class="row g-3">
                                <div class="col-6">
                                    <div class="feature-item p-3 bg-light rounded">
                                        <i class="bi bi-truck fs-4 text-primary mb-2 d-block"></i>
                                        <small class="fw-bold">Free Delivery</small>
                                        <br>
                                        <small class="text-muted">On orders over AED 200</small>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="feature-item p-3 bg-light rounded">
                                        <i class="bi bi-arrow-clockwise fs-4 text-primary mb-2 d-block"></i>
                                        <small class="fw-bold">Easy Returns</small>
                                        <br>
                                        <small class="text-muted">30-day return policy</small>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="feature-item p-3 bg-light rounded">
                                        <i class="bi bi-shield-check fs-4 text-primary mb-2 d-block"></i>
                                        <small class="fw-bold">Secure Payment</small>
                                        <br>
                                        <small class="text-muted">100% secure checkout</small>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="feature-item p-3 bg-light rounded">
                                        <i class="bi bi-headset fs-4 text-primary mb-2 d-block"></i>
                                        <small class="fw-bold">24/7 Support</small>
                                        <br>
                                        <small class="text-muted">Customer service</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Product Not Found -->
        <div v-else class="container py-5">
            <div class="text-center">
                <i class="bi bi-exclamation-triangle fs-1 text-warning mb-3"></i>
                <h3 class="mb-3">Product Not Found</h3>
                <p class="text-muted mb-4">The product you're looking for doesn't exist or has been removed.</p>
                <NuxtLink to="/" class="btn btn-dark">Back to Home</NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
// Get route params
const { id } = useRoute().params;
// Toast
const { $showToast } = useNuxtApp();
// Store
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();

// Runtime config
const apiUrl = useRuntimeConfig().public.API_URL;

// Reactive data
const product = ref(null);
const quantity = ref(1);
const isAddingToCart = ref(false);
const isInWishlist = ref(false);

// Fetch product data
const { data, pending, error } = await useFetch(`${apiUrl}/products/${id}`, {
    key: `product-${id}`,
    onResponse({ response }) {
        console.log('Product data:', response._data);
        product.value = response._data;
    },
    onResponseError({ error }) {
        console.error('Product fetch error:', error);
    }
});

// Watch for data changes
watch(data, (newData) => {
    if (newData) {
        product.value = newData;
    }
}, { immediate: true });

// Quantity controls
const increaseQuantity = () => {
    if (quantity.value < 10) {
        quantity.value++;
    }
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

// Add to cart function
const { handelAddToState } = useStateHandler();
const addToCart = async () => {
    isAddingToCart.value = true;

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Add your cart logic here
        console.log('Adding to cart:', {
            product: product.value,
            quantity: quantity.value
        });
        handelAddToState(product, 'cart');

    } catch (error) {
        console.error('Error adding to cart:', error);
    } finally {
        isAddingToCart.value = false;
    }
};

// Add to wishlist function
const addToWishlist = () => {
    handelAddToState(product, 'wishlist');
    // isInWishlist.value = !isInWishlist.value;

};


// SEO and meta tags
import appConfig from '~/app.config';
useSeoMeta({
    title: () => product.value ? `${product.value.title} - ${appConfig.siteName}` : 'Product Details',
    description: () => product.value ? product.value.description : 'Product details page',
    ogTitle: () => product.value ? product.value.title : 'Product Details',
    ogDescription: () => product.value ? product.value.description : 'Product details page',
    ogImage: () => product.value ? product.value.image : '',
    ogType: 'product'
});

// Structured data for SEO
useHead({
    script: [
        {
            type: 'application/ld+json',
            children: () => product.value ? JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": product.value.title,
                "image": product.value.image,
                "description": product.value.description,
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "AED",
                    "price": product.value.price,
                    "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": product.value.rating.rate,
                    "reviewCount": product.value.rating.count
                }
            }) : '{}'
        }
    ]
});
</script>

<style scoped>
.product-image-container {
    position: sticky;
    top: 20px;
}

.stars .star {
    font-size: 1.1rem;
}

.quantity-section input[type="number"]::-webkit-outer-spin-button,
.quantity-section input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.quantity-section input[type="number"] {
    -moz-appearance: textfield;
}

.feature-item {
    transition: transform 0.2s ease;
    text-align: center;
}

.feature-item:hover {
    transform: translateY(-2px);
}

.btn:disabled {
    opacity: 0.6;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
}

.product-info {
    padding-left: 2rem;
}

@media (max-width: 991px) {
    .product-info {
        padding-left: 0;
        margin-top: 2rem;
    }
}

/* Wishlist button active state */
.btn.active {
    background-color: #dc3545;
    border-color: #dc3545;
    color: white;
}
</style>
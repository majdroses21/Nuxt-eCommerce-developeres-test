<template>
  <NuxtLayout name="website">
    <!-- Header Section with Category Image -->
    <div class="category-header position-relative mb-5">
      <div class="header-image-container">
        <img 
          :src="getCategoryImage(slug)" 
          :alt="getCategoryDisplayName(slug)"
          class="img-fluid w-100"
          style="height: 300px; object-fit: cover;"
        >
        <div class="header-overlay d-flex align-items-center justify-content-center">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bold mb-2">{{ getCategoryDisplayName(slug) }}</h1>
            <p class="lead mb-0">Discover our exclusive collection of {{ getCategoryDisplayName(slug) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <div class="container">
      <!-- Loading State -->
      <div v-if="pending" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Loading products...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger text-center" role="alert">
        <h4 class="alert-heading">An error occurred!</h4>
        <p class="mb-0">{{ error.message || 'We are unable to load products at this time.' }}</p>
      </div>

      <!-- Products Grid -->
      <div v-else-if="categoryProducts && categoryProducts.length > 0">
        <!-- Products Count -->
        <div class="row mb-4">
          <div class="col-12">
            <h3 class="h5 text-muted">
             {{ categoryProducts.length }}  products found in {{ getCategoryDisplayName(slug) }}
            </h3>
          </div>
        </div>

        <!-- Products Loop -->
        <div class="row g-4">
          <div 
            v-for="product in categoryProducts" 
            :key="product.id"
            class="col-lg-3 col-md-4 col-sm-6"
          >
            <ProductCard 
              :image="product.image"
              :title="product.title"
              :id="product.id"
              :new-price="product.price"
              :description="product.description"
              :rating="product.rating"
              @add-to-cart="handleAddToCart(product)"
              @add-to-wishlist="handleAddToWishlist(product)"
            />
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-5">
        <div class="mb-4">
          <i class="bi bi-box-seam fs-1 text-muted"></i>
        </div>
        <h3 class="h4 mb-3">No products found</h3>
        <p class="text-muted mb-4">We couldn't find any products in this category at the moment.</p>
        <NuxtLink to="/" class="btn btn-dark">
          <i class="bi bi-house-door me-2"></i>
          Back to Home Page
        </NuxtLink>
      </div>
    </div>
    <br>
  </NuxtLayout>
</template>

<script setup>

// Get route params
const { slug } = useRoute().params;

// Runtime config
const apiUrl = useRuntimeConfig().public.API_URL;

// Reactive data
const categoryProducts = ref([]);

// Store
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();

// Fetch data with better error handling
const { data, pending, error, refresh } = await useFetch(`${apiUrl}/products/category/${slug}`, {
  key: `category-${slug}`,
  onResponse({ response }) {
    console.log('API Response:', response._data);
    categoryProducts.value = response._data
  },
  onResponseError({ error }) {
    console.error('API Error:', error);
  }
});

// Watch for data changes
watch(data, (newData) => {
  if (newData) {
    categoryProducts.value = newData;
  }
}, { immediate: true });

// Helper function to get category display name
const getCategoryDisplayName = (categorySlug) => {
  const categoryNames = {
    'electronics': 'Electronics',
    'jewelery': 'Jewelery',
    'men\'s clothing': "Men's Clothing",
    'women\'s clothing': "Women's Clothing"
  };
  
  return categoryNames[categorySlug] || categorySlug;
};

// Helper function to get category image
const getCategoryImage = (categorySlug) => {
  const categoryImages = {
    'electronics': '../_nuxt/assets/Images/Header.jpg',
    'jewelery': '../_nuxt/assets/Images/Jewelry.jpg',
    'men\'s clothing': '../_nuxt/assets/Images/Untitled-1.jpg',
    'women\'s clothing': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MbO0uGBXcolIGjA6Y0zDujIl5PF8T9-XAtfCo2gM6KW5cZXi4QpbfJ9tek7ykrYLsW8&usqp=CAU'
  };
  
  return categoryImages[categorySlug] || 'https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?semt=ais_hybrid&w=740';
};

// Event handlers
const handleAddToCart = (product) => {
  console.log('Adding to cart:', product);
  cartStore.addToCart(product)
  
  // Show success message
  showNotification('The product has been successfully added to the cart!', 'success');
};

const handleAddToWishlist = (product) => {
  console.log('Adding to wishlist:', product);
  // Add your wishlist logic here
  // Example: useWishlistStore().addItem(product)
  
  // Show success message
  showNotification('The product has been successfully added to the cart!', 'success');
};

// Notification helper function
const showNotification = (message, type = 'info') => {
  // You can use a toast library or custom notification system
  console.log(`${type.toUpperCase()}: ${message}`);
  
  // Example with browser notification (optional)
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(message);
  }
};

// Page title for browser tab
useHead({
  title: `${getCategoryDisplayName(slug)}`
});
</script>

<style scoped>
.category-header {
  position: relative;
  overflow: hidden;
}

.header-image-container {
  position: relative;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.header-overlay h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.header-overlay p {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Product card hover effects */
.col-lg-3:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header-overlay h1 {
    font-size: 2rem !important;
  }
  
  .header-overlay p {
    font-size: 1rem !important;
  }
}

/* Loading spinner enhancement */
.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Empty state styling */
.bi-box-seam {
  opacity: 0.3;
}
</style>
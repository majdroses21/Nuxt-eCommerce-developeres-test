<template>
  <div class="product-card position-relative overflow-hidden rounded-3">
    <div class="product-image-container position-relative">
      <img 
        :src="image" 
        :alt="title" 
        class="product-image w-100 h-100 object-fit-cover"
      />
      
      <!-- Overlay that appears on hover -->
      <div class="product-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="overlay-buttons d-flex gap-3">
          <button 
            @click="addToCart"
            class="btn btn-primary btn-overlay px-4 py-2 fw-semibold"
          >
            Add to Cart
          </button>
          <button 
            @click="addToWishlist"
            class="btn btn-outline-light btn-overlay-heart p-2"
          >
            <img 
              src="../../assets/Images/Icons/heart_11613265.png" 
              alt="Add to wishlist" 
              class="heart-icon"
              width="20" 
              height="20"
            />
          </button>
        </div>
      </div>
    </div>
    
    <NuxtLink :to="'/products/' + id" class="product-info p-3 text-center">
      <span class="product-title mb-2 text-dark fw-normal">{{ title }}</span>
      <div class="product-pricing d-flex align-items-center justify-content-center gap-2">
        <span class="current-price fw-bold text-dark fs-5">{{ currency }} </span>
        <span class="old-price text-muted text-decoration-line-through" v-if="oldPrice">{{ oldPrice }}</span>
        <span class="current-price fw-bold text-dark fs-5">{{ newPrice }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  oldPrice: {
    type: [String, Number],
    required: true
  },
  newPrice: {
    type: [String, Number],
    required: true
  },
  currency: {
    type: String,
    default: 'AED'
  }
})

const emit = defineEmits(['add-to-cart', 'add-to-wishlist'])

const addToCart = () => {
  emit('add-to-cart', {
    title: props.title,
    price: props.newPrice,
    image: props.image
  })
}

const addToWishlist = () => {
  emit('add-to-wishlist', {
    title: props.title,
    price: props.newPrice,
    image: props.image
  })
}
</script>

<style scoped>
.product-card {
  background: white;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
}

.product-image-container {
  box-shadow: 0 10px 30px rgba(0,0,0,0.30) !important;
  border: 1px solid #f0f0f0;
  height: 350px;
  overflow: hidden;
}

.product-image {
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}
.product-info{
   cursor: pointer;
   text-decoration: none;
  background-color: transparent !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

.product-overlay {
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.overlay-buttons {
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.product-card:hover .overlay-buttons {
  transform: translateY(0);
}

.btn-overlay {
  border-radius: 25px;
  border: 2px solid white;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.btn-overlay:hover {
  transform: scale(1.05);
}

.btn-overlay-heart {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-overlay-heart:hover {
  background: rgba(255, 255, 255, 0.2);
}

.heart-icon {
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;
}

.btn-overlay-heart:hover .heart-icon {
  transform: scale(1.2);
}

.product-title {
  text-decoration: underline;
  font-size: 1rem;
  color: #333 !important;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.current-price {
  color: #000 !important;
  font-size: 1.1rem;
}

.old-price {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .product-image-container {
    height: 200px;
  }
  
  .product-title {
    font-size: 0.9rem;
    min-height: 40px;
  }
  
  .current-price {
    font-size: 1rem;
  }
}
</style>
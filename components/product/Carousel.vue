<template>
  <section class="special-offers py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title mb-4 fw-bold text-dark">{{ title }}</h2>
          
          <!-- Carousel -->
          <div v-if="isMounted" id="productsCarousel" class="carousel slide" data-bs-ride="carousel">
            <!-- Carousel Inner -->
            <div class="carousel-inner">
              <div 
                v-for="(slide, index) in slides" 
                :key="index"
                :class="['carousel-item', { 'active': index === 0 }]"
              >
                <div class="row g-4">
                  <!-- Large screens: 4 products per slide -->
                  <div 
                    v-for="(product, productIndex) in slide" 
                    :key="productIndex"
                    class="col-lg-3 col-md-6 col-12"
                  >
                    <ProductCard
                      :id="product.id"
                      :image="product.image"
                      :title="product.title"
                      :old-price="product.oldPrice"
                      :new-price="product.newPrice"
                      :currency="product.currency"
                      @add-to-cart="handleAddToCart"
                      @add-to-wishlist="handleAddToWishlist"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Carousel Controls -->
            <button v-if="showBtns"
              class="carousel-control-prev" 
              type="button" 
              data-bs-target="#productsCarousel" 
              data-bs-slide="prev"
            >
              <div class="carousel-control-icon carousel-control-prev-icon">
                <i class="fas fa-arrow-left"></i>
              </div>
              <span class="visually-hidden">Previous</span>
            </button>
            
            <button v-if="showBtns"
              class="carousel-control-next" 
              type="button" 
              data-bs-target="#productsCarousel" 
              data-bs-slide="next"
            >
              <div class="carousel-control-icon carousel-control-next-icon">
                <i class="fas fa-arrow-right"></i>
              </div>
              <span class="visually-hidden">Next</span>
            </button>
            
            <!-- Carousel Indicators -->
            <div class="carousel-indicators">
              <button 
                v-for="(slide, index) in slides"
                :key="index"
                type="button" 
                data-bs-target="#productsCarousel" 
                :data-bs-slide-to="index"
                :class="{ 'active': index === 0 }"
                :aria-current="index === 0 ? 'true' : 'false'"
                :aria-label="`Slide ${index + 1}`"
              ></button>
            </div>
          </div>
          <!-- Loading placeholder -->
          <div v-else class="text-center py-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const isMounted = ref(false)

const props = defineProps({
  title: {
    type: String,
    default: 'SPECIAL OFFERS'
  },
  id: {
    type: Number
  },
  products: {
    type: Array,
    required: true
  },
  showBtns: {
    type: Boolean,
    default: true,
    required: false
  }
})

const emit = defineEmits(['product-add-to-cart', 'product-add-to-wishlist'])

const slides = computed(() => {
  const productsPerSlide = 4
  const slides = []
  
  for (let i = 0; i < props.products.length; i += productsPerSlide) {
    slides.push(props.products.slice(i, i + productsPerSlide))
  }
  
  return slides
})

const handleAddToCart = (product) => {
  emit('product-add-to-cart', product)
}

const handleAddToWishlist = (product) => {
  emit('product-add-to-wishlist', product)
}

// Initialize carousel after component mount
onMounted(async () => {
  if (process.client) {
    const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js')
    isMounted.value = true
    nextTick(() => {
      new bootstrap.default.Carousel(document.getElementById('productsCarousel'))
    })
  }
})
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  color: #333;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  text-align: left;
}

.carousel {
  position: relative;
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border: solid #000 2px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.carousel-control-prev {
  left: -25px;
}

.carousel-control-next {
  right: -25px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.carousel-control-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev-icon i,
.carousel-control-next-icon i {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.carousel-indicators {
  bottom: -50px;
  margin-bottom: 0;
}

.carousel-indicators button {
  background-color: #ccc;
  margin: 0 5px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background-color: #333;
  opacity: 1;
  transform: scale(1.2);
}

.carousel-indicators button:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
  }
  
  .carousel-control-prev {
    left: -20px;
  }
  
  .carousel-control-next {
    right: -20px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
  
  .carousel-indicators {
    bottom: -30px;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .special-offers {
    padding: 2rem 0;
  }
}
</style>
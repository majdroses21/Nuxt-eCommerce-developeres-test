<template>
   <NuxtLayout name="website">
      <HomeHeroSection />
      <!-- Jewelry Ad -->
      <HomeAd :showButton="true" />
      <!-- Special Offers -->
      <ProductCarousel title="SPECIAL OFFERS" :products="specialOffers" @product-add-to-cart="handleAddToCart"
         @product-add-to-wishlist="handleAddToWishlist" />
      <br>
      <!-- Boy Ad -->
      <HomeAd :showButton="false" :imageSource="AdImg" />
      <br>
      <!-- New Arrivals -->
      <ProductCarousel :showBtns="false" title="NEW ARRIVALS" :products="newArrivals"
         @product-add-to-cart="handleAddToCart" @product-add-to-wishlist="handleAddToWishlist" />
      <br>
      <!-- Signup Ad  -->
       <HomeSignupAd/>
   </NuxtLayout>
</template>
<script setup>
// Products images
import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';
import img4 from '../assets/Images/4.jpg';
import imgD from '../assets/Images/D.png';
import imgF from '../assets/Images/F.png';
import imgG from '../assets/Images/G.png';
import imgH from '../assets/Images/H.png';
import AdImg from '../assets/Images/Untitled-1.jpg';
// Products Data
const specialOffers = ref([
   {
      id: 1,
      image: img1,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 2,
      image: img2,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 3,
      image: img3,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 4,
      image: img4,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 5,
      image: imgD,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 6,
      image: imgF,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 7,
      image: imgG,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 8,
      image: imgH,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   }
])
const newArrivals = ref([
   {
      id: 1,
      image: imgD,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 2,
      image: imgF,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 3,
      image: imgG,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 4,
      image: imgH,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 5,
      image: img1,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 6,
      image: img2,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 7,
      image: img3,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 8,
      image: img4,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   }
])

// Store
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();
// Add to cart
const handleAddToCart = (product) => {
   console.log('تم إضافة المنتج للسلة:', product)
   //TODO Add to cart logic
   cartStore.addToCart(product)
   // TODO Toast Success
   alert(`تم إضافة ${product.title} للسلة بنجاح!`)
}

// Add to Fav
const handleAddToWishlist = (product) => {
   console.log('تم إضافة المنتج للمفضلات:', product)

   alert(`تم إضافة ${product.title} للمفضلات بنجاح!`)
}

// Head configuration for Nuxt
useHead({
   link: [
      {
         rel: 'stylesheet',
         href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
      }
   ]
})
</script>
<style scoped src="../assets/css/products.css"></style>
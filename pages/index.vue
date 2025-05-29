<template>
   <NuxtLayout name="website">
      <HomeHeroSection />
      <!-- Jewelry Ad -->
      <HomeAd :imageSource="JewelryAdImg" :showButton="true" />
      <!-- Special Offers -->
      <ProductCarousel title="SPECIAL OFFERS" :products="specialOffers" @product-add-to-cart="handleAddToCart"
         @product-add-to-wishlist="handleAddToWishlist" />
      <br>
      <!-- Boy Ad -->
      <HomeAd :showButton="false" :imageSource="BoyAdImg" />
      <br>
      <!-- New Arrivals -->
      <ProductCarousel :showBtns="false" title="NEW ARRIVALS" :products="newArrivals"
         @product-add-to-cart="handleAddToCart" @product-add-to-wishlist="handleAddToWishlist" />
      <br>
      <!-- Signup Ad  -->
      <HomeSignupAd />
   </NuxtLayout>
</template>
<script setup>
// Toast
const { $showToast } = useNuxtApp()
// Products images
import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';
import img4 from '../assets/Images/4.jpg';
import imgD from '../assets/Images/D.png';
import imgF from '../assets/Images/F.png';
import imgG from '../assets/Images/G.png';
import imgH from '../assets/Images/H.png';
import BoyAdImg from '../assets/Images/Untitled-1.jpg';
import JewelryAdImg from '../assets/Images/Jewelry.jpg';
// Products Data
const specialOffers = ref([
   {
      id: 21,
      image: img1,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 22,
      image: img2,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 23,
      image: img3,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 24,
      image: img4,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 25,
      image: imgD,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 26,
      image: imgF,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 27,
      image: imgG,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 28,
      image: imgH,
      title: 'Lorem ipsum dolor',
      oldPrice: '899.00',
      newPrice: '800.00',
      currency: 'AED'
   }
])
const newArrivals = ref([
   {
      id: 29,
      image: imgD,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 30,
      image: imgF,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 31,
      image: imgG,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 32,
      image: imgH,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 33,
      image: img1,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 34,
      image: img2,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 35,
      image: img3,
      title: 'Lorem ipsum dolor',
      newPrice: '800.00',
      currency: 'AED'
   },
   {
      id: 36,
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
   cartStore.initializeCart();
   cartStore.addToCart(product)
   $showToast("Added To Cart", "success");
}

// Add to Fav
const handleAddToWishlist = (product) => {
   console.log('تم إضافة المنتج للمفضلات:', product)

   alert(`تم إضافة ${product.title} للمفضلات بنجاح!`)
}
</script>
<style scoped src="../assets/css/products.css"></style>
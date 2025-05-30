<template>
  <!-- Footer -->
  <footer class=" text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 center-on-mob Logo">
          <img src="../../assets/Images/Icons/Logo-light.png" alt="Developer Test Logo" class="img-fluid mb-3"
            style="max-height: 200px;">
        </div>
        <div class="col-md-3 mt-5">
          <ul class="list-unstyled">
            <li><NuxtLink to="#" class="li-links">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="li-links">About us</NuxtLink></li>
            <li><NuxtLink to="#" class="li-links">Media center</NuxtLink></li>
            <li><NuxtLink to="contact" class="li-links">Contact Us</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-3 mt-5">
          <ul class="list-unstyled">
            <li><NuxtLink to="/categories/electronics" class="li-links">Electronics</NuxtLink></li>
            <li><NuxtLink to="/categories/jewelery" class="li-links">Jewelry</NuxtLink></li>
            <li><NuxtLink to="/categories/men's clothing" class="li-links">Men Clothing</NuxtLink></li>
            <li><NuxtLink to="/categories/women's clothing" class="li-links">Women Clothing</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-3 mt-5">
          <h5 class="font-bold mb-3">Contact us</h5>
          <ul class="list-unstyled">
            <li>
              <a style="all: unset; cursor: pointer;" href="tel:+963994527408">+963 994 527 408</a>
            </li>
            <li>
              <a style="all: unset; cursor: pointer;" href="tel:+963940195646">+963 940 195 646</a>
            </li>
            <li> <a style="all: unset;cursor: pointer;" href="mailto:majdroses@gmail.com">majdroses@gmail.com</a></li>
            
          </ul>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-sm-4 col-lg-2  text-end mb-2 center-on-mob">
          <a target="_blank" href="https://www.facebook.com/share/1GZb3GycLH/" class="text-white me-3 icons-nav">
            <img src="../../assets/Images/Icons/facebook_Gold.png" alt="Facebook Image">
          </a>
          <a target="_blank" href="https://youtube.com/" class="text-white me-3 icons-nav">
            <img src="../../assets/Images/Icons/Youtube - Gold.png" alt="Youtube Image">
          </a>
          <a target="_blank" href="https://www.instagram.com/majdroses21" class="text-white me-3 icons-nav">
            <img src="../../assets/Images/Icons/instagram_Gold.png" alt="instagram Image">
          </a>
          <a target="_blank" href="https://x.com/majdroses21" class="text-white me-3 icons-nav">
            <img src="../../assets/Images/Icons/Twitter - Gold.png" alt="X Twitter Image">
          </a>
        </div>
      </div>
       <hr style="height: 1.5px; border:1px solid #fff; background-color: #fff;">
      <p class="mt-4 text-center" style="margin-bottom: -30px;">© Developer Test {{ new Date().getFullYear() }}. All Rights Reserved</p>
    </div>
  </footer>
</template>
<style scoped>
footer{
  background-color: #000;
}
/* Icons */
.icons-nav>img {
  width: 25px;
  height: 25px;
}

.icons-nav {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
/* Footer Links */
.li-links{
  color: rgb(230, 229, 229);
  text-decoration: none;
}
.list-unstyled > li{
  margin-bottom: 1rem !important;
}
@media (max-width: 440px) {
  /* Logo */
  .center-on-mob {
    text-align: center !important;
  }
}
@media (min-width: 768px) and (max-width: 900px) {
  /* Logo */
  .Logo {
    margin-top: 60px;
    margin-left: -25px;
  }
}

</style>
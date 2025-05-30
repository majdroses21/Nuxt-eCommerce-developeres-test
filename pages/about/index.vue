<template>
  <NuxtLayout name="website">
    <!-- Hero Section -->
    <section class="hero-section bg-light py-5">
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold text-dark mb-4">About Our Store</h1>
            <p class="lead text-muted mb-4">
              We are your trusted destination for premium electronics, jewelry, and lifestyle products. 
              With years of experience in retail excellence, we bring you quality products at unbeatable prices.
            </p>
            <div class="d-flex gap-3">
              <div class="stat-item">
                <h3 class="h2 fw-bold text-primary mb-0">10+</h3>
                <p class="text-muted small mb-0">Years Experience</p>
              </div>
              <div class="stat-item">
                <h3 class="h2 fw-bold text-primary mb-0">50K+</h3>
                <p class="text-muted small mb-0">Happy Customers</p>
              </div>
              <div class="stat-item">
                <h3 class="h2 fw-bold text-primary mb-0">1000+</h3>
                <p class="text-muted small mb-0">Products</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="position-relative">
              <div class="bg-dark rounded-3 p-4" style="min-height: 300px;">
                <div class="d-flex align-items-center justify-content-center h-100">
                  <i class="bi bi-shop display-1 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h1 fw-bold mb-4">Our Story</h2>
            <p class="lead text-muted mb-5">
              Founded with a vision to make premium products accessible to everyone, 
              we've grown from a small local store to a trusted retail destination.
            </p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                  <i class="bi bi-award text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-3">Quality First</h4>
                <p class="text-muted">We carefully select each product to ensure it meets our high standards of quality and durability.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                  <i class="bi bi-people text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-3">Customer Focused</h4>
                <p class="text-muted">Your satisfaction is our priority. We provide exceptional service and support for every purchase.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body text-center p-4">
                <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                  <i class="bi bi-lightning text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-3">Innovation</h4>
                <p class="text-muted">We stay ahead of trends to bring you the latest and most innovative products in the market.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center mb-5">
            <h2 class="h1 fw-bold mb-4">Meet Our Team</h2>
            <p class="lead text-muted">
              Our dedicated team works tirelessly to bring you the best shopping experience.
            </p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="bg-secondary rounded-circle mx-auto mb-3" style="width: 80px; height: 80px; background: linear-gradient(135deg, #6c757d, #495057);">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <i class="bi bi-person text-white fs-2"></i>
                  </div>
                </div>
                <h5 class="fw-bold mb-1">Sarah Johnson</h5>
                <p class="text-muted small mb-2">Founder & CEO</p>
                <p class="text-muted small">Leading our vision with passion and dedication.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="bg-secondary rounded-circle mx-auto mb-3" style="width: 80px; height: 80px; background: linear-gradient(135deg, #6c757d, #495057);">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <i class="bi bi-person text-white fs-2"></i>
                  </div>
                </div>
                <h5 class="fw-bold mb-1">Mike Chen</h5>
                <p class="text-muted small mb-2">Product Manager</p>
                <p class="text-muted small">Curating the best products for our customers.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="bg-secondary rounded-circle mx-auto mb-3" style="width: 80px; height: 80px; background: linear-gradient(135deg, #6c757d, #495057);">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <i class="bi bi-person text-white fs-2"></i>
                  </div>
                </div>
                <h5 class="fw-bold mb-1">Emma Wilson</h5>
                <p class="text-muted small mb-2">Customer Service</p>
                <p class="text-muted small">Ensuring every customer has a great experience.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="bg-secondary rounded-circle mx-auto mb-3" style="width: 80px; height: 80px; background: linear-gradient(135deg, #6c757d, #495057);">
                  <div class="d-flex align-items-center justify-content-center h-100">
                    <i class="bi bi-person text-white fs-2"></i>
                  </div>
                </div>
                <h5 class="fw-bold mb-1">David Brown</h5>
                <p class="text-muted small mb-2">Tech Specialist</p>
                <p class="text-muted small">Expert knowledge in all our tech products.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h1 fw-bold mb-4">Ready to Shop?</h2>
            <p class="lead text-muted mb-4">
              Discover our amazing collection of electronics, jewelry, and lifestyle products.
            </p>
            <div class="d-flex gap-3 justify-content-center flex-wrap">
              <NuxtLink to="/" class="btn btn-dark btn-lg px-4">
                Shop Now
              </NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline-dark btn-lg px-4">
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.min-vh-50 {
  min-height: 50vh;
}

.stat-item {
  text-align: center;
  padding: 0 1rem;
}

.hero-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
}

@media (max-width: 768px) {
  .stat-item {
    padding: 0 0.5rem;
  }
  
  .display-4 {
    font-size: 2.5rem;
  }
}
</style>
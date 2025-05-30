<template>
  <NuxtLayout name="website">
    <!-- Hero Section -->
    <section class="hero-section bg-dark text-white py-5">
      <div class="container">
        <div class="row align-items-center min-vh-40">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">Get In Touch</h1>
            <p class="lead mb-4">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div class="row g-3">
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <div class="bg-primary bg-opacity-20 rounded-circle p-2 me-3">
                    <i class="bi bi-telephone text-primary"></i>
                  </div>
                  <div>
                    <p class="mb-0 small text-light">Call Us</p>
                    <p class="mb-0 fw-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <div class="bg-primary bg-opacity-20 rounded-circle p-2 me-3">
                    <i class="bi bi-envelope text-primary"></i>
                  </div>
                  <div>
                    <p class="mb-0 small text-light">Email Us</p>
                    <p class="mb-0 fw-semibold">hello@ourstore.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bg-white bg-opacity-10 rounded-3 p-4">
              <div class="d-flex align-items-center justify-content-center" style="min-height: 250px;">
                <i class="bi bi-chat-dots display-1 text-white opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4 p-lg-5">
                <h2 class="h3 fw-bold mb-4">Send us a Message</h2>
                <form @submit.prevent="submitForm">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="firstName" class="form-label fw-semibold">First Name</label>
                      <input 
                        type="text" 
                        class="form-control form-control-lg" 
                        id="firstName" 
                        v-model="form.firstName"
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label fw-semibold">Last Name</label>
                      <input 
                        type="text" 
                        class="form-control form-control-lg" 
                        id="lastName" 
                        v-model="form.lastName"
                        required
                      >
                    </div>
                    <div class="col-12">
                      <label for="email" class="form-label fw-semibold">Email Address</label>
                      <input 
                        type="email" 
                        class="form-control form-control-lg" 
                        id="email" 
                        v-model="form.email"
                        required
                      >
                    </div>
                    <div class="col-12">
                      <label for="phone" class="form-label fw-semibold">Phone Number</label>
                      <input 
                        type="tel" 
                        class="form-control form-control-lg" 
                        id="phone" 
                        v-model="form.phone"
                      >
                    </div>
                    <div class="col-12">
                      <label for="subject" class="form-label fw-semibold">Subject</label>
                      <select 
                        class="form-select form-select-lg" 
                        id="subject" 
                        v-model="form.subject"
                        required
                      >
                        <option value="">Choose a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Product Support</option>
                        <option value="returns">Returns & Exchanges</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label fw-semibold">Message</label>
                      <textarea 
                        class="form-control" 
                        id="message" 
                        rows="5" 
                        v-model="form.message"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button 
                        type="submit" 
                        class="btn btn-dark btn-lg px-4"
                        :disabled="isSubmitting"
                      >
                        <span v-if="isSubmitting">
                          <i class="bi bi-arrow-repeat spinning me-2"></i>Sending...
                        </span>
                        <span v-else>
                          Send Message <i class="bi bi-arrow-right ms-2"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-4">
            <div class="sticky-lg-top" style="top: 2rem;">
              <!-- Contact Details -->
              <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4">
                  <h3 class="h5 fw-bold mb-4">Contact Information</h3>
                  
                  <div class="contact-item mb-3">
                    <div class="d-flex align-items-start">
                      <div class="bg-primary bg-opacity-10 rounded-circle p-2 me-3 mt-1">
                        <i class="bi bi-geo-alt text-primary"></i>
                      </div>
                      <div>
                        <h6 class="fw-semibold mb-1">Address</h6>
                        <p class="text-muted mb-0 small">123 Shopping Street<br>City Center, State 12345</p>
                      </div>
                    </div>
                  </div>

                  <div class="contact-item mb-3">
                    <div class="d-flex align-items-start">
                      <div class="bg-primary bg-opacity-10 rounded-circle p-2 me-3 mt-1">
                        <i class="bi bi-telephone text-primary"></i>
                      </div>
                      <div>
                        <h6 class="fw-semibold mb-1">Phone</h6>
                        <p class="text-muted mb-0 small">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div class="contact-item mb-3">
                    <div class="d-flex align-items-start">
                      <div class="bg-primary bg-opacity-10 rounded-circle p-2 me-3 mt-1">
                        <i class="bi bi-envelope text-primary"></i>
                      </div>
                      <div>
                        <h6 class="fw-semibold mb-1">Email</h6>
                        <p class="text-muted mb-0 small">hello@ourstore.com</p>
                      </div>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="d-flex align-items-start">
                      <div class="bg-primary bg-opacity-10 rounded-circle p-2 me-3 mt-1">
                        <i class="bi bi-clock text-primary"></i>
                      </div>
                      <div>
                        <h6 class="fw-semibold mb-1">Hours</h6>
                        <p class="text-muted mb-1 small">Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p class="text-muted mb-0 small">Sat - Sun: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- FAQ Link -->
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4 text-center">
                  <i class="bi bi-question-circle display-6 text-primary mb-3"></i>
                  <h5 class="fw-bold mb-2">Have Questions?</h5>
                  <p class="text-muted small mb-3">Check out our frequently asked questions for quick answers.</p>
                  <NuxtLink to="/faq" class="btn btn-outline-primary">
                    View FAQ <i class="bi bi-arrow-right ms-1"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center mb-4">
              <h2 class="h3 fw-bold">Find Our Store</h2>
              <p class="text-muted">Visit us at our physical location</p>
            </div>
            <div class="card border-0 shadow-sm">
              <div class="card-body p-0">
                <!-- Placeholder for map -->
                <div class="bg-secondary d-flex align-items-center justify-content-center text-white" style="height: 400px;">
                  <div class="text-center">
                    <i class="bi bi-map display-4 mb-3"></i>
                    <p class="mb-0">Interactive Map Goes Here</p>
                    <small class="text-light">123 Shopping Street, City Center</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Submit form function
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Show success message (you can implement toast notification here)
    alert('Thank you for your message! We\'ll get back to you soon.')
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Meta tags
useHead({
  title: 'Contact Us - Our Store',
  meta: [
    { name: 'description', content: 'Get in touch with us. We\'d love to hear from you and help with any questions you may have.' }
  ]
})
</script>

<style scoped>
.min-vh-40 {
  min-height: 40vh;
}

.hero-section {
  background: linear-gradient(135deg, #212529 0%, #495057 100%);
}

.contact-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid #f8f9fa;
}

.contact-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus,
.form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
  
  .sticky-lg-top {
    position: static !important;
  }
}
</style>
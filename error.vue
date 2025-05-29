<template>
    <div class="error-page">
        <!-- Error Content -->
        <div class="error-container">
            <div class="error-content">
                <h1 class="error-number">{{ error.statusCode }}</h1>
                <h2 class="error-title">{{ getErrorTitle() }}</h2>
                <p class="error-description">{{ getErrorMessage() }}</p>
            </div>
        </div>
        <!-- Action Buttons -->
        <div class="btn-container d-flex flex-wrap justify-content-center gap-3 mt-4">
            <NuxtLink to="/" class="btn btn-primary">
                <i class="fas fa-home me-2"></i>
                Back to Home
            </NuxtLink>
            <button class="btn btn-outline-dark" @click="$router.go(-1)">
                <i class="fas fa-arrow-left me-2"></i>
                Go Back
            </button>
            <NuxtLink to="/contact" class="btn btn-outline-dark">
                <i class="fas fa-headset me-2"></i>
                Contact Us
            </NuxtLink>
        </div>


    </div>
</template>

<script setup>
// Props from Nuxt error handling
const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})

// Page metadata
useHead({
    title: `Error ${props.error.statusCode}`,
    meta: [
        { name: 'description', content: 'Page not found or server error' }
    ]
})

// Methods
const getErrorTitle = () => {
    switch (props.error.statusCode) {
        case 404:
            return "Oops! Page Not Found"
        case 500:
            return "Internal Server Error"
        case 403:
            return "Access Forbidden"
        default:
            return "Something Went Wrong"
    }
}

const getErrorMessage = () => {
    switch (props.error.statusCode) {
        case 404:
            return "The page you're looking for might have been moved, deleted, or doesn't exist. Don't worry, you can go back to our homepage or search for what you need."
        case 500:
            return "We're experiencing some technical difficulties. Our team has been notified and is working to fix the issue. Please try again later."
        case 403:
            return "You don't have permission to access this resource. Please check your credentials or contact support if you believe this is an error."
        default:
            return "An unexpected error occurred. Please try refreshing the page or contact our support team if the problem persists."
    }
}

// Clear error and redirect to homepage
const clearError = () => {
    clearError()
    navigateTo('/')
}
</script>

<style scoped>
.error-page {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    min-height: 100vh;
    overflow-x: hidden;
}

.navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}


.error-container {
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 100px;
}

.error-content {
    text-align: center;
    position: relative;
    z-index: 2;
}

.error-number {
    font-size: clamp(8rem, 15vw, 12rem);
    font-weight: 800;
    background: linear-gradient(135deg, #000 0%, #555 50%, #000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin: 0;
    position: relative;
    animation: glitch 3s infinite;
}

.error-title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #333;
    margin: 1rem 0;
}

.error-description {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.btn-primary {
    background: linear-gradient(135deg, #000 0%, #333 100%);
    border: none;
    padding: 12px 30px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #333 0%, #000 100%);
    color: white;
}

.btn-outline-dark {
    border: 2px solid #000;
    color: #000;
    padding: 10px 25px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    margin: 0 10px;
    text-decoration: none;
}

.btn-outline-dark:hover {
    background: #000;
    color: white;
    transform: translateY(-2px);
}

@keyframes glitch {

    0%,
    100% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-2px);
    }

    40% {
        transform: translateX(2px);
    }

    60% {
        transform: translateX(-1px);
    }

    80% {
        transform: translateX(1px);
    }
}


@media (max-width: 768px) {
    .error-description {
        font-size: 1rem;
        padding: 0 1rem;
    }

    .btn-container {
        flex-direction: column;
        gap: 15px;
    }

    .btn-outline-dark {
        margin: 0;
    }
}
</style>
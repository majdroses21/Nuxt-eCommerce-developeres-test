<template>
    <!-- Upper Header with Social Media -->
    <div class="bg-lightX py-2 d-none d-lg-block">
        <div class="container">
            <div class="container d-flex flex-wrap">
                <ul class="nav me-auto">
                </ul>
                <ul class="nav ">
                    <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active text-secondary" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link link-dark px-2 text-secondary">About Us</a></li>
                    <li class="nav-item"><a href="#" class="nav-link link-dark px-2 text-secondary">Media Center</a></li>
                    <li class="nav-item"><a href="#" class="nav-link link-dark px-2 text-secondary">Contact Us</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggleX text-black" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            AR
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="#">AR</a></li>
                            <li><a class="dropdown-item" href="#">EN</a></li>
                            <li><a class="dropdown-item" href="#">FR</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Main Header -->
    <header class="py-3 border-bottom">
        <div class="container">
            <!-- Mobile Layout -->
            <div class="d-lg-none">
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Logo -->
                    <div class="mobile-logo">
                        <NuxtLink class="Logo" to="/">
                            <img src="../../assets/Images/Icons/Logo Black.png" alt="Developer Test" class="img-fluid">
                        </NuxtLink>
                    </div>
                    <!-- Mobile Toggle Button -->
                    <button class="navbar-toggler" type="button" @click="toggleMobileMenu" :aria-expanded="mobileMenuOpen">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <!-- Mobile Collapsible Content -->
                <div class="mobile-collapse" :class="{ 'show': mobileMenuOpen }">
                    <div class="mobile-nav-content">
                        <!-- Mobile Navigation -->
                        <ul class="mobile-nav">
                            <li class="mobile-nav-item"><a class="mobile-nav-link" href="#">ELECTRONICS</a></li>
                            <li class="mobile-nav-item"><a class="mobile-nav-link" href="#">JEWELRY</a></li>
                            <li class="mobile-nav-item"><a class="mobile-nav-link" href="#">MEN CLOTHING</a></li>
                            <li class="mobile-nav-item"><a class="mobile-nav-link" href="#">WOMEN CLOTHING</a></li>
                        </ul>
                        <!-- Mobile Search -->
                        <div class="mobile-search mt-3">
                            <div class="input-group search-container">
                                <input type="search" class="form-search bg-light" placeholder="Search" id="mobile-search-input">
                                <img src="../../assets/Images/Icons/Search Mouve.png"/>
                            </div>
                        </div>
                        <!-- Mobile Icons -->
                        <div class="mobile-icons mt-3">
                            <NuxtLink to="/login" class="me-3 icons-nav"> <img src="../../assets/Images/Icons/Login.png" alt=""> </NuxtLink>
                            <NuxtLink to="/cart" class="me-3 icons-nav"> <img src="../../assets/Images/Icons/Cart.png" alt=""> </NuxtLink>
                            <NuxtLink to="/fav" class="me-3 icons-nav"> <img src="../../assets/Images/Icons/heart_11613265.png" alt=""> </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Desktop Layout (unchanged) -->
            <div class="d-none d-lg-block">
                <div class="row align-items-center">
                    <!-- Logo -->
                    <div class="col-md-2" style="position: relative;">
                        <NuxtLink class="Logo" to="/">
                            <img src="../../assets/Images/Icons/Logo Black.png" alt="Developer Test" class="img-fluid">
                        </NuxtLink>
                    </div>
                    <!-- Navigation -->
                    <div class="col-md-6">
                        <ul class="nav justify-content-center">
                            <li class="nav-item"><a class="nav-link text-dark font-bold" href="#">ELECTRONICS</a></li>
                            <li class="nav-item"><a class="nav-link text-dark font-bold" href="#">JEWELRY</a></li>
                            <li class="nav-item"><a class="nav-link text-dark font-bold" href="#">MEN CLOTHING</a></li>
                            <li class="nav-item"><a class="nav-link text-dark font-bold" href="#">WOMEN CLOTHING</a></li>
                        </ul>
                    </div>
                    <!-- Search and Icons -->
                    <div class="col-md-4">
                        <div class="d-flex align-items-center">
                            <div class="input-group search-container">
                                <input type="search" class="form-search bg-light" placeholder="Search" id="search-input">
                                <img src="../../assets/Images/Icons/Search Mouve.png"/>
                            </div>
                            <NuxtLink to="/login" class="ms-1 me-2 icons-nav"> <img src="../../assets/Images/Icons/Login.png" alt=""> </NuxtLink>
                            <NuxtLink to="/cart" class="ms-1 me-2 icons-nav"> <img src="../../assets/Images/Icons/Cart.png" alt=""> </NuxtLink>
                            <NuxtLink to="/fav" class="ms-1 me-2 icons-nav"> <img src="../../assets/Images/Icons/heart_11613265.png" alt=""> </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            mobileMenuOpen: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        }
    }
}
</script>

<style scoped>
/* LOGO Styling */
.Logo {
    /* width: 140px; */
    /* height: 140px; */
}
.Logo >img {
    height: 80px; margin-top: -70px;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

/* Mobile Logo Styling */
.mobile-logo .Logo > img {
    height: 50px;
    margin-top: 0;
}

/* Search */
.input-group{
    position: relative;
    max-width: 5000px !important;
    width: 450px;
}
.input-group > img{
    width: 10%;
    position: absolute;
    right: 6px;
    top: 6px;
    /*  */
}
.form-search{
    border: none;
    width: 100%;
    padding: .375rem .75rem;
}
.input-group > .search-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.form-search {
    border: none;
    width: 100%;
    padding: .375rem .75rem;
    border-radius: 4px !important;
    outline: none;
}
/* Delete X  */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
}
.form-search:focus {
    box-shadow: none;
    outline: none;
}
/* Icons */
.icons-nav > img{
    width: 25px;
    height: 25px;
}
.icons-nav{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

/* Mobile Specific Styles */
@media (max-width: 991.98px) {
    /* Mobile Toggle Button */
    .navbar-toggler {
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 4px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
    }
    
    .navbar-toggler:focus {
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        outline: none;
    }
    
    /* Hamburger Icon */
    .navbar-toggler-icon {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
    }
    
    /* Mobile Collapse */
    .mobile-collapse {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease;
    }
    
    .mobile-collapse.show {
        max-height: 500px;
    }
    
    .mobile-nav-content {
        padding-top: 1rem;
        border-top: 1px solid rgba(0,0,0,.125);
        margin-top: 1rem;
    }
    
    /* Mobile Navigation */
    .mobile-nav {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .mobile-nav-item {
        margin-bottom: 0.5rem;
    }
    
    .mobile-nav-link {
        display: block;
        padding: 0.5rem 0;
        color: #212529;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.15s ease-in-out;
    }
    
    .mobile-nav-link:hover {
        color: #0d6efd;
        text-decoration: none;
    }
    
    /* Mobile Search */
    .mobile-search .input-group {
        width: 100%;
    }
    
    /* Mobile Icons */
    .mobile-icons {
        display: flex;
        align-items: center;
        padding-bottom: 1rem;
    }
}
</style>
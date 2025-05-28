<template>
    <div v-if="isMounted" id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active position-relative">
                <img src="../../assets/Images/Header.jpg" class="d-block w-100" alt="carousel image">
                <div class="shope">
                    <h1>SALE</h1>
                    <p>ACCESS A LIMITED SECTION WITH UP TO 70% OFF</p>
                    <button>
                        <div class="button-image-shope">
                            <img src="../../assets/Images/Icons/Bottun.png" alt="">
                            <span class="font-bold">SHOPE NOW</span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="carousel-item position-relative">
                <img src="../../assets/Images/Header.jpg" class="d-block w-100" alt="carousel image">
                <div class="shope">
                    <h1>SALE</h1>
                    <p>ACCESS A LIMITED SECTION WITH UP TO 70% OFF</p>
                    <button>
                        <div class="button-image-shope">
                            <img src="../../assets/Images/Icons/Bottun.png" alt="">
                            <span class="font-bold">SHOPE NOW</span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="carousel-item position-relative">
                <img src="../../assets/Images/Header.jpg" class="d-block w-100" alt="carousel image">
                <div class="shope">
                    <h1>SALE</h1>
                    <p>ACCESS A LIMITED SECTION WITH UP TO 70% OFF</p>
                    <button>
                        <div class="button-image-shope">
                            <img src="../../assets/Images/Icons/Bottun.png" alt="">
                            <span class="font-bold">SHOPE NOW</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div v-else class="text-center py-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="three-points"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const isMounted = ref(false)

onMounted(async () => {
    if (process.client) {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js')
        isMounted.value = true
        nextTick(() => {
            new bootstrap.default.Carousel(document.getElementById('carouselExampleIndicators'))
        })
    }
})
</script>

<style scoped>
.shope {
    position: absolute;
    top: 250px;
    left: 40px;
}
.shope > p{
    color: #000;
    background-color: #ffffff49;
}
.shope>button {
    border: none;
}

.button-image-shope {
    position: relative;
}

.button-image-shope>span {
    position: absolute;
    top: 40px;
    left: 0px;
    right: 50px;
    bottom: 0;
    color: #fff;
}

/* Carousel Settings */
/* Hide */
.carousel-control-prev,
.carousel-control-next {
    display: none !important;
}

.carousel-indicators {
    position: absolute !important;
    top: 685px;
    bottom: 0px;
}

.carousel-indicators button {
    background-color: black !important;
}

.carousel-indicators .active {
    background-color: black !important;
}

.three-points {
    margin-top: 40px;
}

/* Responsive Adjustments */
/* Mobiles */
@media (max-width: 440px) {
    .shope {
        top: 50px;
        left: 10px;
        width: calc(100% - 20px);
    }

    .shope h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .shope>button {
        all: unset;
    }

    .shope p {
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }

    .button-image-shope img {
        width: 110px;
    }

    .button-image-shope>span {
        position: absolute;
        text-align: center;
        top: 12px;
        left: 8px;
        font-size: 7px;
        color: #fff !important;
    }

    /* Carousal */
    .three-points {
        margin-top: 25px;
    }

    .carousel-indicators {
        position: absolute !important;
        top: 180px;
        bottom: 0px;
    }
}

/* Small Mobiles */
@media (min-width: 320px) and (max-width: 359px) {
    .shope{
        top: 7px;
    }
     .carousel-indicators {
        top: 145px;
    }
}

@media (min-width: 360px) and (max-width: 374px) {
    .carousel-indicators {
        top: 145px;
    }
}

/* Medium Mobiles */
@media (min-width: 375px) and (max-width: 390px) {
    .carousel-indicators{
        top: 170px;
    }
}

/* Tablets */
@media (min-width: 768px) and (max-width: 900px) {
    .shope {
        top: 150px;
        left: 30px;
    }

    .shope>button {
        all: unset;
    }

    .shope h1 {
        font-size: 2rem;
    }

    .shope p {
        font-size: 1rem;
    }

    .button-image-shope img {
        width: 130px;
    }

    .button-image-shope>span {
        position: absolute;
        text-align: center;
        top: 10px;
        left: 8px;
        font-size: x-small;
        color: #fff !important;
    }

    /* Carousal */
    .three-points {
        margin-top: 35px;
    }

    .carousel-indicators {
        top: 370px;
    }
}

/* Mini Tablets */
@media (min-width: 768px) and (max-width: 819px) {
    .carousel-indicators {
        top: 350px;
    }
}

/* Big Tablets */
@media (min-width: 883px) and (max-width: 900px) {
    .carousel-indicators {
        top: 400px !important;
    }
}
</style>
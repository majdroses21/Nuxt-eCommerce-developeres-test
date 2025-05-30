<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button 
                v-for="(item, index) in sliderItems" 
                :key="index"
                type="button" 
                data-bs-target="#carouselExampleIndicators" 
                :data-bs-slide-to="index" 
                :class="{ 'active': index === 0 }"
                :aria-current="index === 0 ? 'true' : 'false'" 
                :aria-label="`Slide ${index + 1}`">
            </button>
        </div>
        <div class="carousel-inner">
            <div 
                v-for="(item, index) in sliderItems" 
                :key="index"
                :class="['carousel-item', 'position-relative', { 'active': index === 0 }]">
                <img :src="item.image" class="d-block w-100" :alt="item.alt || 'carousel image'">
                <div class="shope">
                    <h1>{{ item.title }}</h1>
                    <p v-html="item.description"></p>
                    <button>
                        <NuxtLink :to="item.link" class="button-image-shope">
                            <img :src="item.buttonImage" alt="">
                            <span class="font-bold">{{ item.buttonText }}</span>
                        </NuxtLink>
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
    <div class="three-points"></div>
</template>

<script setup>
import { useSliderStore } from '~/stores/sliderData' //

const sliderStore = useSliderStore()
const { sliderItems } = storeToRefs(sliderStore)
</script>

<style scoped>
.shope {
    position: absolute;
    top: 250px;
    left: 40px;
    z-index: 10;
}

.shope h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 25px;
    letter-spacing: 5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.shope>p {
    color: #000000eb;
    background-color: #ffffff49;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 40px;
    line-height: 1.4;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.shope>button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.shope>button:hover {
    transform: translateY(-2px);
}

.button-image-shope {
    position: relative;
    display: inline-block;
}

.button-image-shope>span {
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: nowrap;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

}

/* Carousel Settings */
/* Hide */
.carousel-control-prev,
.carousel-control-next {
    display: none !important;
}

.carousel-indicators {
    /* border: solid red; */
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

    .button-image-shope>span {
        /* border: red solid; */
        top: 50% !important;
        left: 35% !important;
        font-size: 1rem ;
        letter-spacing: 2px;
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
        /* border: solid red; */
        position: absolute !important;
        top: 180px;
        bottom: 0px;
    }
}

/* Small Mobiles */
@media (min-width: 320px) and (max-width: 359px) {

    /*  */
    .shope {
        top: 7px;
    }

    .carousel-indicators {
        /* border: solid rgb(217, 255, 0); */
        top: 145px;
    }
}

/*  */
@media (min-width: 360px) and (max-width: 374px) {
    .carousel-indicators {
        /* border: solid rgb(133, 102, 212); */
        top: 145px;
    }
}

/* Medium Mobiles */
@media (min-width: 375px) and (max-width: 390px) {
    .carousel-indicators {
        /* border: green solid 1px; */
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
        /* border: solid red; */
        top: 370px;
    }
}

/* Mini Tablets */
@media (min-width: 768px) and (max-width: 819px) {
    .carousel-indicators {
        /* border: solid red; */
        top: 350px;
    }
}

/* Big Tablets */
@media (min-width: 883px) and (max-width: 900px) {
    .carousel-indicators {
        /* border: solid red !important; */
        top: 400px !important;
    }
}
</style>
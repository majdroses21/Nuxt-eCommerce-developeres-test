<template>
    <div class="ad-container position-relative" :style="{ height: customHeight }">
        <img :src="imageSource" alt="ad">
        <NuxtLink to="/categories/jewelery" class="shop-button" v-if="showButton">
            <button>
                <div class="button-content">
                    <img src="../../assets/Images/Icons/Bottun White.png" alt="">
                    <span class="font-bold">SEE MORE</span>
                </div>
            </button>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        showButton: {
            type: Boolean,
            default: true
        },
        imageSource: {
            type: String,
            default: '_nuxt/assets/Images/Jewelry.jpg'
        },
        customHeight: {
            type: String,
            default: 'auto'
        }
    }
}
</script>

<style scoped>
/* Ad Styles */
.ad-container {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
}

.ad-container img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
}

/* Button Styles */
.shop-button {
    position: absolute;
    bottom: 0%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 10;
    transition: transform 0.3s ease;
}
.shop-button:hover{
    transform: translateY(-1px);
}
.shop-button button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}

.button-content {
    position: relative;
    display: inline-block;
}

.button-content>span {
    position: absolute;
    top: 50%;
    left: 36%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 1.1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: nowrap;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Responsive Adjustments */
/* Mobiles */
@media (max-width: 440px) {
    .shop-button {
        bottom: -10px;
        left: 10px;
        width: 30%;
    }

    .button-content>span {
        position: absolute;
        top: 50%;
        left: 36%;
        transform: translate(-50%, -50%);
        color: #000;
        font-size: 0.5rem !important;
        letter-spacing: 2px;
    }

}

/* Tablets */
@media (min-width: 768px) and (max-width: 900px) {
    .shop-button {
        bottom: 0px;
        left: 20px;
        width: 30%;
    }

    .button-content>span {
        left: 42%;
        font-size: large;
    }
}
</style>
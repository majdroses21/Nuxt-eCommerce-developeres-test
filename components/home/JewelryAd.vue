<template>
    <div class="ad-container position-relative">
        <img src="../../assets/Images/Jewelry.jpg" alt="إعلان مجوهرات">
        <div class="shop-button">
            <button>
                <div class="button-content">
                    <img src="../../assets/Images/Icons/Bottun White.png" alt="">
                    <span class="font-bold">SEE MORE</span>
                </div>
            </button>
        </div>
    </div>
</template>

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
    bottom: 10%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 10;
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
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    white-space: nowrap;
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
        left: 40%;
        font-size: x-small;
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
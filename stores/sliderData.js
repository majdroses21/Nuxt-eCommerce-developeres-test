import { defineStore } from "pinia";

export const useSliderStore = defineStore("sliderData", {
  state: () => ({
    sliderItems: [
      {
        id: 1,
        image: "/images/Header.jpg",
        alt: "Sale Banner 1",
        title: "SALE",
        description: "ACCESS A LIMITED SECTION <br> WITH UP TO 70% OFF",
        link: "categories/electronics",
        buttonImage: "/images/icons/Bottun.png", // إذا كانت في public/images/icons/
        buttonText: "SHOP NOW",
      },
      {
        id: 2,
        image: "/images/Header.jpg",
        alt: "SALE",
        title: "MEGA SALE",
        description: "EXCLUSIVE OFFERS <br> UP TO 80% OFF",
        link: "categories/fashion",
        buttonImage: "/images/icons/Bottun.png",
        buttonText: "SHOP NOW",
      },
      {
        id: 3,
        image: "/images/Header.jpg",
        alt: "SALE",
        title: "SALE",
        description: "LIMITED TIME ONLY <br> SAVE BIG TODAY",
        link: "categories/home",
        buttonImage: "/images/icons/Bottun.png",
        buttonText: "SHOP NOW",
      },
    ],
  }),

  getters: {},

  actions: {
    // Later Get The Data From API
    async fetchSliderData() {
      try {
        // const response = await $fetch('/api/slider-data')
        // this.sliderItems = response.data
        console.log("Fetching slider data...");
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    },
  },
});

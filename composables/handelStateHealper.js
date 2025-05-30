// composables/handelStateHelper.js
import { useCartStore } from '~/stores/cart';

export const useStateHandler = () => {
  const { $showToast } = useNuxtApp();
  const cartStore = useCartStore();

  const handelAddToState = (product, type) => {
    switch (type) {
      case 'cart':
        cartStore.initializeCart();
        cartStore.addToCart(product);
        $showToast("Added To Cart", "success");
        break;
      case 'wishlist':
        // cartStore.initializeCart();
        // cartStore.addToWishlist(product) // 
        // $showToast("Added To Wishlist", "success"); // 
        $showToast("You must be a logged in user", "error");
        break;
      default:
        console.log('Unknown type:', type, product);
        break;
    }
  };

  return {
    handelAddToState
  };
};
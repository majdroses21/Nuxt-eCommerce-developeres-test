import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems:  [
        
    ], 
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.cartItems.find(item => item.id === product.id);
    
      if (existingProduct) {
        existingProduct.quantity += product.quantity || 1;
      } else {
        this.cartItems.push({ ...product, quantity: product.quantity || 1 });
      }
    
      this.saveCartToLocalStorage();
    },
    
    getCartItems() {
      const savedItems = localStorage.getItem("cart-items");
      if (savedItems) {
        this.cartItems = JSON.parse(savedItems);
      }
    },

    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
      this.saveCartToLocalStorage(); 
    },

    updateCartItemQuantity({ id, quantity }) {
      const item = this.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        this.saveCartToLocalStorage(); 
      }
    },
    clearCart() {
      this.cartItems = [];
      this.saveCartToLocalStorage(); 
    },
   
    getCartTotal() {
      return this.cartItems.reduce((total, item) => {
        const price = typeof item.price === "string" ? parseFloat(item.price.replace("$", "")) : item.price;
        return total + price * item.quantity; 
      }, 0);
    },

    saveCartToLocalStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
  },
});

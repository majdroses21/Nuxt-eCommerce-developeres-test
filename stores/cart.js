import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems:  [
        
    ], 
  }),
  
  getters: {
    cartItemsCount: (state) => state.cartItems.length,
    cartTotal: (state) => {
      return state.cartItems.reduce((total, item) => {
        const price = typeof item.price === "string" ? parseFloat(item.price.replace("$", "")) : item.price;
        return total + price * item.quantity; 
      }, 0);
    }
  },
  
  actions: {
    // تهيئة السلة من localStorage عند بدء التطبيق
    initializeCart() {
      if (process.client && !this.isInitialized) {
        const savedItems = localStorage.getItem("cart-items");
        if (savedItems) {
          try {
            this.cartItems = JSON.parse(savedItems);
          } catch (error) {
            console.error("Error parsing cart items from localStorage:", error);
            this.cartItems = [];
          }
        }
        this.isInitialized = true;
      }
    },

    addToCart(product) {
      // تأكد من تهيئة السلة أولاً
      this.initializeCart();
      
      const existingProduct = this.cartItems.find(item => item.id === product.id);
    
      if (existingProduct) {
        existingProduct.quantity += product.quantity || 1;
      } else {
        this.cartItems.push({ ...product, quantity: product.quantity || 1 });
      }
    
      this.saveCartToLocalStorage();
    },
    
    // إزالة هذه الدالة واستخدام initializeCart بدلاً منها
    getCartItems() {
      this.initializeCart();
      return this.cartItems;
    },

    getCartTotal() {
      return this.cartTotal; // استخدم getter بدلاً من حساب مباشر
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

    saveCartToLocalStorage() {
      if (process.client) {
        try {
          localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
        } catch (error) {
          console.error("Error saving cart to localStorage:", error);
        }
      }
    },
  },
});
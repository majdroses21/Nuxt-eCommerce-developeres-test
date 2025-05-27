<template>
  <div class="signup-container">
    <div class="signup-content">
      <p class="signup-text">BECOME A MEMBER & GET 15% OFF</p>
      <a href="#" class="signup-button">
        <img 
          src="../../assets/Images/Icons/Bottun.png" 
          alt="SIGN UP FOR FREE"
          class="button-image"
        >
        <span class="button-text font-bold">SIGN UP FOR FREE </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.signup-container {
  background-color: var(--accent-yellow);
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.signup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1200px;
  width: 100%;
}

.signup-text {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
}

.signup-button {
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.button-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  display: block;
}

.button-text {
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  text-transform: uppercase;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .signup-content {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
  
  .button-image {
    max-width: 220px;
  }
}
</style>
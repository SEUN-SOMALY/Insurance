<template>
    <div class="products-page">
      <h1>Our Insurance Products</h1>
  
      <!-- Dropdown for options -->
      <select v-model="selectedProduct" class="dropdown">
        <option value="fire">Fire Insurance</option>
        <option value="auto">Auto Insurance</option>
      </select>
  
      <!-- Show content based on selection -->
      <div v-if="selectedProduct === 'fire'" class="product-details">
        <h2>🔥 Fire Insurance</h2>
        <p>Protect your property from fire damage with our comprehensive fire insurance policy.</p>
      </div>
  
      <div v-if="selectedProduct === 'auto'" class="product-details">
        <h2>🚗 Auto Insurance</h2>
        <p>Drive with peace of mind knowing your vehicle is protected with our auto insurance.</p>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'Products',
  data() {
    return {
      selectedProduct: this.$route.query.type || 'fire', // default 'fire'
    };
  },
  watch: {
    '$route.query.type'(newType) {
      if (newType) {
        this.selectedProduct = newType;
      }
    }
  }
};
</script>

  
  <style scoped>
  .products-page {
    padding: 20px;
  }
  .dropdown {
    margin: 10px 0;
    padding: 8px;
    font-size: 16px;
  }
  .product-details {
    margin-top: 20px;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
  }
  </style>
  
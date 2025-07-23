<template>
    <div class="products-page">
      <!-- Show content based on selection -->
      <div v-if="selectedProduct === 'fire'" class="product-details">
        <Hero/>
        <FactorOfFire/>
        <InsurancePackage/>
        <Benifit/>
      </div>
  
      <div v-if="selectedProduct === 'auto'" class="product-details">
        <HeroAuto/>
        <InsuranceType/>
        <InsuranceDetail/>
      </div>
    </div>
  </template>
  
  <script>
import HeroAuto from '../components/Auto/HeroAuto.vue';
import InsuranceDetail from '../components/Auto/InsuranceDetail.vue';
import InsuranceType from '../components/Auto/InsuranceType.vue';
import Benifit from '../components/HeroFire/Benifit.vue';
import FactorOfFire from '../components/HeroFire/FactorOfFire.vue';
import Hero from '../components/HeroFire/HeroFire.vue'
import InsurancePackage from '../components/HeroFire/InsurancePackage.vue';
import Testimonial from '../components/HeroFire/Testimonial.vue';
export default {
  name: 'Products',
  components: {
    Hero,
    InsurancePackage,
    Benifit,
    Testimonial,
    FactorOfFire,
    HeroAuto,
    InsuranceType,
    InsuranceDetail,
  },
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

  
  
  
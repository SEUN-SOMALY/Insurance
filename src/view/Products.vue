<template>
  <div class="products-page">
    <!-- Show content based on selection -->
    <div v-if="selectedProduct === 'fire'" class="product-details">
      <Hero />
      <FactorOfFire />
      <InsurancePackage />
      <Benifit />
    </div>

    <div v-if="selectedProduct === 'auto'" class="product-details">
      <HeroAuto />
      <TypeInsu />
      <BestInsu />
      <AddInsu/>
      <AddDetail/>
      
    </div>
  </div>
</template>

<script>
import Benifit from '../components/HeroFire/Benifit.vue';
import FactorOfFire from '../components/HeroFire/FactorOfFire.vue';
import Hero from '../components/HeroFire/HeroFire.vue';
import InsurancePackage from '../components/HeroFire/InsurancePackage.vue';
import Testimonial from '../components/HeroFire/Testimonial.vue';
import HeroAuto from '../components/AutoPage/HeroAuto.vue';
import BestInsu from '../components/AutoPage/BestInsu.vue';
import TypeInsu from '../components/AutoPage/TypeInsu.vue';
import AddInsu from '../components/AutoPage/AddInsu.vue';
import AddDetail from '../components/AutoPage/AddDetail.vue';

export default {
  name: 'Products',
  components: {
    Hero,
    InsurancePackage,
    Benifit,
    Testimonial,
    FactorOfFire,
    HeroAuto,
    TypeInsu,
    BestInsu,
    AddInsu,
    AddDetail

    
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

<style scoped>
.dropdown {
  margin: 10px 0;
  padding: 8px;
  font-size: 16px;
}
.product-details {
  background: #f9f9f9;
  border-radius: 8px;
}
</style>

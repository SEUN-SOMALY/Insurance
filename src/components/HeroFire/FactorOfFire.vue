<template>
  <div class="container my-5 px-5">
    <h2 class="fw-bold mb-5 text-blue">ការធានារ៉ាប់រងជាមូលដ្ឋាន</h2>
    <p class="lead mb-4 ">
        កញ្ចប់ធានារ៉ាប់រងពួកយើងគឺជួយប្រឆាំងរាប់អគ្គិភ័យដែលអាចកើតមានដោយដើមហេតុដូចជាភ្លើងគ្រោះធម្មជាតិនិងការ។ ឆេះដោយសារធាតុផ្ទុះជាមួយធានារ៉ាប់រងរបស់ពួកយើងនឹងជួយលោកអ្នកអស់បារម្ភចំពោះដែលមិនអាចដឹងទុកជាមុននេះ​បានយ៉ាងមានទំនុកចិត្ត។
    </p>

    <div class="row justify-content-center ">
      <div class="col-3 h-100 me-5">
        <div class=" h-100 border-0 rounded-3 " style="width: 300px; height: 330px;">
          <div class="card-body text-center d-flex flex-column align-items-center ">
            <img src="../../assets//houseLightning.png" class="img-fluid mb-3" style="width: 130px; height: 130px;" alt="hous lightning">
            <h5 class="card-title fw-bold mb-0">កត្ដាធម្មជាតិ</h5>
            </div>
        </div>
      </div>

      <div class="col-3 me-6">
        <div class=" h-100 border-0 rounded-3" style="width: 300px; height: 280px;">
          <div class="card-body text-center d-flex flex-column align-items-center justify-content-center me-5">
            <img src="../../assets//houseFire.png" class="img-fluid mb-3  " style="width: 150px; height: 130px;" alt="hous lightning">
            <h5 class="card-title fw-bold mb-0">កត្ដាភ្លើង</h5>
            </div>
        </div>
      </div>

      <div class="col-3 me-5">
        <div class="h-100 border-0 rounded-3" style="width: 300px; height: 280px;">
          <div class="card-body text-center d-flex flex-column align-items-center justify-content-center">
            <img src="../../assets//kitchenFire.png" class="img-fluid mb-3 "style="width: 130px; height: 130px;"  alt="hous lightning">
            <h5 class="card-title fw-bold mb-0">កត្ដាសារធាតុផ្ទុះ</h5>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CausesOfFire', // Changed name from 'FactorOfFire' to 'CausesOfFire' for consistency
};
</script>

<style scoped>
/* No custom CSS here, all styling derived from Bootstrap classes */
</style>
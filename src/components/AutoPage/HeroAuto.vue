<template>
  <section class="
      bg-white
      text-white
      py-5 py-lg-5
      d-flex
      align-items-center
      min-vh-75 min-vh-md-100
    ">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        
        <!-- Left side with main image and optional small images below -->
        <div class="col-lg-7 mb-4 mb-lg-0">
          <div class="position-relative">
            <img
              src="../../assets/Insurance_car.jpg"
              class="img-fluid w-75"
              alt="Car Insurance"
              style="max-height: 500px; object-fit: cover;"
            />
          </div>
        </div>

        <!-- Right side: your text content -->
        <div class="col-lg-5 text-lg-start pt-5 pt-lg-0">
          <h1 class="fw-bold mb-3 fs-2 text-blue">
            ការពាររថយន្តរបស់អ្នក
          </h1>
          <p class="mb-4 fs-6 fs-md-5​ text-dark">
            សេវាកម្មយើងមានការធានាលើការខូចខាតតួយានយន្ដ ការផ្ដល់សំណងសេវាកម្មយើងមានការធានាលើការខូចខាតតួយានយន្ដនិងទំនួលខុសត្រូវការផ្ដល់សំណងជាច្រើនទៀតដែលកើតមានឡើងចំពោះលោកអ្នកនិងទំនួលខុសត្រូវជាច្រើនទៀតដែលកើតមានឡើងចំពោះ
          </p>
          <a href="tel:+85570234225" class="btn btn-danger btn-lg rounded-3 px-4 mb-2 shadow">
            ទំនាក់ទំនងយើង
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>


.position-relative img {
  max-height: 500px;
  object-fit: cover;
}
.position-relative .position-absolute img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}


/* Responsive adjustments */
@media (max-width: 991.98px) {
  .contact-info {
    justify-content: center !important;
  }
}
</style>

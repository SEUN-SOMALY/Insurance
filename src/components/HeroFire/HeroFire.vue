<template>
  <section class="
      bg-blue
      text-white
      py-5 py-lg-5
      d-flex
      align-items-center
      min-vh-75 min-vh-md-100
      "
      >
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <div class="position-relative">
            <img src="../../assets/HeroFire1.png" class="img-fluid rounded-3 w-100 " alt="Modern House" style="max-height: 500px; object-fit: cover;">

            <div class="
                position-absolute
                bottom-0
                start-50
                translate-middle-x
                rounded-3
                p-3
                d-flex
                justify-content-center
                gap-3
                "
                >
              <img src="../../assets/HeroFire2.png" class="img-fluid rounded-4 border border-white" alt="Fire damage 1" style="width: 80px; height: 80px; object-fit: cover;">
              <img src="../../assets/HeroFire3.png" class="img-fluid rounded-4 border border-white" alt="Fire damage 2" style="width: 80px; height: 80px; object-fit: cover;">
              <img src="../../assets/HeroFire4.png" class="img-fluid rounded-4 border border-white" alt="Fire damage 3" style="width: 80px; height: 80px; object-fit: cover;">
            </div>
          </div>
        </div>

        <div class="col-lg-5  text-lg-start pt-5 pt-lg-0">
          <h1 class="fw-bold mb-3 fs-2 text-center">រក្សាលំនៅដ្ឋានអ្នកជាមួយធានារ៉ាប់រងឥឡូវនេះ</h1>
          <p class="lead mb-4 fs-6 fs-md-5 ">
            គោលដៅរបស់ពួកយើងជាអ្នកទទួលខុសត្រូវរាល់បញ្ហាអគ្គិភ័យដែលអាចកើតមានឡើងចំពោះលំនៅដ្ឋានលោកអ្នកដែលមកពីកត្ដាផ្សេងជាយថាហេតុ។
            ផ្ទះជាទីកន្លែងកក់ក្ដៅ និងពោពេញទៅដោយសុភមង្គលជាមួយក្រុមគ្រួសារ។​ ពួកយើងនៅទីនេះនឹងជួយរក្សាទីកន្លែងមានតម្លៃមួយនេះសម្រាប់អ្នកគ្រប់បញ្ហា។
          </p>
          <button class="btn btn-danger btn-lg rounded-3 px-4 mb-2 shadow">
            <span class="d-inline-flex align-items-center ">
             ព័ត៌មានបន្ថែម
            </span>
          </button>
          <div class="contact-info d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-3 mt-3">
            <a href="https://t.me/NANINE_KANG" target="_blank" rel="noopener noreferrer" class="text-white  text-decoration-none d-flex align-items-center">
              <span class = "fs-2 me-2">
                <i class="fab fa-telegram-plane"></i>
              </span>
              NANINE_KANG
            </a>
            <a href="tel:+855973687293" class="text-white text-decoration-none d-flex align-items-center">
            <span class="bg-white text-blue rounded-circle d-flex justify-content-center align-items-center me-2" style="width: 30px; height: 30px;">
              <i class=" w-30 h-30 fas fa-phone-alt"></i>
            </span>
            070 234 225
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSectionNoCSS',
  // You might add props here if the image paths or text content need to be dynamic
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

/* Responsive adjustments for borders - Bootstrap only provides vertical borders */
@media (max-width: 991.98px) {
  .border-start.border-end {
    border: none !important; /* Remove vertical borders on small screens */
    border-top: 1px solid rgba(255, 255, 255, 0.25) !important; /* Add horizontal borders */
    border-bottom: 1px solid rgba(255, 255, 255, 0.25) !important;
  }
}
</style>
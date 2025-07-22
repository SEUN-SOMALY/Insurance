<template>
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center mb-5">
          <!-- Left Text -->
          <div class="col-lg-6 text-center text-white mb-4 mb-lg-0">
            <h1 class="hero-title mb-4">យើងការពារនិងថែរក្សាការខិតខំប្រឹងប្រែងរបស់លោកអ្នក</h1>
            <p class="hero-description mb-4">
              បង្កើតសុភមង្គល សុវត្ថិភាព និងការពារក្រុមគ្រួសាររបស់លោកអ្នកជាមួយសេវាកម្មធានារាប់រងពួកយើង។
              ពួកយើងនឹងជាចំណែកនាំឲលោកអ្នកទទួលបាននូវភាពកក់ក្តៅពេញលេញគ្រប់បញ្ហាដែលអាចនឹងកើតមានឡើងចំពោះគ្រួសារអ្នក។
            </p>
            <button class="btn btn-light fw-bold px-4 py-2"><a href="#footer-section">ទំនាក់ទំនងយើង</a></button>
          </div>
  
          <!-- Right Image -->
          <div class="col-lg-6 text-center">
            <img src="/src/assets/Hero.jpg" alt="Family Insurance" class="img-fluid rounded-3 w-75">
          </div>
        </div>
  
        <!-- Stats Section -->
        <div class="hero-stats d-flex flex-column flex-md-row justify-content-center gap-4 rounded-4 text-white text-center mx-auto p-4">
          <div class="stat">
            <h2 class="mb-1">70K+</h2>
            <p class="mb-0">អតិថិជនពួកយើង</p>
          </div>
          <div class="stat">
            <h2 class="mb-1">15+</h2>
            <p class="mb-0">សេវាកម្មពួកយើង</p>
          </div>
          <div class="stat">
            <h2 class="mb-1">20+</h2>
            <p class="mb-0">ផលិតផលពួកយើង</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Khmer OS Font */
  section, h1, p, button, div, span {
    font-family: 'Khmer OS Siemreap', sans-serif;
  }
  
  /* Hero Section */
  .hero-section {
    background: #3B50A8;
  }
  
  /* Title & Description */
  .hero-title {
    font-size: 32px;
    font-weight: bold;
  }
  
  .hero-description {
    font-size: 18px;
    line-height: 1.8;
  }
  
  /* Stats Section */
  .hero-stats {
    background: #e41717;
    max-width: 1000px;
  }
  
  .stat h2 {
    font-size: 32px;
    font-weight: bold;
  }
  
  .stat p {
    font-size: 20px;
  }
.btn:hover{
    background-color: #e41717;
  }
  </style>
  
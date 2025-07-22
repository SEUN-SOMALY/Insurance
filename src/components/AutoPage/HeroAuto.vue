<template>
    <section class="hero-section position-relative overflow-hidden d-flex align-items-center text-white">
      <div class="overlay position-absolute top-0 start-0 w-100 h-100 z-index-1"></div>
  
      <div class="container-fluid z-index-2 position-relative px-0 ">
        <div class="row justify-content-end align-items-center py-3 mx-0 top-75">
          <div class="col-12 col-md-10 col-lg-6 text-start px-4 px-lg-5 " style="width: 400px; margin-left: auto;">
            <h1 class="fw-bold mb-3 fs-2 fs-lg-1 text-blue">
              ការពាររថយន្តរបស់អ្នក
            </h1>
            <p class="mb-4 fs-6 fs-lg-5">
  សេវាកម្មយើងមានការធានាលើការខូចខាតតួយានយន្ដ ការផ្ដល់សំណងសេវាកម្មយើងមានការធានាលើការខូចខាតតួយានយន្ដនិងទំនួលខុសត្រូវការផ្ដល់សំណងជាច្រើនទៀតដែលកើតមានឡើងចំពោះលោកអ្នកនិងទំនួលខុសត្រូវជាច្រើនទៀតដែលកើតមានឡើងចំពោះ          </p>
            <a href="tel:+85570234225" class="btn-blue d-inline-flex align-items-center">
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
  .hero-section {
    background-image: url('/src/assets/Insurance_car.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 70vh;
  }
  
  
  
  .btn-blue {
    background-color: #007bff;
    color: white;
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .btn-blue:hover {
    background-color: red;
    color: white;
  }
  </style>
  
<template>
    <section class="detail-choose container">
      <div class="row g-4">
        
        <!-- Left Cards -->
        <div class="col-12 col-lg-4 d-flex flex-column gap-3">
          <div class="card1 border border-secondary rounded p-3 text-center">
            <i class="fa-solid fa-square-phone fs-2 mb-2 text-primary"></i>
            <p class="text-dark">ការពារសុវត្ថិភាពនិងទំនួលខុសត្រូវរបស់អ្នកជាកាតព្វកិច្ចរបស់យើង យើងនៅទីនេះសម្រាប់លោកអ្នក</p>
          </div>
          <div class="card2 border border-secondary rounded p-3 text-center">
            <i class="fa-solid fa-hand-holding-heart fs-2 mb-2 text-primary"></i>
            <p class="text-dark">ពួកយើងនៅជាមួយអ្នករាល់បញ្ហាទាំងអស់ដែលអាចនិងកើតឡើងចំពោះលោកអ្នក</p>
          </div>
        </div>
  
        <!-- Center Image -->
        <div class="col-12 col-lg-4 text-center">
          <img src="/src/assets/je.jpg" alt="je" class="img-fluid rounded h-100 w-100 object-fit-cover" />
        </div>
  
        <!-- Right Cards -->
        <div class="col-12 col-lg-4 d-flex flex-column gap-3">
          <div class="card3 border border-secondary rounded p-3 text-center">
            <i class="fa-solid fa-headset fs-2 mb-2 text-primary"></i>
            <p class="text-dark">ពួកយើងចាំដោះស្រាយបញ្ហាដែលបានកើតឡើងចំពោះអ្នកបានគ្រប់ពេលវេលា មានការបម្រើអតិថិជន២៤ម៉ោង។</p>
          </div>
          <div class="card4 border border-secondary rounded p-3 text-center">
            <i class="fa-solid fa-shield-halved fs-2 mb-2 text-primary"></i>
            <p class="text-dark">ការពារសុវត្ថិភាពនិងទំនួលខុសត្រូវរបស់អ្នកជាកាតព្វកិច្ចរបស់ពួកយើង យើងនៅទីនេះសម្រាប់អ្នក។</p>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <style scoped>
  .detail-choose {
    margin: 5% auto;
  }
  
  img {
    object-fit: cover;
    border-radius: 15px;
    height: 100%;
  }
  
  .card1, .card2, .card3, .card4 {
    color: #3B50A8;
    border-radius: 15px;
    height: 100%;
  }
  
  p {
    font-size: 14px;
  }
  </style>
  
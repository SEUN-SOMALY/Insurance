<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- Left Text -->
      <div class="hero-left">
        <h1 class="hero-title">
          យើងការពារនិងថែរក្សាការខិតខំប្រឹងប្រែងរបស់លោកអ្នក
        </h1>
        <p class="hero-description">
          បង្កើតសុភមង្គល សុវត្ថិភាព និងការពារក្រុមគ្រួសាររបស់លោកអ្នកជាមួយសេវាកម្មធានារាប់រងពួកយើង។
          ពួកយើងនឹងជាចំណែកនាំឲលោកអ្នកទទួលបាននូវភាពកក់ក្តៅពេញលេញគ្រប់បញ្ហាដែលអាចនឹងកើតមានឡើងចំពោះគ្រួសារអ្នក។
        </p>
        <button class="hero-btn">ទំនាក់ទំនងយើង</button>
      </div>

      <!-- Right Image -->
      <div class="hero-right">
        <img src="../assets/Hero.jpg" alt="Family Insurance" />
      </div>
    </div>

    <!-- Bottom Red Box Stats -->
      <div class="hero-stats ">
        <div class="stat">70K+ <br><span>អតិថិជនពួកយើង</span></div>
        <div class="stat">15+ <br><span>សេវាកម្មពួកយើង</span></div>
        <div class="stat">20+ <br><span>ផលិតផលពួកយើង</span></div>
      </div>
  </section>
      <div class="service">
        <span class="Text-Detail">សេវាកម្មពួកយើងផ្តល់ជូននៅសុវត្តិភាព</span>
      </div>
      <section class="service-detail d-flex gap-3 mt-5">
        <div class="w-25 h-100 shadow p-3 mb-5 bg-body rounded ">
          <i class="fa-solid fa-phone-volume text-primary"></i>
          <div class=""><span class="">ផ្តល់ដំណោះស្រាយ</span></div>
          
        </div>
        <div class="w-25 h-100 shadow p-3 mb-5 bg-body rounded box-center">
          <i class="fa-solid fa-user text-success"></i>
        </div>
        <div class="w-25 h-100 shadow p-3 mb-5 bg-body rounded box-center">
          <i class="fa-solid fa-star text-warning"></i>
        </div>
        <div class="w-25 h-100 shadow p-3 mb-5 bg-body rounded box-center">
          <i class="fa-solid fa-shield-halved text-danger"></i>
        </div>
      </section>


</template>

<style scoped>
.hero-section {
  background: #2549d8;
  color: white;
  font-family: 'Khmer OS', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 78vh;
  padding: 60px 70px ;
}

.hero-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1700px;
  width: 100%;
}

.hero-left {
  /* background-color: #2d6cdf; */
  color: white;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  width: 650px;
  margin: 0 auto;
  font-family: 'Khmer OS', sans-serif;
}

.hero-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.hero-btn {
  background-color: #103297;
  color: #cfd6f3;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
}

.hero-btn:hover {
  background: #fc0202;
}

.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.hero-right img {
  width: 80%;
  max-width: 650px;
  border-radius: 20px;
}

/* Bottom Stats Box */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  width: 88%;
  height: 20vh;
  margin: 3% 0 0 2%;
  padding: 40px 10px;
  gap: 120px;
  background: #e41717;
  border-radius: 15px;
}

.stat {
  color: white;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
}

.stat span {
  font-size: 28px;
  font-weight: normal;
}
.service{
  width: 80%;
  height: 7vh;
  background-color: #103297;
  margin-top: 8%;
  margin-left: 11%;
  border-radius: 10px;
}
.service .Text-Detail{
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: white
}
.box-center {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-center i {
  font-size: 16px;
}
.service-detail{
  width: 80%;
  height: 30vh;
  margin-left: 11%;
  background: #e59a9a;
}
</style>

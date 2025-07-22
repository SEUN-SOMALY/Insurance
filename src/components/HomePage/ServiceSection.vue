<template>
    <section id="service-section" class="service mb-4">
      <span class="Text-Detail">សេវាកម្មពួកយើងផ្តល់ជូននៅសុវត្តិភាព</span>
    </section>
  
    <section class="service-detail container">
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3" v-for="(item, i) in services" :key="i">
          <div class="shadow p-3 h-100 bg-body border border-primary rounded text-center d-flex flex-column justify-content-between">
            <div class="icon-call mx-auto mb-3">
              <i :class="item.icon + ' text-light'"></i>
            </div>
            <div class="mb-3">
              <span class="Text-Call d-block">{{ item.title }}</span>
              <span class="Small-text d-block">{{ item.description }}</span>
            </div>
            <button class="DT-btn mt-auto">ព័តមានបន្ថែម</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      icon: 'fa-solid fa-phone-volume',
      title: 'ផ្តល់ដំណោះស្រាយ',
      description: 'ពួកយើងមានក្រុមការងាររងចាំដោះស្រាយបញ្ហាជូនអតិថិជន២៤ម៉ោងក្នុងមួយថ្ងៃរាល់បញ្ហា។'
    },
    {
      icon: 'fa-solid fa-lock',
      title: 'ថែរក្សាការពារ',
      description: 'ការរក្សាសុវត្តិភាពលោកអ្នកគឺជាតូនាទីចម្បងរបស់ក្រុមហ៊ុនធានារាប់រងយើងខ្ញុំ។'
    },
    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'ការបង់ប្រាក់',
      description: 'ចំណាយតិចចំណេញច្រើន សេវាកម្មយើងខ្ញុំមានភាពបត់បែនតាមលទ្ធភាពរបស់លោកអ្នក។'
    },
    {
      icon: 'fa-solid fa-scale-balanced',
      title: 'ផែនការបត់បែន',
      description: 'មានជម្រើសផ្លាស់ប្តូរទៅតាមសភាពជាក់ស្តែងរបស់អតិថិជន។'
    }
  ];
  </script>
  
  <style scoped>
  .service {
    width: 82%;
    height: 7vh;
    background-color: #3B50A8;
    margin: 5% auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Text-Detail {
    font-size: 30px;
    color: white;
  }
  
  .service-detail {
    width: 90%;
    margin: 0 auto;
  }
  
  .icon-call {
    width: 60px;
    height: 60px;
    background: #3B50A8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
  
  .Text-Call {
    margin-top: 15px;
    color: #e41717;
    font-size: 20px;
    font-weight: bold;
  }
  
  .Small-text {
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
    padding: 0 10px;
  }
  
  .DT-btn {
    background-color: #3B50A8;
    color: #cfd6f3;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .DT-btn:hover {
    background: #fc0202;
  }
  </style>
  
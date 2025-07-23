<template>
  <footer class="footer border-top py-4">
    <div class="container">
      <div class="row">
        <!-- Description Card -->
        <div class="col-md-3 mb-3">
          <div class="card p-3 h-100">
            <img src="../assets/Logoo.png" alt="Logo" />
            <p class="text-muted mt-2 mb-0">
              ទាក់ទងក្រុមការងាររបស់យើងឥឡូវនេះដើម្បីទទួលយកការប្រឹក្សាយោបល់ដោយឥតគិតថ្លៃ
            </p>
          </div>
        </div>

        <!-- Quick Links Card -->
        <div class="col-md-3 mb-3">
          <div class="card p-3 h-100">
            <h5 class="fw-bold mb-3">ក្រុមហ៊ុន</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/" class="text-decoration-none text-dark">ទំព័រដើម</router-link>
              </li>
              <li>
                <router-link to="/products" class="text-decoration-none text-dark">ផលិតផល</router-link>
              </li>
              <li>
                <a href="#" class="text-dark text-decoration-none" @click.prevent="scrollToSection('service-section')">សេវាកម្ម</a>
              </li>
              <li><router-link id="footer-section" to="/contact" class=" text-decoration-none text-dark"></router-link></li>

            </ul>
          </div>
        </div>

        <!-- Contact Card -->
        <div class="col-md-3 mb-3">
          <div class="card p-3 h-100">
            <h5 class="fw-bold mb-3">សេវាកម្មទាន់ចិត្ត</h5>
            <p class="mb-1 text-dark">097 368 7293 / 093 529 666</p>
            <p class="mb-3 text-dark small">(ចន្ទ-សុក្រ ពេល ៨ ព្រឹក - ៥ យប់)</p>
          </div>
        </div>

        <!-- Special Service Card -->
        <div class="col-md-3 mb-3">
          <div class="card p-3 h-100">
            <h5 class="fw-bold mb-3">ទំនាក់ទំនងពួកយើង</h5>
            <div class="d-flex mt-3 ms-5 gap-3 fs-4 mb-3">
              <a href="tel:070234225"><i class="fa-solid fa-phone-volume text-danger"></i></a>
              <a href="https://t.me/Nanine_Kang"><i class="fa-brands fa-telegram text-danger"></i></a>
              <a href="mailto:dinanine.kang@lyhoursbiinsurance.com.kh"><i class="fa-solid fa-envelope text-danger"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="py-4 border-top">
    <p class="small mb-0 text-center pt-3 mt-0">© 2025 Insurance | Powered by Insurance</p>
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.footer {
  font-family: 'Khmer OS Siemreap', sans-serif;
}

a:hover {
  color: #e41717 !important;
}

.card {
  border: none;
  color: #3B50A8 !important;
  box-shadow: none;
}

.py-4 {
  padding-top: 1rem;
}
</style>

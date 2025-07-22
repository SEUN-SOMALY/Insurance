<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="../assets/Logoo.png" alt="Logo" class="logo" />
    </div>

    <!-- Hamburger icon -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul :class="['nav-list', { 'show': isMenuOpen }]">
      <li><router-link :to="{ path: '/', query: { type: 'home' } }"><a href="#" class="text-decoration-none">ទំព័រដើម</a></router-link></li>
      <!-- <li><router-link to="/about">អំពីយើង</router-link></li> -->
      <li class="dropdown">
        <a href="#">ផលិតផល <span class="dropdown-icon">▼</span></a>
        <ul class="dropdown-menu">
          <li><router-link :to="{ path: '/products', query: { type: 'fire' } }">Fire Home</router-link></li>
          <li><router-link :to="{ path: '/products', query: { type: 'auto' } }">Auto</router-link></li>
        </ul>
      </li>
      <li><a href="#service-section" class="text-decoration-none">សេវាកម្ម</a></li>
      <li><a href="#footer-section" class=" text-decoration-none">ទំនាក់ទំនង</a></li>
    </ul>

    <div class="call-info">
      <span class="call-icon">📞</span>
      <div class="call-text">
        <div class="call-title">Call for Help</div>
        <div class="call-number">+855 070 234 225</div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+TZ+Guides&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Suwannaphum:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Khmer+OS&display=swap');

* {
  font-family: 'Khmer OS Siemreap', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  height: 10vh;
  border-bottom: 1px solid #ddd;
  position: relative;
  padding: 0 20px;
  z-index: 999;
}

.navbar-left {
  height: 100%;
  width: 15%;
  /* background: #000; */
}

.navbar-left .logo {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

/* Hamburger Icon */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background-color: #2549d8;
  border-radius: 3px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-list li {
  position: relative;
}

.nav-list a {
  text-decoration: none;
  color: #2549d8;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.nav-list a:hover {
  color: #1a3fb0;
}

/* Dropdown */
.dropdown-icon {
  margin-left: 6px;
  font-size: 12px;
  transition: transform 0.3s ease;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  min-width: 160px;
  z-index: 999;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu li a {
  padding: 10px 20px;
  color: #2549d8;
  font-size: 16px;
  white-space: nowrap;
}

.dropdown-menu li a:hover {
  background-color: #f0f0f0;
}

.call-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.call-icon {
  font-size: 20px;
  color: green;
}

.call-text {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.2;
}

.call-title {
  font-weight: bold;
  color: #444;
}

.call-number {
  color: #007bff;
}
.header {
  background-color: #103297;
}

.nav-links a {
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #fc0202;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-list {
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    height: auto;
    padding: 15px;
  }

  .hamburger {
    display: flex;
  }

  .nav-list {
    display: none;
    width: 100%;
    flex-direction: column;
    margin-top: 15px;
    gap: 15px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
  }

  .nav-list.show {
    display: flex;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding: 0;
    background: transparent;
  }

  .dropdown:hover .dropdown-menu {
    display: none;
  }

  .dropdown > a::after {
    content: ' ▼';
    font-size: 12px;
  }

  .call-info {
    width: 100%;
    justify-content: center;
    margin-top: 15px;
  }
}
</style>

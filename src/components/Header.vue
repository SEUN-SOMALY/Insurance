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

    <!-- Navigation Links -->
    <ul :class="['nav-list', { 'show': isMenuOpen }]">
      <li>
        <router-link :to="{ path: '/', query: { type: 'home' } }">
          ទំព័រដើម
        </router-link>
      </li>

      <!-- Dropdown -->
      <li class="dropdown">
        <a href="#" @click.prevent="toggleDropdown">
          ផលិតផល <span class="dropdown-icon">▼</span>
        </a>
        <ul v-show="isDropdownOpen" class="dropdown-menu">
          <li>
            <router-link :to="{ path: '/products', query: { type: 'fire' } }">Fire Home</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/products', query: { type: 'auto' } }">Auto</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="#service-section">សេវាកម្ម</a>
      </li>
      <li>
        <a href="#footer-section">ទំនាក់ទំនង</a>
      </li>
    </ul>

    <!-- Call Info -->
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
const isDropdownOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Khmer+OS&display=swap');

* {
  font-family: 'Khmer OS', sans-serif;
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
}

.logo {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

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
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  min-width: 160px;
  z-index: 999;
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

.dropdown-icon {
  margin-left: 6px;
  font-size: 12px;
}

/* Call Info */
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

  .dropdown-menu li a {
    padding-left: 10px;
  }

  .call-info {
    width: 100%;
    justify-content: center;
    margin-top: 15px;
  }
}
</style>

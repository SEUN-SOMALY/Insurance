<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="../assets/LH-SBI-Insurance-Official-Logo.png" alt="Logo" class="logo" />
    </div>

    <ul class="nav-list">
      <li><router-link to="/">ទំព័រដើម</router-link></li>
      <li><router-link to="/about">អំពីយើង</router-link></li>
      <li class="dropdown">
        <a href="#">ផលិតផល <span class="dropdown-icon">▼</span></a>
        <ul class="dropdown-menu">
          <li><router-link :to="{ path: '/products', query: { type: 'fire' } }">Fire Home</router-link></li>
          <li><router-link :to="{ path: '/products', query: { type: 'auto' } }">Auto</router-link></li>
        </ul>
      </li>
      <li><a href="#">សេវាកម្ម</a></li>
      <li><a href="#">ទំនាក់ទំនង</a></li>
    </ul>

    <div class="call-info">
      <span class="call-icon">📞</span>
      <div class="call-text">
        <div class="call-title">Call for Help</div>
        <div class="call-number">+855 97 967 9172</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Khmer+OS&display=swap');

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px 50px;
  border-bottom: 1px solid #ddd;
  font-family: 'Khmer OS', sans-serif;
  position: relative;
  z-index: 999;
}

.logo {
  height: 50px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
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
  padding: 8px 0;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  font-family: 'Khmer OS', sans-serif;
}

.nav-list a:hover {
  color: #1a3fb0;
}

.dropdown {
  position: relative;
}

.dropdown-icon {
  margin-left: 6px;
  font-size: 12px;
  transition: transform 0.3s ease;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
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
  display: block;
  padding: 10px 20px;
  color: #2549d8;
  font-family: 'Khmer OS', sans-serif;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.dropdown-menu li a:hover {
  background-color: #f0f0f0;
}

/* Call Info */
.call-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Khmer OS', sans-serif;
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
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-list {
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
    gap: 10px;
  }

  .call-info {
    margin-top: 15px;
    align-self: flex-end;
  }

  .dropdown:hover .dropdown-icon {
    transform: rotate(180deg);
  }
}
</style>

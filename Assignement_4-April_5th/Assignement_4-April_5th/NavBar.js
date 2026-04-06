// navbar.js
const Navbar = {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  },
  template: `
    <nav class="navbar">
      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <ul class="nav-links" :class="{ active: isActive }">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="music.html">Music</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="merch.html">Merch</a></li>
      </ul>
    </nav>
  `
};

// make it available globally
window.Navbar = Navbar; 

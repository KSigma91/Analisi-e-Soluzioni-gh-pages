<template>
  <div id="app">
    <NavbarApp />
    <main>
      <router-view></router-view>
    </main>
    <FooterApp />
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp,
    FooterApp
  },
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
// Da tenere in considerazione il font "Markazi Text"

#app {
  font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app::-webkit-scrollbar-track {
  background: white;
}
  
#app::-webkit-scrollbar-thumb {
  background-color: #4070F4;
  border-radius: 20px;
  border: 1px solid #4070F4;
}

h1, h2, h3, h4, h5, h6, a {
  font-family: 'Inter';
}

hr {
    width: 60px;
    border: 1.8px solid #f5bc41;
}

.btn {
  font-family: 'Inter';
  background-color: #3B71CA;
  border-color: #3B71CA; 
}
</style>

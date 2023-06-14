<script>
import { store } from './store';

import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppFooter from './components/AppFooter.vue';
import AppContent from './components/AppContent.vue';

export default {
  components:{
    AppHeader,
    AppHero,
    AppFooter,
    AppContent
  },
  data() {
    return {
      store,
      play: '',
      isLoading: true,
    }
  },
  methods: {
    autoPlay(){
      this.play = setInterval(() => {
        this.store.owner1Speaking = !this.store.owner1Speaking;
      }, 3000);
    }
  },
  mounted() {
    this.autoPlay();

    // gestione schermata loading
    this.isLoading = true;
    window.addEventListener('load', () => {
      this.isLoading = false;
    })
  },
}

</script>

<template>
  <div v-if="isLoading" class="loading-screen">
    <strong>Loading...</strong>
    <div class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  
  </div>

  <!-- header -->
  <AppHeader />
  <!-- main -->
  <main>
    <AppHero />
    <AppContent />
  </main>
  <!-- footer -->
  <AppFooter />

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

.loading-screen{
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  z-index: 100;
  .visually-hidden{
    font-size: 500px;
  }
}


</style>

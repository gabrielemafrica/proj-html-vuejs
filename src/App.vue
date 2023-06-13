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
    }
  },
  methods: {
    
  },
}

</script>

<template>

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

</style>

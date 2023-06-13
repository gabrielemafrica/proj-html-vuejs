<script>
import { store } from '../store';

import SectionMainSchede from './SectionMainSchede.vue';

export default {
  name: 'AppContent',
  components: {
    SectionMainSchede,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <!-- sezione schede -->
  <SectionMainSchede />
  <!-- sezione parallasse -->
  <!-- sezione recent work -->
  <!-- sezione core values -->
  <!-- sezione latest news -->
  <!-- sezione patners -->
  <!-- sezione bulding -->
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;


</style>

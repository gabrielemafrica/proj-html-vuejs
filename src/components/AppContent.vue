<script>
import { store } from '../store';

import SectionMainSchede from './SectionMainSchede.vue';
import SectionMainParallasse from './SectionMainParallasse.vue';
import SectionMainRecent from './SectionMainRecent.vue';

export default {
  name: 'AppContent',
  components: {
    SectionMainSchede,
    SectionMainParallasse,
    SectionMainRecent,
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
  <SectionMainParallasse />
  <!-- sezione recent work -->
  <SectionMainRecent />
  <!-- sezione core values -->
  <!-- sezione latest news -->
  <!-- sezione patners -->
  <!-- sezione bulding -->
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;


</style>

<script>
import { store } from '../store';

import SectionMainSchede from './SectionMainSchede.vue';
import SectionMainParallasse from './SectionMainParallasse.vue';
import SectionMainRecent from './SectionMainRecent.vue';
import SectionMainCore from './SectionMainCore.vue';
import SectionOwners from './SectionOwners.vue';

export default {
  name: 'AppContent',
  components: {
    SectionMainSchede,
    SectionMainParallasse,
    SectionMainRecent,
    SectionMainCore,
    SectionOwners,
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
  <SectionMainCore />
  <!-- sezione Owners -->
  <SectionOwners />
  <!-- sezione latest news -->
  <!-- sezione patners -->
  <!-- sezione bulding -->
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;


</style>
